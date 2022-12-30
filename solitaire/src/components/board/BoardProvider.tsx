import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import shuffleDeck from '../../utils/deck'
import { Card } from "../../utils/deck/types";

const deck: Array<Card> = [];
const BoardContext = createContext({ deck });
type BoardContext = {
  [key: string]: any
};

const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error('useFacetContext must be used within a FacetProvider');
  }

  return context;
}
type Column = {
  length: number;
  cards: Array<Card>;
}
type ColumnsMap = Map<string, Column>;
const getColumnsMap = () => new Map<string, Column>([
    ['col1', { length: 1, cards: [] }],
    ['col2', { length: 2, cards: [] }],
    ['col3', { length: 3, cards: [] }],
    ['col4', { length: 4, cards: [] }],
    ['col5', { length: 5, cards: [] }],
    ['col6', { length: 6, cards: [] }],
    ['col7', { length: 7, cards: [] }]
  ]);

const useColumns = (deck: Array<Card>) => {
  const [columns, setColumns] = useState<ColumnsMap>();
  useEffect(() => {
    const cols = getColumnsMap();
    let row = 1;
    for (let i = 0; i < 28; i++) {
      /* @ts-ignore */
      for (const [key, value] of cols) {
        if (value.length > value.cards.length && value.cards.length < row) {
          const newValue = { ...value, cards: [...value.cards, deck[i]]};
          console.log({ row, key, value, newValue, i})
          cols.set(key, newValue);
          if (key === 'col7') {
            row += 1;
          }
          break;
        }
      }
    }
    setColumns(cols);
  }, [])

}

function BoardProvider ({ children }: React.PropsWithChildren){
  const deck = useMemo(() => shuffleDeck(), []);
  const columns = useColumns(deck);
  return (
    <BoardContext.Provider value={{deck}}>
      {children}
    </BoardContext.Provider>
  )
}

export {
  BoardProvider as default,
  useBoardContext 
}