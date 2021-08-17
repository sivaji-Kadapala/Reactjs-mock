import React, { Component } from 'react'
import Jsx from './Jsx'
import WithoutJSX from './WithoutJSX'

export default class JsxApp extends Component {
    render() {
        return (
            <div>
                <Jsx/>
                <WithoutJSX/>
            </div>
        )
    }
}
