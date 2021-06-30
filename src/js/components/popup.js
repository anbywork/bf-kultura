import {blockScroll, unblockScroll} from "./scroll-block";

export class Popup {
  constructor(element) {
    this.element = element;
    this.buttonClose = element.querySelector('.popup__close-btn');
    this.popupBG = element.querySelector('.popup__bg');
    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.documentKeydownHandler = this.documentKeydownHandler.bind(this);
    this.buttonCloseClickHandler = this.buttonCloseClickHandler.bind(this);
    this.popupBGClickHandler = this.popupBGClickHandler.bind(this);
    this.showForm = this.showForm.bind(this);
    this.resetPopupFeedback = this.resetPopupFeedback.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.hideMessage = this.hideMessage.bind(this);

  }

  showPopup () {
    this.element.classList.remove('popup--hide');
    this.buttonClose.addEventListener('click', this.buttonCloseClickHandler);
    this.popupBG.addEventListener('click', this.popupBGClickHandler);
    document.addEventListener('keydown', this.documentKeydownHandler);
    blockScroll();
  }

  closePopup() {
    this.element.classList.add('popup--hide');
    document.removeEventListener('keydown', this.documentKeydownHandler);
    unblockScroll();
    this.resetPopupFeedback(this.element);
  }

  buttonCloseClickHandler(evt) {
    const popup = evt.target.closest('.popup');
    this.closePopup(popup);
  }

  popupBGClickHandler() {
    this.closePopup();
  }

  documentKeydownHandler(evt) {
    if(evt.key === 'Escape' || evt.keyCode === '27') {
      let openPopups = document.querySelectorAll('.popup:not(.popup--hide)');
      for (let i = 0; i < openPopups.length; i++) {
        this.closePopup(openPopups[i]);
      }
    }
  }

  showForm(form) {
    form.classList.remove('form--hide');
  }

  resetPopupFeedback() {
    if(!this.element.classList.contains('popup-feedback')) {
      return ;
    }
    const openMessage = this.element.querySelector('.message__wrapper:not(.message__wrapper--hide)');
    if(openMessage) {
      const form = this.element.querySelector('form');
      this.showForm(form);
      this.hideMessage(openMessage);
      this.resetInput(form);
    }
  }
  hideMessage(message) {
    message.classList.add('message__wrapper--hide');
  }

  resetInput(form) {
    const inputs = form.querySelectorAll('input[type=text], input[type=email], textarea');
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
}