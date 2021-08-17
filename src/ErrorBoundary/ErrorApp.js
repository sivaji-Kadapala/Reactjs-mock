import React, { Component } from 'react'
import ErrorBound from './ErrorBound'
import User from './User'

export default class ErrorApp extends Component {
    render() {
        return (
            <div>
                <ErrorBound>
                    <User/>
                </ErrorBound>
            </div>
        )
    }
}
