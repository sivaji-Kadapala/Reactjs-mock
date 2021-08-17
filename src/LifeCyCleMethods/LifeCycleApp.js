import React, { Component } from 'react'

export default class LifeCycleApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true,
             count:0
        }
    }
    deleteHeader=() => {
       this.setState({show:false}) 
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    render() {
        let myHeader;
        if(this.state.show){
            myHeader=<Children/>
        }
        return (
            <div>
                {myHeader}
                <button type="button" onClick={this.deleteHeader}>Delete Header</button><hr/>
                <h3>count:{this.state.count}</h3>
                  <button type="button" onClick={()=>this.setState({count:this.state.count+1})}>Increment</button><hr/>
            </div>
        )
    }
}
class Children extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
   componentWillUnmount() {
         console.log("componentWillUnmount")
     }
    render() {
        return (
            <div>
                <h1>Childern</h1>
            </div>
        )
    }
}
