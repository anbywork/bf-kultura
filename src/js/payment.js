{
  'use strict';

  let payment = document.querySelector('.payment');
  if (payment) {
    let paymentList = payment.querySelectorAll('.payment__list-btn');
    for (let i = 0; i < paymentList.length; i++) {
      paymentList[i].addEventListener('click', paymentListClickHandler);
    }

    function paymentListClickHandler() {
      let screenWidth = document.documentElement.clientWidth;
      if (screenWidth >= 768) {
        hideCurrentContent();
        showTargetContent(this);
      } else {
        toggleContent(this);
      }

    }
    function hideCurrentContent() {
      let activeBtn = payment.querySelector('.payment__list-btn--active');
      activeBtn.classList.remove('payment__list-btn--active');
    }
    function showTargetContent(elem) {
      elem.classList.add('payment__list-btn--active');
    }

    function toggleContent(elem) {
      let activeBtn = payment.querySelector('.payment__list-btn--active');
      if (activeBtn && elem != activeBtn) {
        activeBtn.classList.remove('payment__list-btn--active');
      }
      elem.classList.toggle('payment__list-btn--active');
    }

    let toggle = payment.querySelector('.payment-content-app__toggle');
    let toggleDesktop = toggle.querySelector('.payment-content-app__toggle--desktop');
    let toggleMobile = toggle.querySelector('.payment-content-app__toggle--mobile');

    toggleDesktop.addEventListener('change', toggleChangeHandler);
    toggleMobile.addEventListener('change', toggleChangeHandler);
  }

  function toggleChangeHandler() {
    let imgDesktop = payment.querySelector('.payment-content-app__img-desktop');
    let linkDesktop = payment.querySelector('.payment-content-app__link--desktop');
    imgDesktop.classList.toggle('payment-content-app__img--hide');
    linkDesktop.classList.toggle('payment-content-app__link--hide');

    let imgMobile = payment.querySelector('.payment-content-app__img-mobile');
    let linkMobile = payment.querySelector('.payment-content-app__link--mobile');
    imgMobile.classList.toggle('payment-content-app__img--hide');
    linkMobile.classList.toggle('payment-content-app__link--hide');
  }

}
