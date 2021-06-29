import IMask from 'imask';
import {setBurger} from "./components/burger";
import {FadeIn} from "./components/fade-in";
import {setHeader} from "./components/header";
import {FormFixed} from "./components/form-fixed";

//настройка хедера
setBurger();
setHeader();


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
const formFixed = new FormFixed(document.querySelector('.form-fixed'));
