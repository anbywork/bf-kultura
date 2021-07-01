{
  'use strict';
  let isProgress = false;
  let isThereNews = true;
  let lastNewsItem;
  let messageEnd;
  let messageError;
  let btnError;
  let pageNumber = 2;
  let news = document.querySelector('.news');
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
          createElements(data);
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

  function createElements(data) {
    const newsList = news.querySelector('.news__list');
    const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const maxLengthDescription = 100;
    for(let i = 0; i < data.length; i++) {
      const newsItem = templateContent(document.querySelector('#news-item-template'));
      newsItem.querySelector('a').setAttribute('href', '/news/' + data[i].slug);
      newsItem.querySelector('.news-item__img').setAttribute('src', data[i].thumbnail_image);
      newsItem.querySelector('.news-item__img').setAttribute('srcset', data[i].thumbnail_image);
      let [year, month, day] = data[i].date_time.split(' ')[0].split('-');
      let date = new Date(year, month-1, day).toLocaleString("ru", optionsDate);
      newsItem.querySelector('.news-item__date').textContent = date;
      newsItem.querySelector('.news-item__title').innerHTML = data[i].title;

      let description = data[i].description;
      if (description.length > maxLengthDescription) {
        description = description.substr(0, maxLengthDescription) + '...';
      }
      newsItem.querySelector('.news-item__description').innerHTML = description;
      newsList.appendChild(newsItem);
    }
  }
  function showMessage(message) {
    message.classList.remove('news__message--hide')
  }
  function hideMessage(message) {
    message.classList.add('news__message--hide')
  }
}
