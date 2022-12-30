import React from "react";
import Board from "./components/board/Board";
import BoardProvider from "./components/board/BoardProvider";
function App() {

  return (
    <div className="">
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
