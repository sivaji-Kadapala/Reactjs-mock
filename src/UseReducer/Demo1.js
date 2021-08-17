import React ,{useReducer} from 'react'
const initialState=0;
function reducer(state,action) {
    switch(action){
        case "Increment":return state+1;
         case "Decrement":return state-1;
          case "Reset":return initialState;
          default:throw new Error();
    }
    
}
const Demo1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch("Increment")}>+</button>
             <button onClick={()=>dispatch("Decrement")}>-</button>
              <button onClick={()=>dispatch("Reset")}> @</button>
        </div>
    )
}

export default Demo1
