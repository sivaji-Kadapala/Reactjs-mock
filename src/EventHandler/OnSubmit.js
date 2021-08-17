import React, { useState } from 'react'

function OnSubmit() {
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const {username,password}=data;
    const onChange=e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e => {
        e.preventDefault();//if cancel the browser pendings
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <center>
                <input type="text" placeholder="username" value={username} name="username" onChange={onChange}/>
                <input type="password" placeholder="password" value={password} name="password" onChange={onChange}/>
                <input type="submit" name="submit"/>
            </center>
            </form>
            
        </div>
    )
}

export default OnSubmit
