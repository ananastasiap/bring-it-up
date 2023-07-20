export class Slider {
  constructor({containerForSlider = null,
               switchingButtons = null,
               nextButton = null,
               prevButton = null,
               activeClass = '',
               animate,
               autoplay} = {}) {
    this.containerForSlider = document.querySelector(containerForSlider);
    this.slidesInSlider = this.containerForSlider.children;
    this.switchingButtons = document.querySelectorAll(switchingButtons);
    this.nextButton = document.querySelector(nextButton);
    this.prevButton = document.querySelector(prevButton);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}