import React from 'react'
import sample from 'lodash/sample'

import { DEAD_TEXT_OPTIONS } from '../constants'
import useThanosDelay from '../helpers/useThanosDelay'
import Dissolve from './Dissolve'
import Status from './Status'

const Dead = () => {
  const show = useThanosDelay()

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
