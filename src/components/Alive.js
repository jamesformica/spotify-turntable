import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import sample from 'lodash/sample'

import { ALIVE_TEXT_OPTIONS, THANOS_DURATION } from '../constants'
import Status from './Status'

const Alive = () => {
  const [show, setShow] = useState(false)
  const { width, height } = global.document.documentElement.getBoundingClientRect()

  useEffect(() => {
    setTimeout(() => setShow(true), THANOS_DURATION)
  })

  return show && (
    <>
      <Confetti numberOfPieces={300} width={width} height={height} />
      <Status title="ALIVE!">
        {sample(ALIVE_TEXT_OPTIONS)}
      </Status>
    </>
  )
}

export default Alive
