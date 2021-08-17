
import React,{Component} from "react";
export default class State1 extends Component{
    constructor(props){
        super(props);
        this.state={
            name1:"Venkatrama Achari",
            name2:"Srinivasulu",
            dob:"06-06-1997"
        }}
        handleChange=() => {
            this.setState({dob:" actually dont know"})
        }
        render(){
            return(
                <div>
                        <center>
                            <h1>First Brother in law is {this.state.name1}</h1>
                            <h1>Second Brother in law is {this.state.name2}</h1>
                            <h1>My DOB is {this.state.dob}</h1>
                            <button onClick={this.handleChange}>click</button>
                        </center>
                </div>
            )
        }
    }
