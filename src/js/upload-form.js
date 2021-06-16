function uploadForm(form, formWrapper, messageClassElem) {
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    hideForm(form);
    if (xhr.status != 200) {
      showMessage(messageClassElem + '--error', formWrapper);
    } else {
      showMessage(messageClassElem + '--success', formWrapper);
    }
  });

  xhr.addEventListener('error', function () {
    hideForm(form);
    showMessage(messageClassElem + '--error', formWrapper);
  })

  let URL = form.getAttribute('action');
  let formData = new FormData(form);

  xhr.open('POST', URL);
  xhr.responseType = 'json';
  xhr.send(formData);

  function showMessage(messageClass, formWrapper) {
    let message = formWrapper.querySelector('.' + messageClass);
    message.classList.remove(messageClassElem + '--hide');
    let timeForShowMessage = 10000;
    // setTimeout(hideMessage, timeForShowMessage, message);
    // setTimeout(showForm, timeForShowMessage, form)

    let messageHideBtn = message.querySelector('.message__hide-btn');
    if (messageHideBtn) {
      messageHideBtn.addEventListener('click', function() {
        hideMessage(this.closest('.' + messageClass));
        showForm(form);
      });
    }
  }

  function hideMessage(message) {
    message.classList.add(messageClassElem + '--hide');
  }

  function hideForm(form) {
    if (form.classList.contains('popup-feedback__form')) {
      form.classList.add('form--hide');
    } else if (form.classList.contains('project-form')) {
      form.classList.add('project-form--hide');
    }

  }

  function showForm(form) {
    form.classList.remove('form--hide');
    form.classList.remove('project-form--hide');
  }
}



