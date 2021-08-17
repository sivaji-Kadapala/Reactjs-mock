import React,{Component} from "react";
export default class ConstructorDemo extends Component{
   
    render(){
        return(
            <div>
                <center>
                    <h1>Childrens are {this.props.childrens}</h1>
                </center>
            </div>
        )
    }
}