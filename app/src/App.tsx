import './App.css';
import { SquareValueType } from './lib/definitions';
import Board from './ui/board';
import { useState } from "react";

function App() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<(SquareValueType | null)[][][]>(
    Array.from({ length: 1 }, () => 
      Array.from({ length: 3 }, () =>
        Array(3).fill(null)
      )
    )
  );
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: SquareValueType [][]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory);
    
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);    
  };

  const moves = history.map((squares, move) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })
  return (
    <div className="App">
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/> 
      </div>
      <div className='game-history'>
        <ol>{moves}</ol>
      </div>
    </div>
    
  );
}

export default App;
