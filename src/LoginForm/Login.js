import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        username:"",
        password:""
    });
    const {username,password}=data;
    const changeHandler=e => {
        setData({...data,[e.target.name]:[e.target.value]});
    }
    const submitHandler=e => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
               <h1>
                    <input type="text" placeholder="username" name="username" value={username} onChange={changeHandler}/><br/>
                <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
               </h1>
            </form>
        </div>
    )
}

export default Login
