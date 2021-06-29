const body = document.body;
let currentPosition = 0;

export const blockScroll = () => {
  currentPosition = window.pageYOffset;
  body.style.overflowY = 'hidden';
  body.style.maxHeight = document.documentElement.clientHeight + 'px';
}

export const unblockScroll = () => {
  body.style.overflowY = 'visible';
  body.style.maxHeight = 'none';
}