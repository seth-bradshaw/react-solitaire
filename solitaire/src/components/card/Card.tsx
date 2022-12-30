import React from 'react';
import { Card as CardType } from '../../utils/deck/types';

type CardProps = {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {

  return (
    <div>
      {card.id}
    </div>
  )
}

export default Card;