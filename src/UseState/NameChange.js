import React,{useState} from "react";
export default function NameChange(){
    const [Name,setName]=useState("Sivaji");
    return(
<div>
    <center>
        <h1>my name is {Name}</h1>
        <button onClick={()=>setName("Siva")}>Change</button>
    </center>
</div>
    )
}