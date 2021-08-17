import React, { useState } from 'react';
import UseTitle from './UseTitle';

const CustomAPP = () => {
    const [count, setcount] = useState(0);
    UseTitle(count);
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Click</button>
        </div>
    )
}

export default CustomAPP
