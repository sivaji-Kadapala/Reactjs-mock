import React,{Component} from "react";
export default class PropsDemo extends Component{
    render(){
        return(
            <h1>Kadapala {this.props.name}</h1>
        )
    }
}