import { useState } from "react"
import style from "./styles.css"

export default function Counter() {
    const [num, setNum] = useState(0);

    function plus(){
        setNum(num + 1);
    }

    function minus(){
        setNum(num - 1);
    }

    return (
        <div>
            <button class="minusBtn" onClick={minus}>-</button>

            <p>{num}</p>

            <button class="plusBtn" onClick={plus}>+</button>
        </div>
    )
}