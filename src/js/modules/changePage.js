export class ChangePage {
  constructor(selectorForChange, url) {
    this.change = document.querySelector(selectorForChange);
    this.url = url;
  }

  init() {
    if (this.change) {
      this.change.addEventListener('click', () => {
        window.location.href = this.url;
      });
    }
  }
}