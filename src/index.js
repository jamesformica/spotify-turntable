import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import App from './components/App'

const root = global.document.getElementById('root')

Modal.setAppElement(root)
ReactDOM.render(<App />, global.document.getElementById('root'))
