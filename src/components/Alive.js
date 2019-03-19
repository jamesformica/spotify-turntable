import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import sample from 'lodash/sample'

import { THANOS_DURATION } from '../timings'
import { ALIVE_TEXT_OPTIONS } from '../constants'
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
        {sample(ALIVE_TEXT_OPTIONS)}
      </Status>
    </>
  )
}

export default Alive
