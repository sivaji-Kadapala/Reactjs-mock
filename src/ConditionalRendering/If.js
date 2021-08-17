import React, { Component } from 'react'

export default class If extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {
       if(this.state.isLogged)
       {
           return(
               <div>Sivaji</div>
           )
       }else{
           return(
            <div>siva</div>
           )
       }
    }
}
