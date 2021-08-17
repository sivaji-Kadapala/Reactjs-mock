import React from 'react';
export default function Filter(){
    const arr=["sivaji","srinu","janu","ravi","rahul"];
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
    const filter=arr.filter((name)=>name.includes('s'));
     const filter1=arr1.filter((items)=>items.id>=1);
    return(
        <div>
            <center>
                {
                    filter.map((item)=><li>{item}</li>)
                }
                {
                    filter1.map((item)=><li>{item.sub}</li>)
                }
            </center>
        </div>
    )
}