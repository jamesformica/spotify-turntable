import React from 'react'

import { STATES } from '../constants'
import { RecordImage } from './Record'
import Arm from './Arm'
import RecordExit from './RecordExit'
import RecordEntry from './RecordEntry'
import RecordPlaying from './RecordPlaying'
import useRecordAnimator from '../hooks/useRecordAnimator'
import styles from './Turntable.css'

const Turntable = ({ track, dispatch }) => {
  useRecordAnimator(track, dispatch)

  return (
    <div className={styles.turntable}>
      <div className={styles.bg} />
      <div className={styles.recordSide}>
        <div className={styles.plate} />

        {track.animation === STATES.START_PLAYING && (
          <RecordEntry>
            <RecordImage trackInfo={track.trackInfo} />
          </RecordEntry>
        )}

        {track.animation === STATES.PLAYING && (
          <RecordPlaying>
            <RecordImage trackInfo={track.trackInfo} />
          </RecordPlaying>
        )}

        {track.exitTrack && (
          <RecordExit>
            <RecordImage trackInfo={track.exitTrack.trackInfo} />
          </RecordExit>
        )}

        <div className={styles.pin} />
      </div>
      <div className={styles.controlSide}>
        <Arm className={styles.armControl} track={track}>
          <div className={styles.base}>
            <div className={styles.baseCircle} />
          </div>
          <div className={styles.arm1} />
          <div className={styles.arm2}>
            <div className={styles.tip}>
              <div className={styles.dot1} />
              <div className={styles.dot2} />
              <div className={styles.lift} />
            </div>
          </div>
        </Arm>
        <div className={styles.volume} />
      </div>
    </div>
  )
}

export default Turntable
