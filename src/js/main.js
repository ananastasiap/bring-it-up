import { Slider , VideoPlayer} from "./modules/index.js";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});