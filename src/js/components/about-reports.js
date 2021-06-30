export const setReports = (reportsBlock) => {
  const btnsYear = reportsBlock.querySelectorAll('.about-reports__year');
  for (let i = 0; i < btnsYear.length; i++) {
    btnsYear[i].addEventListener('click', btnsYearClickHandler);
  }

  const docs = reportsBlock.querySelectorAll('.doc');
  //если документ в фокусе добавить класс about-reports__year--opened ближайшему btnYear
  for (let i = 0; i < docs.length; i++) {
    docs[i].addEventListener('focus', docFocusHandler);
  }
}



  function btnsYearClickHandler(evt) {
    toggleReportsList(evt.target);
  }

  function toggleReportsList(btnYear) {
    if(!btnYear.classList.contains('about-reports__year--opened')) {
      hideCurrentReportList();
      showReportsList(btnYear);
    } else {
      hideReportsList(btnYear);
    }
  }

  function showReportsList(btnYear) {
    btnYear.classList.add('about-reports__year--opened');
  }

  function hideReportsList(btnYear) {
    btnYear.classList.remove('about-reports__year--opened');
  }

  function hideCurrentReportList() {
    const currentOpenedBtn = document.querySelector('.about-reports__year--opened');
    if (currentOpenedBtn) {
      hideReportsList(currentOpenedBtn);
    }
  }
  function docFocusHandler(evt) {
    const closestBtnYear = evt.target.closest('.about-reports__report-list').previousElementSibling;
    hideCurrentReportList();
    showReportsList(closestBtnYear);
  }
