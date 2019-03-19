import React, { useState, useEffect } from 'react'
import sample from 'lodash/sample'

import { THANOS_DURATION } from '../timings'
import { DEAD_TEXT_OPTIONS } from '../constants'
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
        {sample(DEAD_TEXT_OPTIONS)}
      </Status>
    </>
  )
}

export default Dead
