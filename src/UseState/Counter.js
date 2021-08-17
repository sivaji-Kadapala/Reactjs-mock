import React,{useState} from 'react';
export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <center>
                <h1>{count}</h1>
                <h1><button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decrement</button>
                 <button onClick={()=>setCount(0)}>Reset</button></h1>
            </center>
        </div>
    )
}