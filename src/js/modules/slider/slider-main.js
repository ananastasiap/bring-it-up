import { Slider } from "./slider";

export class MainSlider extends Slider {
  constructor(obj) {
    super(obj);
  }

  showSlides(whereSliderMoves) {
    if (whereSliderMoves > this.slidesInSlider.length) {
      this.slideIndex = 1;
    }

    if (whereSliderMoves < 1) {
      this.slideIndex = this.slidesInSlider.length;
    }

    try {
      this.hanson.style.opacity = '0';

      if (whereSliderMoves === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch(e) {}


    Array.from(this.slidesInSlider).forEach(slideInSlider => {
      slideInSlider.style.display = 'none';
      this.slidesInSlider[this.slideIndex - 1].classList.remove('fadeIn');
    });

    this.slidesInSlider[this.slideIndex - 1].style.display = 'block';
    this.slidesInSlider[this.slideIndex - 1].classList.add('animated', 'fadeIn');
  }

  plusSlides(whereSliderMoves) {
    this.showSlides(this.slideIndex += whereSliderMoves);
  }

  triggerSlides(trigger, whereSliderMoves) {
    trigger.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        this.plusSlides(whereSliderMoves);
      });
    });
  }

  bindTriggers() {
    this.switchingButtons.forEach(switchingButton => {
      switchingButton.addEventListener('click', () => {
        this.plusSlides(1);
      });

      switchingButton.parentNode.previousElementSibling.addEventListener('click', (event) => {
        event.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.triggerSlides(this.slidesTriggerNext, 1);
    this.triggerSlides(this.slidesTriggerPrev, -1);
  }

  render() {
    if (this.containerForSlider) {
      this.hanson = document.querySelector('.hanson');
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}