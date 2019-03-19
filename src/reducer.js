import { MODES } from './constants'

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return MODES.input
    case 'ALIVE':
      return MODES.alive
    case 'DEAD':
      return MODES.dead
    default:
      return state
  }
}

export default reducer
