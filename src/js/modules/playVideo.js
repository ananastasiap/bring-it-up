export class VideoPlayer {
  constructor(triggers, overlay) {
    this.buttons = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.buttons.forEach((button, index) => {
      try {
        const blockedElement = button.closest('.module__video-item').nextElementSibling;

        if (index % 2 == 0) {
          blockedElement.setAttribute('data-disabled', 'true');
        }
      } catch(e){}

      button.addEventListener('click', () => {
        if (!button.closest('.module__video-item') || button.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeButton = button;

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';
            if (this.path !== button.getAttribute('data-url')) {
              this.path = button.getAttribute('data-url');

              this.player.loadVideoById({videoId:this.path});
            }
          } else {
            this.path = button.getAttribute('data-url');
            this.createPlayer(this.path);
          }

          this.close.focus();
        }
      });
    });
  }

  bindCloseButton() {
    const closeVideo = () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    };

    this.close.addEventListener('click', () => {
      closeVideo();
    });

    this.close.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    });
  }

  createPlayer(videoId) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId,
      events: {
        'onStateChange': this.onPlayerStateChange,
      }
    });

    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(state) {
    try {
      const blockedElement = this.activeButton.closest('.module__video-item').nextElementSibling;
      const playButton = this.activeButton.querySelector('svg').cloneNode(true);

      if (state.data === 0) {
        if (blockedElement.querySelector('.play__circle').classList.contains('closed')) {
          blockedElement.querySelector('.play__circle').classList.remove('closed');
          blockedElement.querySelector('svg').remove();
          blockedElement.querySelector('.play__circle').appendChild(playButton);
          blockedElement.querySelector('.play__text').textContent = 'play video';
          blockedElement.querySelector('.play__text').classList.remove('attention');
          blockedElement.style.opacity = 1;
          blockedElement.style.filter = 'none';

          blockedElement.setAttribute('data-disabled', 'false');
        }
      }
    } catch(e){}
  }

  init() {
    if(this.buttons.length > 0) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.bindTriggers();
      this.bindCloseButton();
    }
  }
}