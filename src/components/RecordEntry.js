import styled, { keyframes } from 'styled-components'

import { TIMINGS } from '../constants'
import Record from './Record'

const flipIn = keyframes`
  from {
    transform: translate(-100vw, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg) ;
  }
`

const RecordEntry = styled(Record)`
  animation: ${flipIn} ${TIMINGS.IN_OUT}ms infinite ease-in-out;
  animation-fill-mode: forwards;
  z-index: 100;
`

export default RecordEntry
