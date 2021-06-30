import {setReports} from "../components/about-reports";
import {Popup} from "../components/popup";
import {setLongread} from "../components/longread";

export const setAbout = () => {

  // настройка отчетов
  const reportsSection = document.querySelector('.about-reports');
  if (reportsSection) {
    setReports(reportsSection);
  }


  // настройка всплывашки с картой
  const mapBtn = document.querySelector('.contacts__map-btn');
  if (mapBtn) {
    let popupMap = new Popup(document.querySelector('.popup-map'));
    mapBtn.addEventListener('click', () => {
      popupMap.showPopup();
    });
  }

  // настройка всплывашки с формой обратной связи
  const feedbackFormBtn = document.querySelector('.contacts__feedback-btn');
  if (feedbackFormBtn) {
    let popupFeedback = new Popup(document.querySelector('.popup-feedback'));
    feedbackFormBtn.addEventListener('click', () => {
      popupFeedback.showPopup();
    });
  }

  // настройка навигации по лонгриду
  setLongread(document.querySelector('.longread'));
};