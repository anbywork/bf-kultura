export const uploadForm = (form, formWrapper, messageClassElem) => {
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () =>{
    hideForm(form);
    if (xhr.status != 200) {
      showMessage(messageClassElem + '--error', formWrapper, messageClassElem, form);
    } else {
      showMessage(messageClassElem + '--success', formWrapper, messageClassElem, form);
    }
  });

  xhr.addEventListener('error', () => {
    hideForm(form);
    showMessage(messageClassElem + '--error', formWrapper, messageClassElem, form);
  })

  let URL = form.getAttribute('action');
  let formData = new FormData(form);

  xhr.open('POST', URL);
  xhr.responseType = 'json';
  xhr.send(formData);
  // hideForm(form);
  // showMessage(messageClassElem + '--error', formWrapper, messageClassElem, form);

}

function showMessage(messageClass, formWrapper, messageClassElem, form) {
  const message = formWrapper.querySelector('.' + messageClass);
  message.classList.remove(messageClassElem + '--hide');

  const messageHideBtn = message.querySelector('.message__hide-btn');
  if (messageHideBtn) {
    messageHideBtn.addEventListener('click', (evt) => {
      hideMessage(evt.target.closest('.' + messageClass));
      showForm(form);
    });
  }
}

function hideMessage(message) {
  message.classList.add('message--hide');
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



