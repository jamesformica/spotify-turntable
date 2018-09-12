import React from 'react'
import styled, { css } from 'styled-components'

const StlyedLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;

  &:hover {
    border-bottom: 1px solid;
  }

  ${props => props.primary && css`
    color: blueviolet;
  `}

  ${props => props.secondary && css`
    color: black;
  `}
`

const Link = ({ to, children, ...rest }) => (
  <StlyedLink
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {children}
  </StlyedLink>
)

export default Link
