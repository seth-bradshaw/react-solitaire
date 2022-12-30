import React, { PropsWithChildren } from "react";
import Card from "../card/Card";
import { useBoardContext } from "./BoardProvider";

const Board = (props: any) => {
  const { deck = [] } = useBoardContext();
  return (
    <div>
     {
       deck.map((card) => 
         <Card card={card} />
       )
     }
    </div>
  )
}

export default Board;