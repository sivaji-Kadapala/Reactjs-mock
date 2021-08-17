import React, { Component } from 'react'

export default class ForceUpdate extends Component {
    upadate=()=>{
        this.forceUpdate();
    }
    render() {
        console.log("component is re-rendered");
        return (
            <div>
                <button onClick={this.upadate}>Render</button>
            </div>
        )
    }
}
