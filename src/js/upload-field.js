{
  'use strict';
  const uploadField = document.querySelector('.form2__upload-field');
  let hasFile = false;
  if (uploadField) {
    const fileInput = uploadField.querySelector('#file-input');
    fileInput.addEventListener('focus', fileInputFocusHandler);
    fileInput.addEventListener('blur', fileInputBlurHandler);
    fileInput.addEventListener('change', fileInputChangeHandler);
    if (isIE()) {
      console.log('done ie');
      setNotDragAndDrop();
    } else {
      setDragAndDrop();
    }
  }

  function setDragAndDrop() {
    const fileInput = uploadField.querySelector('#file-input');

    //drag & drop
    uploadField.addEventListener('drag', uploadFieldHandler, false);
    uploadField.addEventListener('dragstart', uploadFieldHandler, false);
    uploadField.addEventListener('dragend', uploadFieldHandler, false);

    uploadField.addEventListener('dragover', uploadFieldDragoverHandler, false);
    uploadField.addEventListener('dragenter', uploadFieldDragenterHandler, false);

    uploadField.addEventListener('drop', uploadFieldDropHandler, false);
    uploadField.addEventListener('dragleave', uploadFieldDragleaveHandler, false);
  }

  function setNotDragAndDrop() {
    const message = uploadField.querySelector('.form2__upload-field-message');
    message.textContent = '';
    const label = uploadField.querySelector('.form2__upload-field-label');
    label.textContent = 'Выберите файл с компьютера';
  }
  function uploadFieldHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }


  function uploadFieldDragoverHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    uploadFieldFocus();
  }
  function uploadFieldDragenterHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    uploadFieldFocus();
  }

  function uploadFieldDragleaveHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    let dx = evt.pageX - uploadField.left;
    let dy = evt.pageY - uploadField.top;
    if ((dx < 0) || (dx > uploadField.width) || (dy < 0) || (dy > uploadField.height)) {
      uploadFieldBlur();
    };
  }
  function uploadFieldDropHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    uploadFieldBlur();
    let files = evt.dataTransfer.files;

    const fileInput = uploadField.querySelector('#file-input');

    fileInput.files = files;
    createFile(files);
    hideUploadField();
  }



  function fileInputFocusHandler(evt) {
    uploadFieldFocus();
  }

  function fileInputBlurHandler(evt) {
    uploadFieldBlur();
  }

  function fileInputChangeHandler(evt) {
    createFile(this.files);
    hideUploadField();
  }

  function createFile(files) {
    if (files && !hasFile) {
      // const templateFile = document.querySelector('.form2__uploaded-file-template').content;
      const templateFile = templateContent(document.querySelector('.form2__uploaded-file-template'));
      const listFiles = document.querySelector('.form2__uploaded-file-list');

      const file = templateFile.cloneNode(true);
      file.querySelector('.doc__title').textContent = files[0].name;
      const deleteBtn = file.querySelector('.doc__delete-btn');
      deleteBtn.addEventListener('click', deleteBtnClickHandler);
      listFiles.appendChild(file);
      hasFile = true;
    }
  }

  function deleteBtnClickHandler(evt) {
    deleteFileFromList(this);
    resetInputFile();
    showUploadField();
  }

  function deleteFileFromList(btn) {
    const uploadedFileElement = btn.closest('.form2__uploaded-file');
    uploadedFileElement.remove();
    hasFile = false;
  }

  function resetInputFile() {
    const fileInput = uploadField.querySelector('#file-input');
    fileInput.type = 'text';
    fileInput.type = 'file';
    fileInput.value = '';
  }

  function uploadFieldFocus() {
    uploadField.classList.add('form2__upload-field--focus');
  }
  function uploadFieldBlur() {
    uploadField.classList.remove('form2__upload-field--focus');
  }

  function hideUploadField() {
    uploadField.classList.add('visually-hidden');
  }

  function showUploadField() {
    uploadField.classList.remove('visually-hidden');
  }

  function isIE()
  {
    if(navigator.userAgent.indexOf("Trident") != -1)
    {
      return true;
    }
    return false;
  }
}
