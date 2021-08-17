import React, { Component } from 'react'
import Props from './Props'

export default class NameChangeDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"sivaji",
             products:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>this.setState({products:data})).catch(err=>console.log(err));
    }
    render() {
        return (
            <div>
                <center>
                    <Props data={this.state.products}/>
                   <h1> {this.state.name}</h1>
                   
                    <button onClick={()=>this.setState({name:"sivaji kadapala"})}>Change</button>
                   
                </center>
                 {this.state.products.map((product)=><li key={product.id}>{product.username}</li>)}
            </div>
        )
    }
}
