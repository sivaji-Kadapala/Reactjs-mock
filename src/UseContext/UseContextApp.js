import React from 'react'
import ComponentB from './ComponentB';
export const UserContext=React.createContext();
const UseContextApp = () => {
    return (
        <div>
            <UserContext.Provider value="sivaji">
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextApp
