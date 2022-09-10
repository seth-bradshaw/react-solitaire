// too lazy to hard code numbers :)
const getNumberedCards = () => {
  const cards = [];
  for (let i = 10; i >= 1; i--) {
    cards.push(i.toString());
  }
  return cards;
}

const baseCards = [
  'King',
  'Queen',
  'Jack',
  ...getNumberedCards(),
  'Ace'
];

const suites = [{suite: 'Hearts', color: 'red'}, {suite: 'Diamonds', color: 'red'}, {suite: 'Spades', color: 'black'}, {suite: 'Clubs', color: 'black'}];

const buildDeck = () => suites.reduce((prev, suite) => {
  const suiteWithCards = baseCards.map((card) => ({ ...suite, card }))
  prev.push(suiteWithCards);
  return prev;
}, []);

const deck = buildDeck();
console.log(deck)