import { useState } from "react";
import Square from "./square";
import { SquareValueType } from "../lib/definitions";
import { calculateWinner } from "../lib/helpers";
import Status from "./status";

export default function Board() {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squareValues, setSquareValues] = useState<SquareValueType [][]>(
        Array.from({length: 3}, () => Array(3).fill(null))
    );

    const winner = calculateWinner(squareValues);    
    const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

    const handleClick = (row: number, col: number) => {
        const newSquares = squareValues.slice();
        if(newSquares[row][col] || calculateWinner(newSquares)) return;

        newSquares[row][col] = xIsNext ? "X" : "O";

        setXIsNext(!xIsNext);
        setSquareValues(newSquares);
    };

    return (
        <>
        <Status text={status}/>
        {
            squareValues.map((rowValue: SquareValueType[], rowIndex: number) => (
                <div className="board-row" key={rowIndex}>
                    {rowValue.map((squareValue: SquareValueType, columnIndex: number) => (
                        <Square 
                            char={squareValue}
                            onSquareClick={() => handleClick(rowIndex, columnIndex)}
                            key={rowIndex + "-" + columnIndex}
                        />
                    ))}
                </div>
            ))
        }
        </>
    );
}