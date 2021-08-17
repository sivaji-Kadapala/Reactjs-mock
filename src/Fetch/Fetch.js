//It is used make the HTTP Requests
//It is mostly used in UseEffect hook
import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users').then(res =>
           res.json()).then(json=>setData(json))
    }, [])
    return (
        <div>
            {
                data.map((item)=><table border="1" key={item.id}>{item.name}</table>)
            }
        </div>
    )
}

export default Fetch
