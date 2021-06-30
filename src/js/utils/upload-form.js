export const uploadForm = (form, formWrapper, messageClassElem) => {
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () =>{
    hideForm(form);
    if (xhr.status != 200) {
      showMessage(messageClassElem + '--error', formWrapper, messageClassElem);
    } else {
      showMessage(messageClassElem + '--success', formWrapper, messageClassElem);
    }
  });

  xhr.addEventListener('error', () => {
    hideForm(form);
    showMessage(messageClassElem + '--error', formWrapper, messageClassElem);
  })

  let URL = form.getAttribute('action');
  let formData = new FormData(form);

  xhr.open('POST', URL);
  xhr.responseType = 'json';
  //xhr.send(formData);
  debugger;
  //todo: вернуть отправку формы
  hideForm(form);
  showMessage(messageClassElem + '--error', formWrapper, messageClassElem);

}

function showMessage(messageClass, formWrapper, messageClassElem) {
  let message = formWrapper.querySelector('.' + messageClass);
  message.classList.remove(messageClassElem + '--hide');
  let timeForShowMessage = 10000;
  // setTimeout(hideMessage, timeForShowMessage, message);
  // setTimeout(showForm, timeForShowMessage, form);

  let messageHideBtn = message.querySelector('.message__hide-btn');
  if (messageHideBtn) {
    messageHideBtn.addEventListener('click', () => {
      hideMessage(this.closest('.' + messageClass));
      showForm(form);
    });
  }
}

function hideMessage(message, messageClassElem) {
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



