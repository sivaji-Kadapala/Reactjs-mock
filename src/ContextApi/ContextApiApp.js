import React, { Component } from 'react'
import { UserContext } from '../UseContext/UseContextApp'
import ComponentC from './ComponentC'
import SingleApp from './SingleApp'

export default class ContextApiApp extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={41}>
                    <ComponentC/>
                </UserContext.Provider>
                <SingleApp/>
            </div>
        )
    }
}
