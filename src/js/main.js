import IMask from 'imask';
import {setBurger} from "./components/burger";
import {FadeIn} from "./components/fade-in";
import {setHeader} from "./components/header";
import {FormFixed} from "./components/form-fixed";
import {setAbout} from "./pages/about";
import {setAnimationScroll} from "./utils/anchor-animation-scroll";
import {setProjectPage} from "./pages/projects";
import {setPolyfills} from "./utils/polyfills";
import {templateContent} from "./utils/polyfills";
import {PopupUploadForm} from "./components/popup-upload-form";

setPolyfills();


//настройка хедера
setBurger();
setHeader();


// настройка плавной прокрутки к якорям
setAnimationScroll();

// настройка анимации появления блоков
const fadeInElements = document.querySelectorAll('.fade-out');
const fadeIns = [];
for (let elem of Array.from(fadeInElements)) {
  fadeIns.push(new FadeIn(elem));
}

// настройка маски для поля типа phone
const phoneInputs = document.querySelectorAll('input[type=tel]');
for (let input of Array.from(phoneInputs)) {
  const maskOptions = {
    mask: '+{7} 000 000 00 00'
  };
  const mask = IMask(input, maskOptions);
}

// настройка фиксации формы
const formElement = document.querySelector('.form-fixed');
if (formElement) {
  const formFixed = new FormFixed(formElement);
}

// настройка страниц
setAbout();
setProjectPage();

// настройка всплывашек с формой
const popupsWithFormElements = document.querySelectorAll('.popup--form');
const popupsWithForm = Array.from(popupsWithFormElements).map((popupElement) => {
  return new PopupUploadForm(popupElement);
});