import React, { Component } from 'react'
const context=React.createContext()
export default class SingleApp extends Component {
    render() {
        return (
            <div>
                <context.Provider value={41}>
                <A/>
                </context.Provider>
            </div>
        )
    }
}
class A extends Component {
    render() {
        return (
            <div>
                <B/>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div>
                <C/>
            </div>
        )
    }
}
class C extends Component {
    render() {
        return (
            <div>
                <context.Consumer>
                    {
                        value=><h3> my value is {value}</h3>
                    }
                </context.Consumer>
            </div>
        )
    }
}
