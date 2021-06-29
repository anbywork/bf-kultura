
export class FadeIn {
  constructor(element) {
    this.element = element;
    this.fadeInOut();
    window.addEventListener("scroll", () => {
      this.fadeInOut();
    });

  }

  checkViewport() {
    const rect = this.element.getBoundingClientRect();
    return ((rect.top + rect.height >= 0)
      || (rect.top >= 0))
      && rect.top <=
      (window.innerHeight || document.documentElement.clientHeight);
  }

  fadeInOut() {
    if (this.checkViewport())  {
      setTimeout(()=>{
        this.element.classList.remove('fade-out');
        this.element.classList.add('fade-in');
      }, 300);
    } else {

      // this.element.classList.remove('fade-in');
      // this.element.classList.add('fade-out');
    }
  }

}