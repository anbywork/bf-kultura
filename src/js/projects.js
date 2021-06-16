{
  'use strict';
  const projects = document.querySelector('.projects')
  if (projects) {
    const toggleActual = projects.querySelector('.toggle--actual');
    const toggleClosed = projects.querySelector('.toggle--closed');

    window.addEventListener('load', function (){
      const projectsActual = projects.querySelector('.projects__list--actual');
      const projectsClosed = projects.querySelector('.projects__list--closed');

      if (toggleClosed.checked) {
        hideProjectSection(projectsActual);
        showProjectSection(projectsClosed);
      } else {
        hideProjectSection(projectsClosed);
        showProjectSection(projectsActual);
      }
    })
    toggleActual.addEventListener('change', toggleActualChangeHandler);
    toggleClosed.addEventListener('change', toggleClosedChangeHandler);
  }

  function toggleClosedChangeHandler() {
    const projectsActual = projects.querySelector('.projects__list--actual');
    const projectsClosed = projects.querySelector('.projects__list--closed');

    showProjectSection(projectsClosed);
    hideProjectSection(projectsActual);
  }
  function toggleActualChangeHandler() {
    const projectsActual = projects.querySelector('.projects__list--actual');
    const projectsClosed = projects.querySelector('.projects__list--closed');

    hideProjectSection(projectsClosed);
    showProjectSection(projectsActual);
  }

  function hideProjectSection(projectSection) {
    projectSection.classList.add('projects__list--hide');
  }

  function showProjectSection(projectSection) {
    projectSection.classList.remove('projects__list--hide');
  }
}
