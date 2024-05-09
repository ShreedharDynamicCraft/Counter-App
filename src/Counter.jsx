import React,{useState} from 'react';


const Counter=()=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count + 1);

    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            window.alert("Counter cannot be less than zero");
        }
    };
    
    function reset(){
        setCount(count-count);

    }

return (
  <div> <h1>Counter</h1>
              <p style={{ alignItems: 'center' }}>
 <h2>{count}</h2></p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>Reset</button>

    </div> 
);
};

export default Counter;