import React, { useRef, useEffect } from 'react'
import random from 'lodash/random'
import filter from 'lodash/filter'
import sample from 'lodash/sample'

import styles from './Dissolve.css'

class DrawDissolve {
  constructor() {
    this.go = true
    this.particles = []
  }

  start = (canvasEl) => {
    this.canvas = canvasEl
    this.cxt = this.canvas.getContext('2d')

    const { width, height } = global.document.documentElement.getBoundingClientRect()
    this.canvas.width = width
    this.canvas.height = height

    this.go = true
    this.draw()
  }

  stop = () => {
    this.go = false
  }

  draw = () => {
    this.particles = filter(this.particles, p => p.y > p.life)

    while (this.particles.length < this.canvas.width) {
      const newParticle = {
        x: random(this.canvas.width),
        y: random(this.canvas.height * 1.1, this.canvas.height),
        life: random(0, this.canvas.height),
        size: random(4, 10),
        speed: random(1, 5),
        colour: sample(['#755C3B', '#CDBB99', '#A37E58']),
      }

      this.particles.push(newParticle)
    }

    this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((p) => {
      this.cxt.fillStyle = p.colour
      this.cxt.fillRect(p.x, p.y, p.size, p.size)
      p.y -= p.speed
    })

    if (this.go) {
      global.window.requestAnimationFrame(this.draw)
    }
  }
}

const dissolveParticle = new DrawDissolve()

const Dissolve = () => {
  const canvasEl = useRef()

  useEffect(() => {
    dissolveParticle.start(canvasEl.current)

    return () => dissolveParticle.stop()
  })

  return <canvas className={styles.canvas} ref={canvasEl} />
}

export default Dissolve
