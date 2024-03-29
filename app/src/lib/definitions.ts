export type SquareValueType = "O" | "X" | null;

export type SquareType = {
    char: SquareValueType;
    onSquareClick: () => void;
};

export type StatusType = {
    text: string;
};

export type BoardType = {
    xIsNext: boolean;
    squares: SquareValueType [][];
    onPlay: (squares: SquareValueType [][]) => void;
};