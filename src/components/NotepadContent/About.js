import React from 'react'
import calvinHobbsImage from '../../assets/calvinhobbs.jpg'

import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const StyledLink = styled.a`
    color: black;
    margin: 3px;
    cursor: pointer; /* Added cursor property */
`

function About() {
    const mailto = `mailto:dylanott858@gmail.com`
    const mailto2 = `mailto:dylan@nivaro.io`
    return (
        <div>
            <img
                alt="calvinHobbsImage"
                src={calvinHobbsImage}
                style={{ width: '100%' }}
            />
            <h2>Hi, I'm Dylan Ott</h2>
            <p>
                {' '}
                Currently, I'm working on{' '}
                <a
                    href="https://nivaro.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nivaro
                </a>{' '}
                and{' '}
                <a
                    href="https://delilah.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Delilah
                </a>{' '}
                as well as growing my personal brand on{' '}
                <a
                    href="https://www.tiktok.com/@dylanott"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TikTok
                </a>
                .
            </p>
            <div>
                <p>
                    Reach out to me at{' '}
                    <a href={mailto} target="_blank" rel="noopener noreferrer">
                        dylanott858@gmail.com
                    </a>{' '}
                    or at{' '}
                    <a href={mailto2} target="_blank" rel="noopener noreferrer">
                        dylan@nivaro.io
                    </a>
                </p>
                <div style={{ cursor: 'pointer' }}>
                    <StyledLink
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin
                            style={{
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                            }}
                        />
                    </StyledLink>
                    <StyledLink
                        href="https://www.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub
                            style={{
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                            }}
                        />
                    </StyledLink>
                </div>
            </div>
        </div>
    )
}

export default About
