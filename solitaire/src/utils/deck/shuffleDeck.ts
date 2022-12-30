import buildDeck from './buildDeck';
import { Card } from './types';

const shuffleDeck = () => {
  const shuffledDeck: Array<Card> = [];
  const baseCards = buildDeck();
  const cardsLength = baseCards.length;
  for (let i = 0; i < cardsLength; i++) {
    const randomIndex = Math.floor(Math.random() * baseCards.length);
    const card = baseCards.splice(randomIndex, 1)[0];
    shuffledDeck.push(card);
  }
  return shuffledDeck;
}
// TODO: create function using graph traversal to get all possible shuffles, get random shuffle

export default shuffleDeck;

