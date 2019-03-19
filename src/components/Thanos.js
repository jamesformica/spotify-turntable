import React from 'react'

import { THANOS_DURATION, SNAP_DURATION, SNAP_DELAY } from '../constants'
import snap from '../images/snap.png'
import styles from './Thanos.css'

const imgStyles = {
  animationDuration: `${THANOS_DURATION}ms`,
}

const snapStyles = {
  animationDuration: `${SNAP_DURATION}ms`,
  animationDelay: `${SNAP_DELAY}ms`,
}

const Thanos = () => (
  <div className={styles.thanos} style={imgStyles}>
    <img className={styles.img} src={snap} alt="Thanos" />
    <span className={styles.snap} style={snapStyles}>SNAP!</span>
  </div>

)

export default Thanos
