import React, { useReducer } from 'react'

import { MODES } from '../constants'
import Input from './Input'
import Alive from './Alive'
import Dead from './Dead'
import Thanos from './Thanos'
import FateDispatch from '../context'
import reducer from '../reducer'
import background from '../images/galaxy.jpg'
import styles from './App.css'

const bgStyles = {
  backgroundImage: `url('${background}')`,
}

const App = () => {
  const [mode, dispatch] = useReducer(reducer, MODES.input)

  return (
    <FateDispatch.Provider value={dispatch}>
      <div className={styles.app}>
        <div className={styles.bg} style={bgStyles} />
        {mode === MODES.input && <Input />}
        {mode !== MODES.input && <Thanos />}
        {mode === MODES.alive && <Alive />}
        {mode === MODES.dead && <Dead />}
      </div>
    </FateDispatch.Provider>
  )
}

export default App
