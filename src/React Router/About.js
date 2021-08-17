import React from 'react'

const About = ({match}) => {
    return (
        <div>
            <center>
                About Page:{match.params.name}
            </center>
        </div>
    )
}

export default About
