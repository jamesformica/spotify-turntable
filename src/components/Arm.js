import styled, { css, keyframes } from 'styled-components'

import { STATES } from '../constants'

const calculateSwing = ({ trackInfo }) => trackInfo.duration - trackInfo.progress

const swing = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
  }

  1% {
    transform: rotate(6deg);
  }

  99% {
    transform: rotate(28deg);
  }
`

const Arm = styled('div')`
  ${props => props.track.animation === STATES.PLAYING && css`
    animation: ${swing} ${calculateSwing(props.track)}ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  `}
`

export default Arm
