; {
  'use strict';
  const footer = document.querySelector('.footer');
  const feedbackBtn = footer.querySelector('.footer__feedback-btn');
  feedbackBtn.addEventListener('click', feedbackBtnClickHandler);


  function feedbackBtnClickHandler(evt) {
    const popupFeedback = document.querySelector('.popup-feedback');
    window.showPopup(popupFeedback);
  }

}
