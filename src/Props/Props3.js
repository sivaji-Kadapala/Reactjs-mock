import React, { Component } from 'react'

export default class Props3 extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>first sister is {this.props.sisters.name1}</h1>
                     <h1>second siter is {this.props.sisters.name2}</h1>
                </center>
            </div>
        )
    }
}
