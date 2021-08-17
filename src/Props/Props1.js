
import React,{Component} from "react";
export default class Props1 extends Component{
    render(){
        return(
            <div>
                <center>
                    <h1> My father is {this.props.father}</h1>
                    
                </center>
            </div>
        )
    }
}