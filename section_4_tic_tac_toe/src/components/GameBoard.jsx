import React from "react";


export default function GameBoard({ onSelectSquare, board }) {
  // it means dirived state from props - when we have some state that is derived from props
  // We don't need to manage any state here. Instead what we're doing here is called deriving state.
  // We are producing some derived state, some computed value you could say, Gameboard is a computed value
  // that is derived from some state. In this case, from the game turns state
  // that is managed in the app component. We are deriving the gameboard from that state.
  // And this is how you should think and work in React. You should manage as little state as needed
  // and try to derive as much information and as many values as possible from that state.


  //  const [gameBoard, setGameBoard]=useState(initialGameBoard);
  //    function handleSelectSquare(rowIndex, colIndex) {
  // setGameBoard((prevGameBoard)=>{
  //    const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //    updatedGameBoard[rowIndex][colIndex]= activePlayerSymbol;
  // return updatedGameBoard;
  // });
  // onSelectSquare();
  //    }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
