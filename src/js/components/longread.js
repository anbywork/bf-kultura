export const setLongread = (longread) => {
  if (longread) {
    const longreadNavItems = longread.querySelectorAll('.longread__nav-item');
    const longreadBlocks = longread.querySelectorAll('.longread-block');
    let activeElem = longread.querySelector('.longread__nav-item--active');
    let idActiveBlock = activeElem.querySelector('a').getAttribute('href');
    let isToDownDirectionScroll = true;
    let activeBlock = longread.querySelector(idActiveBlock);
    let startPosition = currentYPosition();
    selectActiveItem();
    document.addEventListener('scroll', selectActiveItem);

    function selectActiveItem() {

      for (let i = 0; i < longreadNavItems.length; i++) {
        isToDownDirectionScroll = currentYPosition() > startPosition;
        let diff = elmYPosition(longreadBlocks[i]) - currentYPosition();

        if (diff >= 0 && diff <= 200) {
          activeElem.classList.remove('longread__nav-item--active');
          longreadNavItems[i].classList.add('longread__nav-item--active');
          activeElem = longreadNavItems[i];
          idActiveBlock = activeElem.querySelector('a').getAttribute('href');
          activeBlock = longread.querySelector(idActiveBlock);
          startPosition = currentYPosition();
        }

      }

    }

    function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) return self.pageYOffset;
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
    }

    function elmYPosition(elm) {
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }
      return y;
    }

  }
}

