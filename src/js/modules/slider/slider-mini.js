import { Slider } from "./slider";

export class MiniSlider extends Slider {
  constructor(containerForSlider, nextButton, prevButton, activeClass, animate, autoplay) {
    super(containerForSlider, nextButton, prevButton, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    Array.from(this.slidesInSlider).forEach(slideInSlider => {
      slideInSlider.classList.remove(this.activeClass);
      if (this.animate) {
        slideInSlider.querySelector('.card__title').style.opacity = '0.4';
        slideInSlider.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    if (this.slidesInSlider[0].tagName.toLowerCase() !== 'button') {
      this.slidesInSlider[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slidesInSlider[0].querySelector('.card__title').style.opacity = '1';
      this.slidesInSlider[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    Array.from(this.slidesInSlider).forEach(slideInSlider => {
      if (slideInSlider.tagName.toLocaleLowerCase() === 'button') {
        this.containerForSlider.append(slideInSlider);
      }
    });

    this.containerForSlider.appendChild(this.slidesInSlider[0]);
    this.decorizeSlides();
  }

  bindTriggers() {
    this.nextButton.addEventListener('click', () => this.nextSlide());

    this.prevButton.addEventListener('click', () => {
      Array.from(this.slidesInSlider).forEach(slideInSlider => {
        if (slideInSlider.tagName.toLocaleLowerCase() === 'button') {
          this.containerForSlider.insertBefore(slideInSlider, this.slidesInSlider[1]);
        }
      });

      this.containerForSlider.insertBefore(this.slidesInSlider[this.slidesInSlider.length - 1],
                                           this.slidesInSlider[0]);
      this.decorizeSlides();
    });
  }

  init() {
    this.containerForSlider.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;

    this.bindTriggers();
    this.decorizeSlides();

    if (this.autoplay) {
      setInterval(() => this.nextSlide(), 5000);
    }
  }
}