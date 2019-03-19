import React from 'react'

import Reset from './Reset'
import styles from './Status.css'

const Status = ({ children, title, reset }) => (
  <div className={styles.wrapper}>
    <span className={styles.status}>{title}</span>
    <p className={styles.text}>{children}</p>
    <Reset reset={reset} />
  </div>
)

export default Status
