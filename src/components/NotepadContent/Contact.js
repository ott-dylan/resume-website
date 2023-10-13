import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Icons = { FaLinkedin, FaGithub }

const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    margin-left: 10px;
`

const StyledLink = styled.a`
    color: black;
`

function Contact({ content }) {
    const { email, emailText, socialText, social } = content
    const mailto = `mailto:${email}`
    const mailto2 = `mailto:dylan@nivaro.io`
    return (
        <div>
            <h2>Let's have a chat!</h2>
            <p>
                {emailText}
                <a href={mailto}>{email}</a> or at{' '}
                <a href={mailto2}>dylan@nivaro.io</a>
            </p>
            <p>{socialText}</p>
            <ul>
                {social.map((s, idx) => {
                    const Icon = Icons[s.name]
                    return (
                        <StyledItem key={idx}>
                            <StyledLink
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon />
                            </StyledLink>
                        </StyledItem>
                    )
                })}
            </ul>
        </div>
    )
}

export default Contact
