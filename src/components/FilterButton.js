import React from 'react'
import styled, { css } from 'styled-components'

import styles from './FilterButton.css'

const accents = [
  ['plum', 'lightpink'],
  ['lightblue', 'lightcyan'],
  ['bisque', 'lightyellow'],
  ['paleturquoise', 'lightskyblue'],
]

const StyledButton = styled.button`
  ${props => css`
    border-color: ${props.accent1};
    font-size: ${props.isDisplay ? '0.875rem' : '1.25rem'};
    cursor: ${props.isDisplay ? 'inherit' : 'pointer'};
  `}

  ${props => props.isActive && css`
    background: repeating-linear-gradient(
      45deg, ${props.accent1}, ${props.accent1} 10px, ${props.accent2} 10px, ${props.accent2} 20px
    );
  `}

  ${props => !props.isActive && css`
    background: white;
  `}
`

const getAccent = (text) => {
  const sum = text.split('').reduce((agg, curr) => agg + curr.charCodeAt(0), 0)
  const [accent1, accent2] = accents[sum % accents.length]

  return { accent1, accent2 }
}

const FilterButton = ({ text, onClick, isActive }) => {
  const isDisplay = !onClick
  const active = isDisplay ? true : isActive
  const clickEvent = isDisplay ? null : () => onClick(text)

  return (
    <StyledButton
      type="button"
      className={styles.button}
      onClick={clickEvent}
      isActive={active}
      isDisplay={isDisplay}
      {...getAccent(text)}
    >
      {text}
    </StyledButton>
  )
}

export default FilterButton
