//it is make a http request and responce calls
//it is mostly used in useEffect hook
import React,{useState,useEffect} from "react";
import axios from "axios";
const Axios=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setData(res.data));
    })
return(
    <div>
         {
                data.map((item)=><li border="1" key={item.id}>{item.email}</li>)
            }
    </div>
)
}
export default Axios;