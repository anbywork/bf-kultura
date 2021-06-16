{
  'use strict';

  let popupFormWrapper = document.querySelector('.popup__form .popup__wrapper');

  if (popupFormWrapper) {
    let form = popupFormWrapper.querySelector('form');
    form.addEventListener('submit', popupFormSubmitHandler);

    function popupFormSubmitHandler(evt) {
      evt.preventDefault();
      let messageClassElem = 'message__wrapper';
      uploadForm(form, popupFormWrapper, messageClassElem);
    }
  }


}
