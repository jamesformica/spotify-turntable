class Observer {
  constructor(element, callback) {
    this.element = element
    this.callback = callback

    this.isInViewport = this.isInViewport.bind(this)
  }

  monitor = () => {
    this.observer = new global.IntersectionObserver(this.isInViewport, { threshold: 0.01 })
    this.observer.observe(this.element)
  }

  remove = () => {
    this.observer.unobserve(this.element)
  }

  isInViewport = ([entry]) => {
    if (entry.isIntersecting) {
      this.callback()
    }
  }
}

export default Observer
