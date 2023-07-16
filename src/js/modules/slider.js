export class Slider {
  constructor(page, switchingButtons) {
    this.page = document.querySelector(page);
    this.slidesInSlider = this.page.children;
    this.switchingButtons = document.querySelectorAll(switchingButtons);
    this.slideIndex = 1;
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
    } catch(error){
      console.error("Here's an error: ", error);
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
    try {
      this.hanson = document.querySelector('.hanson');
    } catch(error){
      console.error("Here's an error: ", error);
    }

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