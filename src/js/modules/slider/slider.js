export class Slider {
  constructor({containerForSlider = null,
               switchingButtons = null,
               nextButton = null,
               prevButton = null,
               slidesTriggerNext = null,
               slidesTriggerPrev = null,
               activeClass = '',
               animate,
               autoplay} = {}) {
    this.containerForSlider = document.querySelector(containerForSlider);
    try {this.slidesInSlider = this.containerForSlider.children;} catch(e){}
    this.switchingButtons = document.querySelectorAll(switchingButtons);
    this.nextButton = document.querySelector(nextButton);
    this.prevButton = document.querySelector(prevButton);
    this.slidesTriggerNext = document.querySelectorAll(slidesTriggerNext);
    this.slidesTriggerPrev = document.querySelectorAll(slidesTriggerPrev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}