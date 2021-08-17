import axios from 'axios';
import React, { Component } from 'react'

export default class PostHttp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:"",
             title:"",
             body:""
        }
    }
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=e=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    render() {
        const {userId,title,body}=this.state;
        return (
            <div>
               <form onSubmit={this.submitHandler}>
                    <input
                type="text"
                value={userId}
                name="userId"
                onChange={this.changeHandler}/><br/>
                <input
                type="text"
                value={title}
                name="title"
                onChange={this.changeHandler}/><br/>
                <input
                type="text"
                value={body}
                name="body"
                onChange={this.changeHandler}/><br/>
                <button type="submit"> Submit</button>
               </form>
            </div>
        )
    }
}
