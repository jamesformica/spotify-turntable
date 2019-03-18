import React, { useState } from 'react'

import background from '../images/rock.jpg'
import Input from './Input'
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

  return (
    <div className={styles.app}>
      <div className={styles.bg} style={bgStyles} />
      {mode === MODES.input && <Input {...{ setAlive, setDead }} />}
      {mode === MODES.alive && <h1>ALIVE</h1>}
      {mode === MODES.dead && <h1>DEAD</h1>}
    </div>
  )
}

export default App
