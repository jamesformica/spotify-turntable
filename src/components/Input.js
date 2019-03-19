import React, { useState, useEffect, useRef, useContext } from 'react'

import FateDispatch from '../context'
import styles from './Input.css'

const isAlive = (name) => {
  const chars = name.split('')

  const charTotal = chars.reduce((agg, curr) => {
    const total = agg + curr.charCodeAt()
    return total
  }, 0)

  return charTotal % 2 === 0
}

const submit = (e, name, dispatch) => {
  e.preventDefault()

  const victim = name.trim()

  if (!victim) return null

  return isAlive(victim)
    ? dispatch({ type: 'ALIVE' })
    : dispatch({ type: 'DEAD' })
}

const Input = () => {
  const inputEl = useRef()
  const [name, setName] = useState('')
  const dispatch = useContext(FateDispatch)

  const onInput = e => setName(e.target.value)
  const onChange = e => setName(e.target.value)
  const onSubmit = e => submit(e, name, dispatch)

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
