import React, { useState, useEffect } from 'react'

import { THANOS_DURATION } from '../timings'
import Dissolve from './Dissolve'
import Status from './Status'

const Dead = ({ reset }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), THANOS_DURATION)
  })

  return show && (
    <>
      <Dissolve />
      <Status title="DEAD!" reset={reset}>
        Mr. Stark, I don&apos;t feel so good...
      </Status>
    </>
  )
}

export default Dead
