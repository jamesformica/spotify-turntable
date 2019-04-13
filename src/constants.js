export const SPOTIFY_CURRENT_TRACK_URL = 'https://api.spotify.com/v1/me/player/currently-playing'
export const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'
export const SPOTIFY_AUTH_PARAMS = {
  client_id: 'e61eabced08d43d4ad591c36cb31e34a',
  scope: 'user-read-currently-playing',
  response_type: 'token',
}


export const STATES = {
  NO_SONG: 'NO_SONG',
  START_PLAYING: 'START_PLAYING',
  PLAYING: 'PLAYING',
  TRACK_EXITED: 'TRACK_EXITED',
}

export const TIMINGS = {
  IN_OUT: 1000,
}
