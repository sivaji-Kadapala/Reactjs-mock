import React, { Component } from 'react'

export default class WithoutJSX extends Component {
    render() {
        return React.createElement("div",{id:"jsx",className:"WithoutJSX"},React.createElement("h1",null,"Hello World With out JSX"));
    }
}
