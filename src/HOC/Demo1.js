import React, { useState } from 'react';

function Demo1() {
    return (
        <div>
            <HocGreen cmp={Counter}/>
            <HocWhite cmp={Counter}/>
            <HocRed cmp={Counter}/>
        </div>
    )
}

export default Demo1
function HocGreen(props) {
    return <h2 style={{background:"green"}}><props.cmp/></h2>
}
function HocWhite(props) {
    return <h2 style={{background:"white"}}><props.cmp/></h2>
}
function HocRed(props) {
    return <h2 style={{background:"red"}}><props.cmp/></h2>
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>update</button>
        </div>
    )
}
