import React, { Component } from 'react'
import ForceUpdate from './ForceUpdate'
import NameChangeDemo from './NameChangeDemo'


export default class ClassApp extends Component {
    render() {
        return (
            <div>
                <center>
                    
                    <NameChangeDemo/>
                    <ForceUpdate/>
                </center>
            </div>
        )
    }
}
