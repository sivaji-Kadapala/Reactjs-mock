//UseHistory cant be called in class level components
//it is worked only functional components
import React from 'react'
import { useHistory } from 'react-router'
const DashBoard = () => {
    let history=useHistory();
    return (
        <div>
            <center>
                DashBoard Page
                <button onClick={()=>history.push('./Home')}>Login</button>
            </center>
        </div>
    )
}

export default DashBoard
