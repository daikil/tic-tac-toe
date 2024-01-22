import { SquareValueType } from "./definitions";

const div = (num: number): number => {
    return Math.trunc(num / 3);
};

const mod = (num: number): number => {
    return Math.trunc(num % 3);
};

export const calculateWinner = (squares: SquareValueType[][]): SquareValueType | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(const line of lines) {
        const [a, b, c] = line;        
        if(squares[div(a)][mod(a)] && (squares[div(a)][mod(a)] === squares[div(b)][mod(b)]) && (squares[div(a)][mod(a)] === squares[div(c)][mod(c)])) {
            return squares[div(a)][mod(a)];
        };
    };

    return null;
};