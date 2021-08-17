import React, { Component } from 'react'
import OnChange1 from './OnChange1'
import OnSubmit from './OnSubmit'

export default class EventHandlersApp extends Component {
    render() {
        return (
            <div>
                <OnChange1/>
                <OnSubmit/>
            </div>
        )
    }
}
