import React from 'react'
import Confetti from 'react-confetti'
import sample from 'lodash/sample'

import { ALIVE_TEXT_OPTIONS } from '../constants'
import useThanosDelay from '../helpers/useThanosDelay'
import Status from './Status'

const Alive = () => {
  const show = useThanosDelay()

  const { width, height } = global.document.documentElement.getBoundingClientRect()

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
