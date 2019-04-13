import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${props => props.track.trackInfo && css`
    background: url('${props.track.trackInfo.image}');
    animation: ${fadeIn} 1s;
    animation-fill-mode: forwards;
  `}
  background-size: cover;
  filter: blur(100px) brightness(0.8);
  transition: 1s;
  opacity: 0;
`

export default Background
