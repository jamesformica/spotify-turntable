import React, { useState } from 'react'

import background from '../images/galaxy.jpg'
import Input from './Input'
import Alive from './Alive'
import Dead from './Dead'
import Thanos from './Thanos'
import styles from './App.css'


const bgStyles = {
  backgroundImage: `url('${background}')`,
}

const MODES = {
  input: 'input',
  alive: 'alive',
  dead: 'dead',
}

const App = () => {
  const [mode, setMode] = useState(MODES.input)

  const setAlive = () => setMode(MODES.alive)
  const setDead = () => setMode(MODES.dead)
  const setInput = () => setMode(MODES.input)

  return (
    <div className={styles.app}>
      <div className={styles.bg} style={bgStyles} />
      {mode === MODES.input && <Input {...{ setAlive, setDead }} />}
      {mode !== MODES.input && <Thanos />}
      {mode === MODES.alive && <Alive reset={setInput} />}
      {mode === MODES.dead && <Dead reset={setInput} />}
    </div>
  )
}

export default App
