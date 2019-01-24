import React, { Component } from 'react'
import Observer from './Observer'
import Scroller from './Scroller'

class InViewport extends Component {
  componentDidMount() {
    const { inViewport } = this.props
    const Monitor = this.isProgressive() ? Observer : Scroller

    this.viewportMonitor = new Monitor(this.element, inViewport)
    this.viewportMonitor.monitor()
  }

  componentWillUnmount() {
    this.viewportMonitor.remove()
  }

  isProgressive = () => !!global.window.IntersectionObserver

  setRef = (el) => { this.element = el }

  render = () => {
    const { children, inViewport, ...rest } = this.props

    return <div ref={this.setRef} {...rest}>{children}</div>
  }
}

export default InViewport
