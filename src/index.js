import React from 'react'
import ReactDOM from 'react-dom'
import qs from 'qs'

import { SPOTIFY_AUTH_URL, SPOTIFY_AUTH_PARAMS } from './constants'
import App from './components/App'

const query = qs.parse(global.location.hash)

if (!query['#access_token']) {
  const params = qs.stringify({ ...SPOTIFY_AUTH_PARAMS, redirect_uri: global.location.href })

  global.location.href = `${SPOTIFY_AUTH_URL}?${params}`
} else {
  ReactDOM.render(<App auth={query} />, global.document.getElementById('root'))
}
