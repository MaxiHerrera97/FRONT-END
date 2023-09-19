import { useState, useEffect } from "react";



const CounterFn = () =>{
    const [counter, setCounter] = useState(0);

const handleIncrement = ( )=>{
    setCounter(counter + 1)
}

const handleDecrement = ( )=>{
    if (counter > 0) setCounter(counter - 1)
   
}

useEffect(()=>{
  console.log ('Holaa')

  return ()=> 'Se desmonto'
},[counter])
    return (
        
         <div>
            <h1>Verdu chupa pija</h1>
            <p>{counter}</p> 
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
         </div>
        
    )
}

export default CounterFn;