import {FadeIn} from "../components/fade-in";

export const fadeInAnimate = () => {
  const fadeInElements = document.querySelectorAll('.fade-out');
  const fadeIns = [];
  for (let elem of Array.from(fadeInElements)) {
    fadeIns.push(new FadeIn(elem));
  }
}