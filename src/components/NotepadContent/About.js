import React from 'react'
import calvinHobbsImage from '../../assets/calvinhobbs.jpg'

function About({ content }) {
    const { paragraphs } = content
    return (
        <div>
            <img src={calvinHobbsImage} style={{ width: '100%' }} />
            <h2>About Me</h2>
            {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </div>
    )
}

export default About
