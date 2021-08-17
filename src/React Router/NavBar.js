import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to="/"> Home</Link>
                <Link to='/DashBoard'>DashBoard</Link>
                <Link to="/About">About</Link>
                
            </ul>
        </div>
    )
}

export default NavBar
