export class Slider {
  constructor({page = '',
               switchingButtons = '',
               nextButton = '',
               prevButton = ''} = {}) {
    this.page = document.querySelector(page);
    this.slidesInSlider = this.page.children;
    this.switchingButtons = document.querySelectorAll(switchingButtons);
    this.slideIndex = 1;
  }
}