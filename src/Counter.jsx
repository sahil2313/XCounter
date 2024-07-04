
import "./Counter.css"
import { useState } from "react"

const Counter = () => {

    const [counter , setCounter] = useState(0)

    return (
        <div>
          <h1>Counter App</h1>
          <p>Count: {counter}</p>
          <button onClick={()=> setCounter(prev => prev + 1)}>Increment</button>
          <button onClick={()=> setCounter(prev => prev - 1)}>Decrement</button>
        </div>
    )
}

export default Counter