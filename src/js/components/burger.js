import {blockScroll, unblockScroll} from "./scroll-block";

const header = document.querySelector('.header');
const burger = header.querySelector('.header__burger');
const navContainer = header.querySelector('.header__nav-container');
export const setBurger = () => {


  burger.addEventListener('click', onClickBurger);
}

function onClickBurger() {
  // если бургер закрыт
  if (burger.classList.contains('header__burger--opened')) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  blockScroll();
  header.classList.add('header--fixed');
  burger.classList.remove('header__burger--closed');
  navContainer.classList.remove('header__nav-container--closed');
  burger.classList.add('header__burger--opened');
  navContainer.classList.add('header__nav-container--opened');
}

function closeNav() {
  burger.classList.remove('header__burger--opened');
  navContainer.classList.remove('header__nav-container--opened');
  burger.classList.add('header__burger--closed');
  navContainer.classList.add('header__nav-container--closed');
  unblockScroll();
  setTimeout(()=>{
    navContainer.classList.remove('header__nav-container--closed');
  }, 300);
}