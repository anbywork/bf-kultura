import {templateContent} from "../utils/polyfills";

export class UploadField {
  constructor(uploadField) {
    this.uploadField = uploadField;
    this.hasFile = false;
    this.fileInput = uploadField.querySelector('#file-input');

    this.fileInput.addEventListener('focus', () => {
      this.fileInputFocusHandler();
    });
    this.fileInput.addEventListener('blur', () => {
      this.fileInputBlurHandler();
    });
    this.fileInput.addEventListener('change', (evt) => {
      this.fileInputChangeHandler(evt);
    });
    if (this.isIE()) {
      this.setNotDragAndDrop();
    } else {
      this.setDragAndDrop();
    }

    this.setDragAndDrop = this.setDragAndDrop.bind(this);
    this.setNotDragAndDrop = this.setNotDragAndDrop.bind(this);
    this.uploadFieldHandler = this.uploadFieldHandler.bind(this);

    this.uploadFieldDragoverHandler = this.uploadFieldDragoverHandler.bind(this);
    this.uploadFieldDragenterHandler = this.uploadFieldDragenterHandler.bind(this);
    this.uploadFieldDragleaveHandler = this.uploadFieldDragleaveHandler.bind(this);
    this.uploadFieldDropHandler = this.uploadFieldDropHandler.bind(this);

    this.fileInputFocusHandler = this.fileInputFocusHandler.bind(this);
    this.fileInputBlurHandler = this.fileInputBlurHandler.bind(this);
    this.fileInputChangeHandler = this.fileInputChangeHandler.bind(this);
    this.createFile = this.createFile.bind(this);

    this.deleteBtnClickHandler = this.deleteBtnClickHandler.bind(this);
    this.deleteFileFromList = this.deleteFileFromList.bind(this);
    this.resetInputFile = this.resetInputFile.bind(this);

    this.uploadFieldFocus = this.uploadFieldFocus.bind(this);
    this.uploadFieldBlur = this.uploadFieldBlur.bind(this);
    this.hideUploadField = this.hideUploadField.bind(this);

    this.showUploadField = this.showUploadField.bind(this);
    this.isIE = this.hideUploadField.bind(this);
  }


  setDragAndDrop() {
    //drag & drop
    this.uploadField.addEventListener('drag', (evt)=>{
      this.uploadFieldHandler(evt);
    }, false);
    this.uploadField.addEventListener('dragstart', (evt)=>{
      this.uploadFieldHandler(evt);
    }, false);
    this.uploadField.addEventListener('dragend', (evt)=>{
      this.uploadFieldHandler(evt);
    }, false);

    this.uploadField.addEventListener('dragover', (evt)=>{
      this.uploadFieldDragoverHandler(evt);
    }, false);
    this.uploadField.addEventListener('dragenter', (evt)=>{
      this.uploadFieldDragenterHandler(evt);
    }, false);

    this.uploadField.addEventListener('drop', (evt)=>{
      this.uploadFieldDropHandler(evt);
    }, false);
    this.uploadField.addEventListener('dragleave', (evt)=>{
      this.uploadFieldDragleaveHandler(evt);
    }, false);
  }

  setNotDragAndDrop() {
    const message = this.uploadField.querySelector('.form2__upload-field-message');
    message.textContent = '';
    const label = this.uploadField.querySelector('.form2__upload-field-label');
    label.textContent = 'Выберите файл с компьютера';
  }

  uploadFieldHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  uploadFieldDragoverHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.uploadFieldFocus();
  }

  uploadFieldDragenterHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.uploadFieldFocus();
  }

  uploadFieldDragleaveHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    let dx = evt.pageX - uploadField.left;
    let dy = evt.pageY - uploadField.top;
    if ((dx < 0) || (dx > uploadField.width) || (dy < 0) || (dy > uploadField.height)) {
      uploadFieldBlur();
    }
    ;
  }

  uploadFieldDropHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.uploadFieldBlur();
    let files = evt.dataTransfer.files;

    const fileInput = this.uploadField.querySelector('#file-input');

    fileInput.files = files;
    this.createFile(files);
    this.hideUploadField();
  }

  fileInputFocusHandler() {
    this.uploadFieldFocus();
  }

  fileInputBlurHandler() {
    this.uploadFieldBlur();
  }

  fileInputChangeHandler(evt) {
    this.createFile(evt.target.files);
    this.hideUploadField();
  }

  createFile(files) {
    if (files && !this.hasFile) {
      const templateFile = templateContent(document.querySelector('.form2__uploaded-file-template'));
      const listFiles = document.querySelector('.form2__uploaded-file-list');

      const file = templateFile.cloneNode(true);
      file.querySelector('.doc__title').textContent = files[0].name;
      const deleteBtn = file.querySelector('.doc__delete-btn');
      deleteBtn.addEventListener('click', this.deleteBtnClickHandler);
      listFiles.appendChild(file);
      this.hasFile = true;
    }
  }

  deleteBtnClickHandler(evt) {
    this.deleteFileFromList(evt.target);
    this.resetInputFile();
    this.showUploadField();
  }

  deleteFileFromList(btn) {
    const uploadedFileElement = btn.closest('.form2__uploaded-file');
    uploadedFileElement.remove();
    this.hasFile = false;
  }

  resetInputFile() {
    const fileInput = this.uploadField.querySelector('#file-input');
    fileInput.type = 'text';
    fileInput.type = 'file';
    fileInput.value = '';
  }

  uploadFieldFocus() {
    this.uploadField.classList.add('form2__upload-field--focus');
  }

  uploadFieldBlur() {
    this.uploadField.classList.remove('form2__upload-field--focus');
  }

  hideUploadField() {
    this.uploadField.classList.add('visually-hidden');
  }

  showUploadField() {
    this.uploadField.classList.remove('visually-hidden');
  }

  isIE() {
    if (navigator.userAgent.indexOf("Trident") != -1) {
      return true;
    }
    return false;
  }
}
