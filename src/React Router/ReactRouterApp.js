import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Home'
import DashBoard from './DashBoard'
import About from './About'

const ReactRouterApp = () => {
    return (
        <div>
           <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/DashBoard" exact component={DashBoard}/>
                    <Route path="/About/:name" exact component={About}/>
                </Switch>
           </Router>
        </div>
    )
}

export default ReactRouterApp
