import React, { Component } from 'react'
import { UserContext } from '../UseContext/UseContextApp'

export default class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        value=><h1> my value is {value}</h1>
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}
