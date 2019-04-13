import { useEffect } from 'react'

import { STATES, TIMINGS } from '../constants'

const { START_PLAYING, PLAYING, TRACK_EXITED } = STATES

let startTimeout
let exitTimeout

function useRecordAnimator({ animation, exitTrack }, dispatch) {
  useEffect(() => {
    if (animation === START_PLAYING) {
      startTimeout = setTimeout(() => dispatch({ type: PLAYING }), TIMINGS.IN_OUT)
    }

    if (exitTrack) {
      exitTimeout = setTimeout(() => dispatch({ type: TRACK_EXITED }), TIMINGS.IN_OUT)
    }

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(exitTimeout)
    }
  })
}

export default useRecordAnimator
