import { useState } from "react"

export default function Input(){

    const [input, setInput] = useState("");

    return(
        <div>

            <label htmlFor="">Digite algo</label>
            <input onChange={e => setInput(e.target.value)}></input>
            <p>
                {input}
            </p>
            
        </div>
    )
}