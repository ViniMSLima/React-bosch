import { useState } from "react"
import style from "./styles.css"

export default function Calculator() {
    const [inputNum, setInput] = useState("");

    return (
        <div>
            <input value={inputNum} onChange={() => console.log("ai")}></input>

            <div className="div2">
                <button onClick={() => setInput(inputNum + "1")}>1</button>
                <button onClick={() => setInput(inputNum + "2")}>2</button>
                <button onClick={() => setInput(inputNum + "3")}>3</button>
                <button onClick={() => setInput(inputNum + "+")} style={{ backgroundColor: "orange" }}>+</button>
            </div>
            <div className="div2">
                <button onClick={() => setInput(inputNum + "4")}>4</button>
                <button onClick={() => setInput(inputNum + "5")}>5</button>
                <button onClick={() => setInput(inputNum + "6")}>6</button>
                <button onClick={() => setInput(inputNum + "-")} style={{ backgroundColor: "orange" }}>-</button>
            </div>
            <div className="div2">
                <button onClick={() => setInput(inputNum + "7")}>7</button>
                <button onClick={() => setInput(inputNum + "8")}>8</button>
                <button onClick={() => setInput(inputNum + "9")}>9</button>
                <button onClick={() => setInput(inputNum + "*")} style={{ backgroundColor: "orange" }}>x</button>
            </div>
            <div className="div2">
                <button onClick={() => setInput(inputNum + "0")}>0</button>
                <button onClick={() => setInput((prevState) => eval(prevState))} style={{ backgroundColor: "grey" }}>=</button>
                <button onClick={() => setInput("")} style={{ backgroundColor: "grey" }}>clr</button>
                <button onClick={() => setInput(inputNum + "/")} style={{ backgroundColor: "orange" }}>/</button>
            </div>
        </div>
    )
}
