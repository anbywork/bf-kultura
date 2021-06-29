const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

export const setHeader = () => {
  checkPosition();
  window.addEventListener('scroll', () => {
    checkPosition();
  });
}

const checkPosition = () => {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
};