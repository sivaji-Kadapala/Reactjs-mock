import React ,{useState}from 'react'

function OnChange1() {
    const [user, setUser] = useState("");
    return (
        <div>
            <center>
                <h1>{user}</h1>
                <h1><input type="text" placeholder="username" value={user} name="user" onChange={(e)=>setUser(e.target.value)}/></h1>
            </center>
        </div>
    )
}

export default OnChange1
