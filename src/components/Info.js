import React from 'react'

import styles from './Info.css'

const Info = ({ track }) => (
  <div className={`${styles.info} ${track.trackInfo ? styles.show : ''}`}>
    {track.trackInfo && (
      <>
        <p className={styles.title}>{track.trackInfo.title}</p>
        <p className={styles.artist}>{track.trackInfo.artist}</p>
      </>
    )}
  </div>
)

export default Info
