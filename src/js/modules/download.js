export class Download {
  constructor(triggers) {
    this.buttons = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem() {
    const elementLink = document.createElement('a');

    elementLink.setAttribute('href', this.path);
    elementLink.setAttribute('download', 'nice_picture');

    elementLink.style.display = 'none';
    document.body.appendChild(elementLink);

    elementLink.click();

    document.body.removeChild(elementLink);
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.downloadItem(this.path);
      });
    });
  }
}