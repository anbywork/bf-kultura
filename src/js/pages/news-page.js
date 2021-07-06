import {templateContent} from "../utils/polyfills"
import {NewsList} from "../controllers/newsList";

export const setNewsPage = () => {
  let isProgress = false;
  let isThereNews = true;
  let lastNewsItem;
  let messageEnd;
  let messageError;
  let btnError;
  let pageNumber = 2;
  const newsList = new NewsList();
  const news = document.querySelector('.news');
  if (news) {
    document.addEventListener('scroll', lastNewsItemScrollHandler);
    messageEnd = document.querySelector('.news__message--end');
    messageError = document.querySelector('.news__message--error');
    btnError = messageError.querySelector('.news__message-btn--error');
    btnError.addEventListener('click', btnErrorClickHandler);
    loadNextPage();
  }

  function btnErrorClickHandler() {
    hideMessage(messageError);
    setTimeout(loadNextPage, 500);
  }
  function lastNewsItemScrollHandler() {
    const newsItems = news.querySelectorAll('.news-item');
    lastNewsItem = newsItems[newsItems.length-1];

    if (lastNewsItem.getBoundingClientRect().top <= document.documentElement.clientHeight) {
      loadNextPage();
    }
  }

  function loadNextPage() {
    if (!isThereNews) {
      showMessage(messageEnd);
      return;
    }
    if (isProgress) {
      return;
    }
    isProgress = true;

    let response = {};


    let data = [];
    let URL = '/news-list?page=';

    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      response = xhr.response;
      if (xhr.status === 200) {
        hideMessage(messageError);
        pageNumber += 1;
        data = response.data;
        if(!data) {
          response = JSON.parse(response);
          data = response.data;
        }
        URL = response.next_page_url;
        if (!URL || pageNumber > response.last_page) {
          isThereNews = false;
        }
        isProgress = false;
        if (data && data.length) {
          newsList.addNews(data);
        }
      }
      else {
        showMessage(messageError);
      }

    });

    xhr.addEventListener('error', function () {
      isProgress = false;
      showMessage(messageError);
    });

    xhr.open('GET', URL + pageNumber);
    xhr.responseType = 'json';
    xhr.timeout = 5000;
    xhr.send();
  }

  function showMessage(message) {
    message.classList.remove('news__message--hide')
  }
  function hideMessage(message) {
    message.classList.add('news__message--hide')
  }
}
