import { Suite, Card } from "./types";

// too lazy to hard code numbers :)
const getNumberedCards = () => {
  const cards: Array<string> = [];
  for (let i = 10; i >= 1; i--) {
    cards.push(i.toString());
  }
  return cards;
}

const cardValues: Array<string> = [
  'King',
  'Queen',
  'Jack',
  ...getNumberedCards(),
  'Ace'
];

const suites: Array<Suite> = [{suite: 'Hearts', color: 'red'}, {suite: 'Diamonds', color: 'red'}, {suite: 'Spades', color: 'black'}, {suite: 'Clubs', color: 'black'}];

const buildDeck = () => {
  const deck: Array<Card> = [];
  for (const suite of suites) {
    for (const value of cardValues) {
      deck.push({
        id: `${value}-of-${suite.suite}`,
        value,
        ...suite,
      })
    }
  }

  return deck;
};

export default buildDeck;