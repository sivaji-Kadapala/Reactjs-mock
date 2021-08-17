import React from 'react'
import  { UserContext } from './UseContextApp'
const ComponentB = () => {
    return (
        <div>
            <UserContext.Consumer>
                {value=><div>my name is {value}</div>}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentB
