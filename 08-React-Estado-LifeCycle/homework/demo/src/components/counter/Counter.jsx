import { useState } from "react";

const Counter = () =>{
      const [counter, setCounter] = useState(0);

      const handleIncrement =() =>{
          setCounter(counter + 1);
      }

      const handleDecrement =() =>{
        if (counter > 0) setCounter(counter-1);
          
      }

    return (
        <div>
            <h1>Este es el Counter</h1>
            <button onClick={handleIncrement}>Aumentar State</button>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decremetnar State</button>

        </div>
    )
}

export default Counter;