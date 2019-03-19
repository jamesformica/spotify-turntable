import React from 'react'

import styles from './Reset.css'

const Reset = ({ reset }) => (
  <button type="button" onClick={reset} className={styles.reset}>
    Try another name...
  </button>
)

export default Reset
