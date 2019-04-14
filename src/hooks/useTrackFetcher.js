import { useEffect } from 'react'
import axios from 'axios'
import get from 'lodash/get'

import { STATES, SPOTIFY_CURRENT_TRACK_URL } from '../constants'

const fetchCurrentTrack = auth => (
  new Promise((resolve) => {
    axios.get(SPOTIFY_CURRENT_TRACK_URL, {
      headers: {
        Authorization: `Bearer ${auth['#access_token']}`,
      },
    }).then(response => resolve(response.data))
      .catch(() => {
        const url = `${global.location.origin}${global.location.pathname}`
        global.location.href = url
      })
  })
)

function useTrackFetcher(track, auth, dispatch) {
  let loop

  useEffect(() => {
    loop = setInterval(() => {
      fetchCurrentTrack(auth).then((data) => {
        if (!data || !data.is_playing) {
          dispatch({ type: STATES.NO_SONG })
          return
        }

        if (data.item.id === get(track, 'trackInfo.id')) {
          return
        }

        const trackInfo = {
          id: data.item.id,
          progress: data.progress_ms,
          duration: data.item.duration_ms,
          title: data.item.name,
          artist: data.item.artists[0].name,
          image: data.item.album.images[0].url,
        }

        const exitTrack = track.trackInfo ? track : undefined

        dispatch({ type: STATES.START_PLAYING, trackInfo, exitTrack })
      })
    }, 5000)

    return () => {
      clearInterval(loop)
    }
  }, [get(track, 'trackInfo.id')])
}

export default useTrackFetcher
