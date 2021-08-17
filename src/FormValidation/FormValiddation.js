import React, { useState } from 'react';

const Formvalidation = () => {
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
        if(username.length<=5)
        {
            alert("username must be 5 charecters")
        }
        if(password !==confirmpassword){
           alert('passwords are not matched')
        }else{
            console.log(data)
        }
    }
    const handler=(e) => {
        
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="username" name="username" value={username} onChange={changeHandler}/><br/>
                {/* {username.length<=5?<p style={{"color":"red"}}>username must be 5 charectors</p>:null} */}
                <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler}/><br/>
                <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" placeholder="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/>
                <br/>
                 {/* {password !==confirmpassword?<p style={{"color":"red"}}>passwords are not matched</p>:null} */}
                <input type="submit" name="submit" />
            </form>
        </div>
    )
}

export default Formvalidation
