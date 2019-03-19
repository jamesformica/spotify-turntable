import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

import { THANOS_DURATION } from '../timings'
import Status from './Status'

const Alive = ({ reset }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), THANOS_DURATION)
  })

  const { width, height } = global.document.documentElement.getBoundingClientRect()

  return show && (
    <>
      <Confetti numberOfPieces={300} width={width} height={height} />
      <Status title="ALIVE!" reset={reset}>
        Congratulations, apparently you have been deemed worthy of suvival... we&apos;re not sure why...
      </Status>
    </>
  )
}

export default Alive
