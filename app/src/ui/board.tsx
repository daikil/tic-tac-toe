import { useState } from "react";
import Square from "./square";
import { BoardType, SquareValueType } from "../lib/definitions";
import { calculateWinner } from "../lib/calculateWinner";
import Status from "./status";

export default function Board({ xIsNext, squares, onPlay }: BoardType) {

    const winner = calculateWinner(squares);    
    const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

    const handleClick = (row: number, col: number) => {
        const newSquares = squares.slice();
        if(newSquares[row][col] || calculateWinner(newSquares)) return;
        newSquares[row][col] = xIsNext ? "X" : "O";

        onPlay(newSquares);
    };

    return (
        <>
        <Status text={status}/>
        {
            squares.map((rowValue: SquareValueType[], rowIndex: number) => (
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