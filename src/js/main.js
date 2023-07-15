import { Slider } from "./modules/index.js";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();
});