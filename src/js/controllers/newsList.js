import {NewsItem} from "../components/news-item";
import {fadeInAnimate} from "../utils/fade-in-animate";

export class NewsList {
  constructor() {
    this.newsListElement = document.querySelector('.news__list');
    this.newsItem = [];

    this.addNews = this.addNews.bind(this);
  }

  addNews (newsData) {
    if (this.newsListElement) {
      for (let item of newsData) {
        const newsItem = new NewsItem(item);
        this.newsItem.push(newsItem);
        this.newsListElement.appendChild(newsItem.element);
      }
      fadeInAnimate();
    }
  }
}