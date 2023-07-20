import { Slider } from "./slider";

export class MainSlider extends Slider {
  constructor(switchingButtons) {
    super(switchingButtons);
  }

  showSlides(whereSliderMoves) {
    if (whereSliderMoves > this.slidesInSlider.length) {
      this.slideIndex = 1;
    }

    if (whereSliderMoves < 1) {
      this.slideIndex = this.slidesInSlider.length;
    }

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

  render() {
    this.hanson = document.querySelector('.hanson');

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

    this.showSlides(this.slideIndex);
  }
}