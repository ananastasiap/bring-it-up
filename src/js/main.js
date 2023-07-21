import { MainSlider, MiniSlider, VideoPlayer, Difference} from "./modules/index.js";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({
    containerForSlider: '.page',
    switchingButtons: '.next',
  });
  slider.render();

  const showUpSlider = new MiniSlider({
    containerForSlider: '.showup__content-slider',
    nextButton: '.showup__next',
    prevButton: '.showup__prev',
    activeClass: 'card-active',
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    containerForSlider: '.modules__content-slider',
    nextButton: '.modules__info-btns .slick-next',
    prevButton: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    containerForSlider: '.feed__slider',
    nextButton: '.feed__slider .slick-next',
    prevButton: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  });
  feedSlider.init();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();

  new Difference('.officerold', '.officernew', '.officer__card-item').init();
});