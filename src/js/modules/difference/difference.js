export class Difference {
  constructor(oldOfficer, newOfficer, selectorsOfCard) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldCards = this.oldOfficer.querySelectorAll(selectorsOfCard);
    this.newCards = this.newOfficer.querySelectorAll(selectorsOfCard);
    this.oldCounter = 0;
    this.newCounter = 0;
    this.selectorsOfCard = selectorsOfCard;
  }

  bindTriggers(officerContainer, cards, counter) {
    officerContainer.querySelector('.plus').addEventListener('click', () => {
      if (counter !== cards.length - 2) {
        cards[counter].style.display = 'flex';
        counter++;
      } else {
        cards[counter].style.display = 'flex';
        cards[cards.length - 1].remove();
      }
    });
  }

  hideItems(cards) {
    cards.forEach((selectorOfCard, index, array) => {
      if (index !== array.length - 1) {
        selectorOfCard.style.display = 'none';
      }
    });
  }

  init() {
    this.hideItems(this.oldCards);
    this.hideItems(this.newCards);
    this.bindTriggers(this.oldOfficer, this.oldCards, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newCards, this.newCounter);

    this.hideItems();
    this.bindTriggers();
  }
}