import React ,{useState,useEffect}from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
       console.log("clicked",count)
    }, [count])
    return (
        <div>
            <h1>you clicked {count} times</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default UseEffect1
