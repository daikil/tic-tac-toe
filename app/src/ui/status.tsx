import { StatusType } from "../lib/definitions";

export default function Status({text}: StatusType) {
    return (
        <div className="status">
            <p>{text}</p>
        </div>
    );
}