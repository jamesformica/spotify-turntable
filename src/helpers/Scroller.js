import debounce from 'lodash/debounce'

class Scroller {
  constructor(element, callback) {
    this.element = element
    this.callback = callback
    this.onScroll = debounce(this.isInViewport, 50)
  }

  monitor = () => {
    global.window.addEventListener('scroll', this.onScroll)
    this.isInViewport()
  }

  remove = () => {
    global.window.removeEventListener('scroll', this.onScroll)
  }

  isInViewport = () => {
    const rect = this.element.getBoundingClientRect()
    const isInViewport = rect.top < global.window.innerHeight

    if (isInViewport) {
      this.callback()
    }

    return isInViewport
  }
}

export default Scroller
