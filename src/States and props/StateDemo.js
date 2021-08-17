import React  from "react";
import PropsDemo from "./PropsDemo";
export default class StateDemo extends React.Component{
    constructor(){
        super();
this.state={
name:"sivaji"
}
    }


render(){
    return(
        <div>
<center>
    <h1>{this.state.name}</h1>
    <PropsDemo name={this.state.name}/>
</center>
        </div>


    )

}
}