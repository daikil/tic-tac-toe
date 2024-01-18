type SquareType = {
    char: string;
};

export default function Square(prop: SquareType) {
    return <button className="square">{prop.char}</button>;
}
  