import { SquareType } from "../lib/definitions";

export default function Square({char, onSquareClick}: SquareType) {
    return <button className="button-style" onClick={onSquareClick}>{char}</button>;
}
  