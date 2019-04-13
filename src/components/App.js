import React, { useReducer } from 'react'

import Info from './Info'
import Turntable from './Turntable'
import Background from './Background'
import useTrackFetcher from '../hooks/useTrackFetcher'
import reducer from '../reducer'

const App = ({ auth }) => {
  const [track, dispatch] = useReducer(reducer, {})

  useTrackFetcher(track, auth, dispatch)

  return (
    <>
      <Background track={track} />
      <Info track={track} />
      <Turntable track={track} dispatch={dispatch} />
    </>
  )
}

export default App
