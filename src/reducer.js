import { STATES } from './constants'

const { NO_SONG, START_PLAYING, PLAYING, TRACK_EXITED } = STATES

const reducer = (state, { type, trackInfo, exitTrack }) => {
  switch (type) {
    case NO_SONG:
      return { animation: NO_SONG }
    case START_PLAYING:
      return { animation: START_PLAYING, trackInfo, ...(exitTrack && { exitTrack }) }
    case PLAYING:
      return { ...state, animation: PLAYING }
    case TRACK_EXITED: {
      return { ...state, exitTrack: undefined }
    }
    default:
      return { animation: NO_SONG }
  }
}

export default reducer
