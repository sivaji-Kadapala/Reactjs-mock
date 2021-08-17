import React, { Component } from 'react'

export default class Props2 extends Component {
    
    render() {
        return (
            <div>
                <center>
                <h1>My mother is {this.props.mother}</h1>
                </center>
            </div>
        )
    }
}
