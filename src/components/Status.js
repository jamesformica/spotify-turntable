import React from 'react'
import sample from 'lodash/sample'

import { RESET_TEXT_OPTIONS } from '../constants'
import styles from './Status.css'

const Status = ({ children, title, reset }) => (
  <div className={styles.wrapper}>
    <span className={styles.status}>{title}</span>

    <p className={styles.text}>{children}</p>

    <button type="button" onClick={reset} className={styles.reset}>
      {`${sample(RESET_TEXT_OPTIONS)}...`}
    </button>
  </div>
)

export default Status
