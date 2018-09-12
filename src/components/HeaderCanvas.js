import sample from 'lodash/sample'
import range from 'lodash/range'

const MAX_ITERATIONS = 600
const OPTIONS = [
  [-1.4, 1.6, 1.0, 0.7],
  [1.7, 1.7, 0.6, 1.2],
  [1.5, -1.8, 1.6, 0.9],
  [-1.8, -2.0, -0.5, -0.9],
  [1.2, 1.9, -0.2, 1.1],
]

class HeaderCanvas {
  constructor(id) {
    this.canvas = global.document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = Math.max(this.canvas.clientWidth, 1440)
    this.canvas.height = this.canvas.clientHeight

    this.scale = 0.005
    this.iterationCount = 0

    const [a, b, c, d] = sample(OPTIONS)
    this.a = a
    this.b = b
    this.c = c
    this.d = d

    this.draw = this.draw.bind(this)
    this.render = this.render.bind(this)
    this.getValue = this.getValue.bind(this)
    this.generatePoints = this.generatePoints.bind(this)
  }

  draw() {
    this.points = this.generatePoints()
    this.render()
  }

  generatePoints() {
    return range(0, this.canvas.height, 5).map(y => ({ x: 0, y, vx: 0, vy: 0 }))
  }

  /**
   * Using the [clifford attractor](http://paulbourke.net/fractals/clifford/)
   * find the angle between the two sets of x and y
   */
  getValue(x, y) {
    // scale down x and y
    const x0 = (x - this.canvas.width / 2) * this.scale
    const y0 = (y - this.canvas.height / 2) * this.scale

    // attactor gives new x, y for old one.
    const x1 = Math.sin(this.a * y0) + this.c * Math.cos(this.a * x0)
    const y1 = Math.sin(this.b * x0) + this.d * Math.cos(this.b * y0)

    // find angle from old to new, that's the value.
    return Math.atan2(y1 - y0, x1 - x0)
  }

  render() {
    for (let i = 0; i < this.points.length; i += 1) {
      // get each point and do what we did before with a single point
      const p = this.points[i]
      const value = this.getValue(p.x, p.y)
      p.vx += Math.cos(value) * 0.3
      p.vy += Math.sin(value) * 0.3

      // move to current position
      this.ctx.beginPath()
      this.ctx.lineWidth = 0.1
      this.ctx.strokeStyle = 'deeppink'
      this.ctx.moveTo(p.x, p.y)

      // add velocity to position and line to new position
      p.x += p.vx
      p.y += p.vy
      this.ctx.lineTo(p.x, p.y)
      this.ctx.stroke()

      // apply some friction so point doesn't speed up too much
      p.vx *= 0.99
      p.vy *= 0.99
    }

    if (this.iterationCount < MAX_ITERATIONS) {
      this.iterationCount += 1
      global.requestAnimationFrame(this.render)
    }
  }
}

export default HeaderCanvas
