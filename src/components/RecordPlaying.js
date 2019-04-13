import styled, { keyframes } from 'styled-components'

import Record from './Record'

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const RecordPlaying = styled(Record)`
  animation: ${spin} 3s infinite linear;
`

export default RecordPlaying
