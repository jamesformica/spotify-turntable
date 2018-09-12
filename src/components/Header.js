import React, { Component } from 'react'

import HeaderCanvas from './HeaderCanvas'
import styles from './Header.css'

class Header extends Component {
  componentDidMount() {
    new HeaderCanvas('canvas').draw()
  }

  render() {
    return (
      <header className={styles.header}>
        <canvas className={styles.canvas} id="canvas" />
        <h1 className={styles.heading}>
          <span className={styles.title}>James Formica
            <br />
            UI Developer
            <br />
            <span className={styles.highlight}>&amp;&nbsp;</span>
            Creative Coder
          </span>
        </h1>
      </header>
    )
  }
}

export default Header
