;
{ 'use strict'
  const mapBtn = document.querySelector('.contacts__map-btn');
  if (mapBtn) {
    mapBtn.addEventListener('click', mapBtnClickHandler);
  }
  const feedbackFormBtn = document.querySelector('.contacts__feedback-btn');
  if (feedbackFormBtn) {
    feedbackFormBtn.addEventListener('click', feedbackFormBtnClickHandler);
  }

  function mapBtnClickHandler() {
    let popupMap = document.querySelector('.popup-map');
    showPopup(popupMap);
  }

  function feedbackFormBtnClickHandler() {
    let popupFeedback = document.querySelector('.popup-feedback');
    showPopup(popupFeedback);

  }

  window.showPopup = function (popup) {
    popup.classList.remove('popup--hide');
    let buttonClose = popup.querySelector('.popup__close-btn');
    let popupBG = popup.querySelector('.popup__bg');
    buttonClose.addEventListener('click', buttonCloseClickHandler);
    popupBG.addEventListener('click', popupBGClickHandler);
    document.addEventListener('keydown', documentKeydownHandler);
    noScroll();


  }
  function noScroll() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    html.classList.toggle('no-scroll');
    body.classList.toggle('no-scroll');
  }
  function buttonCloseClickHandler(evt) {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  }

  function popupBGClickHandler(evt) {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  }

  function documentKeydownHandler(evt) {
    if(evt.key === 'Escape' || evt.keyCode === '27') {
      let openPopups = document.querySelectorAll('.popup:not(.popup--hide)');
      for (let i = 0; i < openPopups.length; i++) {
        closePopup(openPopups[i]);
      }
    }
  }

  function closePopup(popup) {
    popup.classList.add('popup--hide');
    document.removeEventListener('keydown', documentKeydownHandler);
    noScroll();
    resetPopup(popup);
  }

  function resetPopup(popup) {
    if(!popup.classList.contains('popup-feedback')) {
      return ;
    }
    const openMessage = popup.querySelector('.message__wrapper:not(.message__wrapper--hide)');
    if(openMessage) {
      const form = popup.querySelector('form');
      showForm(form);
      hideMessage(openMessage);
      resetInput(form);
    }
  }
  function showForm(form) {
    form.classList.remove('form--hide');
  }

  function hideMessage(message) {
    message.classList.add('message__wrapper--hide');
  }

  function resetInput(form) {
    const inputs = form.querySelectorAll('input[type=text], input[type=email], textarea');
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

}
