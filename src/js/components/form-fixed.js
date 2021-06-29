export class FormFixed {
  constructor(element) {
    this.element = element;
    this.height = element.offsetHeight;
    this.checkPosition = this.checkPosition.bind(this);
    this.setEdge = this.setEdge.bind(this);
    this.resetEdge = this.resetEdge.bind(this);


    this.checkPosition();
    document.addEventListener('scroll', () => {
      this.checkPosition();
    })
  }

  checkPosition() {
    const rectForm = this.element.getBoundingClientRect();
    const rectMain = document.querySelector('main').getBoundingClientRect();

    if (rectForm.height + 130  > rectMain.bottom - 50) {
      this.element.classList.remove('form-fixed--top');
      this.setEdge(rectMain, rectForm);
    } else {
      this.resetEdge();
      this.element.classList.add('form-fixed--top');
    }
  }

  setEdge(rectMain, rectForm) {
    this.element.style.top = `${rectMain.bottom - rectForm.height - 50}px`;
  }

  resetEdge() {
    this.element.style.top = ``;
  }
}