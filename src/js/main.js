import { MainSlider , VideoPlayer} from "./modules/index.js";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({
                                 switchingButtons: '.next',
                                 page: '.page',
                                });
  slider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});