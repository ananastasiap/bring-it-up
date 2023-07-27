import { MainSlider, MiniSlider, VideoPlayer, Difference, Form, ShowInfo, Download} from "./modules/index.js";

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

  new Difference('.officerold', '.officernew', '.officer__card-item').init();
  new Form('.form').init();

  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('.module__video-item .play', '.overlay').init();

  const modulePageSlider = new MainSlider({
    containerForSlider: '.moduleapp',
    switchingButtons: '.next',
    slidesTriggerNext: '.nextmodule',
    slidesTriggerPrev: '.prevmodule'
  });
  modulePageSlider.render();

  new ShowInfo('.plus__content').init();
  new Download('.download').init();
});