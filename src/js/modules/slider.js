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

    Array.from(this.slidesInSlider).forEach(slideInSlider => {
      slideInSlider.style.display = 'none';
    });

    this.slidesInSlider[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(whereSliderMoves) {
    this.showSlides(this.slideIndex += whereSliderMoves);
  }

  render() {
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