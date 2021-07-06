export class NewsItem {
  constructor(data) {
    this.data = this.formatData(data);
    this.element = this.createElement();

    this.createElement = this.createElement.bind(this);
    this.formatData = this.formatData.bind(this);
    this.getTemplate = this.getTemplate.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.formatDescription = this.formatDescription.bind(this);
  }

  createElement() {
    const div = document.createElement('div');
    const templateElement = this.getTemplate();
    div.insertAdjacentHTML('beforeend', templateElement);
    return div.children[0];
  }



  formatData(data) {
    const date = this.formatDate(data.date_time);
    if (data.title.indexOf(`С 1 сентября 2019 года`) >= 0) {
      // debugger;
    }
    const description = this.formatDescription(data.preview_text || data.description);
    const srcset = data.retina_thumbnail_image ? `${data.retina_thumbnail_image} 2x` : '';

    return {
      link: `/news/${data.slug}`,
      src: data.thumbnail_image,
      srcset,
      date,
      title: data.title,
      description,
    };
  }

  getTemplate() {
    return `<li class="news__item news-item fade-out">
              <a class="news-item__link" href="${this.data.link}">
                <div class="news-item__img-container">
                  <img class="news-item__img" src="${this.data.src}" srcset="${this.data.srcset}" alt="">
                </div>
                <div class="news-item__text">
                  <span class="news-item__date">${this.data.date}</span>
                  <h2 class="news-item__title">${this.data.title}</h2>
                  <div class="news-item__description">${this.data.description}</div>
                </div>
              </a>
            </li>`;
  }

  formatDate(date) {
    const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const [year, month, day] = date.split(' ')[0].split('-');
    return new Date(+year, +month-1, +day).toLocaleString("ru", optionsDate);
  }

  formatDescription(description) {
    const descriptionHTML = document.createElement('div');
    descriptionHTML.insertAdjacentHTML('beforeend', description);
    let newDescription = ``;
    for (let node of Array.from(descriptionHTML.children)) {
      newDescription += node.innerText;
    }

    if (descriptionHTML.children.length === 0) {
      newDescription = descriptionHTML.innerText;
    }
    const maxLengthDescription = 100;

    if (newDescription.length > maxLengthDescription) {
      return newDescription.substr(0, maxLengthDescription) + '...';
    }
    return newDescription;
  }
}

