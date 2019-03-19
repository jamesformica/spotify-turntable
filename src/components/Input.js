import React, { Fragment, useState, useEffect, useRef } from 'react'

import styles from './Input.css'

const isAlive = (name) => {
  const chars = name.split('')

  const charTotal = chars.reduce((agg, curr) => {
    const total = agg + curr.charCodeAt()
    return total
  }, 0)

  return charTotal % 2 === 0
}

const submit = (e, name, setAlive, setDead) => {
  e.preventDefault()

  const victim = name.trim()

  if (!victim) return null
  return isAlive(victim) ? setAlive() : setDead()
}

const Input = ({ setAlive, setDead }) => {
  const inputEl = useRef()
  const [name, setName] = useState('')

  const onInput = e => setName(e.target.value)
  const onChange = e => setName(e.target.value)
  const onSubmit = e => submit(e, name, setAlive, setDead)


  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Input
