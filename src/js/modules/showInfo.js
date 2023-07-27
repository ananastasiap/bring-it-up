export class ShowInfo {
  constructor(triggers) {
    this.buttonsForMore = document.querySelectorAll(triggers);
  }

  init() {
    this.buttonsForMore.forEach(button => {
      button.addEventListener('click', () => {
        const sibling = button.closest('.module__info-show').nextElementSibling;

        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    });
  }
}