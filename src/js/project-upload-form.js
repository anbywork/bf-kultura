{
  'use strict';

  let projectFormWrapper = document.querySelector('.project__form-wrapper');

  if (projectFormWrapper) {
    let form = projectFormWrapper.querySelector('form');
    form.addEventListener('submit', projectFormSubmitHandler);

    function projectFormSubmitHandler(evt) {
      evt.preventDefault();
      let messageClassElem = 'message';
      uploadForm(form, projectFormWrapper, messageClassElem);
    }

  }
}
