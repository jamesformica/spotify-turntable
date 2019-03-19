import React, { useState, useEffect } from 'react'
import sample from 'lodash/sample'

import { DEAD_TEXT_OPTIONS, THANOS_DURATION } from '../constants'
import Dissolve from './Dissolve'
import Status from './Status'

const Dead = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), THANOS_DURATION)
  })

  return show && (
    <>
      <Dissolve />
      <Status title="DEAD!">
        {sample(DEAD_TEXT_OPTIONS)}
      </Status>
    </>
  )
}

export default Dead
