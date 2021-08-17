import React from 'react'

function Map() {
    const arr=["React Js","React Js","Node Js","MongoDb","Express Js"];
    const arr1=[
        {
            id:1,
            sub:"React Js"
        },
        {
            id:2,
            sub:"Node Js"
        },
         {
            id:3,
            sub:"MongoDb"
        },
        {
            id:4,
            sub:"Express Js"
        }
    ]
    return (
        <div>
           {
                arr.map((value,index)=><li key={index}>{value}</li>)
               
           }
           {
                arr1.map((value)=><li key={value.id}>{value.sub}</li>)
           }
        </div>
    )
}

export default Map
