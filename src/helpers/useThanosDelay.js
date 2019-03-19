import { useState, useEffect } from 'react'

import { THANOS_DURATION } from '../constants'

function useThanosDelay() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), THANOS_DURATION)
  })

  return show
}

export default useThanosDelay
