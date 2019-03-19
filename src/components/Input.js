import React, { useState, useEffect, useRef, useContext } from 'react'

import FateDispatch from '../context'
import decideFate from '../helpers/fateDecider'
import styles from './Input.css'

const Input = () => {
  const inputEl = useRef()
  const dispatch = useContext(FateDispatch)
  const [name, setName] = useState('')

  const onInput = e => setName(e.target.value)
  const onChange = e => setName(e.target.value)
  const onSubmit = e => decideFate(e, name, dispatch)

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <>
      <h1 className={styles.title}>Do you survive Thanos?</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputEl}
          type="text"
          value={name}
          onInput={onInput}
          onChange={onChange}
          className={styles.input}
          placeholder="Enter your name..."
        />
        <button type="submit" className={styles.snap}>Snap!</button>
      </form>
    </>
  )
}

export default Input
