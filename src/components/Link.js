import React from 'react'
import styled, { css } from 'styled-components'

const StlyedLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: black;
  border-bottom: 2px solid transparent;

  ${props => !props.noHover && css`
    &:hover {
      color: deeppink;
      border-bottom: 2px solid;
    }
  `}

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
