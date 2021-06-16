{
  'use strict';

  let newsSection = document.querySelector('.news-section');
  if (newsSection) {
    window.addEventListener('resize', setupVisibleNews);

    let newsList = newsSection.querySelector('.news-section__list')
    let newsListItems = newsSection.querySelectorAll('.news-section__item');
    let shift = 0;

    let marginRight = window.getComputedStyle(newsListItems[0]).marginRight;
    marginRight = marginRight.split('px')[0];

    let widthItem = newsListItems[0].offsetWidth + +marginRight;
    let count = getCountVisibleNews();

    let prevBtn = newsSection.querySelector('.news-section__control--prev');
    prevBtn.addEventListener('click', prevBtnClickHandler);

    let nextBtn = newsSection.querySelector('.news-section__control--next');
    nextBtn.addEventListener('click', nextBtnClickHandler);

    function prevBtnClickHandler(evt) {
      shiftCarousel(false)
    }

    function nextBtnClickHandler(evt) {
      shiftCarousel(true)
    }

    function shiftCarousel (isNextBtn = true) {
      if (isNextBtn) {
        shift -= widthItem * count;
        shift = Math.max(shift, -widthItem * (newsListItems.length - count));
        if (shift === -widthItem * (newsListItems.length - count)) {
          disabledBtn(nextBtn);
        }
        if (shift < 0) {
          enabledBtn(prevBtn)
        }

      } else {
        shift += widthItem * count ;
        shift = Math.min(shift, 0);
        if (shift === 0) {
          disabledBtn(prevBtn);
        }
        if (shift > -widthItem * (newsListItems.length - count)) {
          enabledBtn(nextBtn)
        }
      }
      newsList.style.transform = `translateX(${shift}px)`;

    }

    function getCountVisibleNews () {
      let screenWidth = document.documentElement.clientWidth;
      let countVisibleNews;
      if (screenWidth >=1280) {
        countVisibleNews = 4;
      }
      else if(screenWidth >= 1025) {
        countVisibleNews = 3;
      }
      else {
        countVisibleNews = null;
      }
      return countVisibleNews;
    }

    function disabledBtn (btn) {
      btn.setAttribute('disabled', true);
    }
    function enabledBtn (btn) {
      btn.removeAttribute('disabled');
    }

    function setupVisibleNews() {
      marginRight = window.getComputedStyle(newsListItems[0]).marginRight;
      marginRight = marginRight.split('px')[0];

      widthItem = newsListItems[0].offsetWidth + +marginRight;
      count = getCountVisibleNews();
      shift = 0;

      newsList.style.transform = ``;
      disabledBtn(prevBtn);
      enabledBtn(nextBtn);
    }
  }
}
