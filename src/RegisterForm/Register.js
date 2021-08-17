import React, { useState } from 'react';

const Register = () => {
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    });
    const {username,email,password,confirmpassword}=data;
    const changeHandler=e => {
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler=e => {
        e.preventDefault();
        if(password===confirmpassword){
            console.log(data)
        }else{
            console.log(('passwords are not matched'))
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="username" name="username" value={username} onChange={changeHandler}/><br/>
                <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler}/><br/>
                <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" placeholder="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default Register
