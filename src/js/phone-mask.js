{
  'use strict';
  window.addEventListener('load', function () {
    let phoneInput = document.querySelector('[type="tel"]');
    if (phoneInput) {
      new IMask(phoneInput, {mask: '+{7}-000-000-00-00'});
    }
  })
}
