import styled from 'styled-components'

const Record = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 29vw;
  height: 29vw;
  background: radial-gradient(#222, #000);
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--record-ring-size);
    height: var(--record-ring-size);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    --record-ring-size: 70%;
  }

  &::after {
    --record-ring-size: 90%;
  }
`

export const RecordImage = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  overflow: hidden;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${props => props.trackInfo.image}');
    background-size: cover;
    transform: scale(1.1);
  }
`

export default Record
