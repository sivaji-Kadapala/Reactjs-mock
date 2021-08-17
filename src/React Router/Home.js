import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

const Home = () => {
    const [auth, setAuth] = useState(false);
    if(auth)
    {
        return <Redirect to="/DashBoard"/>
    }
    return (
        <div>
            <center>Home Page</center>
            <button onClick={()=>setAuth(true)}>Login</button>
        </div>
    )
}

export default Home
