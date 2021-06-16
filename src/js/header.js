; {
  'use strict';
  let isNavHide = true;
  window.addEventListener('resize', windowResizeHandler);

  function windowResizeHandler () {
    setStateNavList();
  }

  function setStateNavList() {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth <= 1024) {
        hideNavList();
    } else {
      showNavList();
    }
  }

  const header = document.querySelector('.header');
  header.classList.remove('header--static-show');

  setStateNavList();

  const burgerBtn = header.querySelector('.header__burger-nav');
  burgerBtn.addEventListener('click', burgerBtnClickHandler);

  function burgerBtnClickHandler(evt) {
    toggleBurgerNavigation();
  }

  function toggleBurgerNavigation() {
    const navList = header.querySelector('.nav__list');
    const navListAndBurger = header.querySelector('.header__nav-list-and-burger');
    if (isNavHide) {
      navList.classList.remove('nav-list--hidden');
      header.classList.remove('header--overflow-hidden');
      navList.classList.add('nav-list--opened');
      navListAndBurger.classList.add('header__nav-list-and-burger--open');
      isNavHide = false;
    } else {
      navList.classList.add('nav-list--hidden');
      header.classList.add('header--overflow-hidden');
      navList.classList.remove('nav-list--opened');
      navListAndBurger.classList.remove('header__nav-list-and-burger--open');
      isNavHide = true;
    }
  }


  const withSubItems = header.querySelector('.nav__sublist');
  let idTimeoutSubItems;
  if(withSubItems) {
    withSubItems.addEventListener('focus', withSubItemsFocusHandler, true);
    withSubItems.addEventListener('blur', withSubItemsBlurHandler, true);
  }



  function withSubItemsFocusHandler(evt) {

    const navSublist = evt.target.closest('.nav__sublist');
    showSubItems(navSublist);
    clearTimeout(idTimeoutSubItems);
  }

  function withSubItemsBlurHandler(evt) {
    const navSublist = evt.target.closest('.nav__sublist');
    idTimeoutSubItems = setTimeout(function () {
      hideSubItems(navSublist);
    }, 500);
  }

  function showSubItems (navSublist) {
    navSublist.classList.add('nav__sublist--open');
  }

  function hideSubItems (navSublist) {
    navSublist.classList.remove('nav__sublist--open');
  }


  function hideNavList() {
    const navList = header.querySelector('.nav__list');
    if (isNavHide) {
      navList.classList.add('nav-list--hidden');
      header.classList.add('header--overflow-hidden');
    }

  }

  function showNavList() {
    if (!isNavHide) {
      const navList = header.querySelector('.nav__list');
      navList.classList.remove('nav-list--hidden');
    }
  }

}
