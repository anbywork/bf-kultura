; {
  'use strict';
  const slider = document.querySelector('.slider');
  if (slider) {
    const slideList = slider.querySelectorAll('.slide');
    if (slideList.length > 1) {
      const prevBtn = slider.querySelector('.slider__control--prev');
      const nextBtn = slider.querySelector('.slider__control--next');
      const sliderNav = slider.querySelector('.slider__navigation');
      const sliderNavItemTemplate = templateContent(slider.querySelector('.slider__navigation-item-template'));
      let currentSlide = 0;

      let sliderInterval = setInterval(setSlide, 5000);
      showControls();
      prevBtn.addEventListener('click', prevBtnClickHandler);
      nextBtn.addEventListener('click', nextBtnClickHandler);
      const sliderNavItems = sliderNav.querySelectorAll('.slider__navigation-item');
      for (let i = 0; i < sliderNavItems.length; i++) {
        sliderNavItems[i].addEventListener('change', sliderNavItemChangeHandler);
      }

      function sliderNavItemChangeHandler(evt) {

        let index = evt.target.closest('.slider__navigation-item').getAttribute('data-index');
        setSlide(true, index);
      }

      function showControls() {
        for (let i = 0; i < slideList.length; i++) {

          let item = sliderNavItemTemplate.cloneNode(true);

          sliderNav.appendChild(item);
          let navItem = sliderNav.querySelector('.slider__navigation-item:last-child');
          navItem.setAttribute('data-index', i);

          if (i === 0) {
            sliderNav.querySelector('input[type=radio]').setAttribute('checked', 'true');
          }
        }
        prevBtn.classList.remove('slider__control--hide');
        nextBtn.classList.remove('slider__control--hide');
      }
      function setSlide(next = true, index= undefined) {
        slideList[currentSlide].classList.remove('slide--show');
        currentSlide = getNewSlide();
        slideList[currentSlide].classList.add('slide--show');
        setCheckedNav();

        clearInterval(sliderInterval);
        sliderInterval = setInterval(setSlide, 5000);

        function getNewSlide () {
          let newSlide;
          if (index === undefined) {
            newSlide = currentSlide;
            if (next) {
              newSlide++;
              if(newSlide > slideList.length - 1) {
                newSlide = 0;
              }
            } else {
              newSlide--;
              if(newSlide < 0) {
                newSlide = slideList.length - 1;
              }
            }
          } else {
            newSlide = index;
          }
          return newSlide;
        }
        function setCheckedNav() {
          const sliderNavItems = sliderNav.querySelectorAll('.slider__navigation-item');
          sliderNavItems[currentSlide].querySelector('input').checked = true;
        }
      }
      function prevBtnClickHandler () {
        setSlide(false);
      }
      function nextBtnClickHandler () {
        setSlide();
      }

    }
  }
}
