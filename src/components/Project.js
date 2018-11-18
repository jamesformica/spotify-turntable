import React, { Component } from 'react'
import Markdown from 'react-markdown'
import debounce from 'lodash/debounce'
import { Collapse } from 'react-collapse'

import Link from './Link'
import Carousel from './Carousel'
import styles from './Project.css'

import * as images from '../images'
import * as projects from '../markdown'

const imgStyles = (image, bgPosition) => ({
  width: '100%',
  backgroundImage: `url('${images[image]}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: 0,
  ...(bgPosition && { backgroundPosition: bgPosition }),
})

const loadMarkdown = markdown => (
  new Promise((resolve) => {
    global.fetch(projects[markdown])
      .then(response => response.text())
      .then(md => resolve(md))
  })
)

const buildName = name => (
  name.map((n, i) => (
    <span key={n} className={i % 2 ? styles.titleBold : styles.title}>{n}</span>
  ))
)

class Project extends Component {
  constructor() {
    super()
    this.state = {
      markdown: null,
      isInViewport: false,
      isOpen: false,
    }

    this.toggle = this.toggle.bind(this)
    this.isInViewport = this.isInViewport.bind(this)
  }

  componentWillMount() {
    const { markdown: currentMd } = this.state
    const { project: { markdown } } = this.props

    if (!currentMd && markdown) {
      loadMarkdown(markdown).then(md => this.setState({ markdown: md }))
    }
  }

  componentDidMount() {
    if (!this.isInViewport()) {
      this.onScroll = debounce(this.isInViewport, 50)
      global.window.addEventListener('scroll', this.onScroll)
    }
  }

  isInViewport() {
    const box = this.project.getBoundingClientRect()
    const point = box.top - global.window.innerHeight / 2

    if (point < global.window.innerHeight) {
      this.setState({ isInViewport: true })

      if (this.onScroll) {
        global.window.removeEventListener('scroll', this.onScroll)
      }
      return true
    }
    return false
  }

  toggle() {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { project } = this.props
    const { markdown, isOpen, isInViewport } = this.state
    const isCarousel = !!project.image.push

    const hasWebsite = !!project.url
    const hasCode = !!project.github

    return (
      <div className={styles[project.style]}>
        <div className={styles.project} ref={(p) => { this.project = p }}>
          <div className={styles.image}>
            {isInViewport && isCarousel && (
              <Carousel>
                {project.image.map(img => (
                  <Link
                    noHover
                    to={project.url}
                    key={img}
                    style={imgStyles(img, project.bgPosition)}
                    className={styles.image}
                  />
                ))}
              </Carousel>
            )}

            {isInViewport && !isCarousel && (
              <Link noHover to={project.url} style={imgStyles(project.image, project.bgPosition)} />
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.mainTitle}>
              <h2 className={styles.name}>{buildName(project.name)}</h2>

              <span className={styles.links}>
                {hasWebsite && <Link to={project.url}>website</Link>}
                {hasWebsite && hasCode && ' / '}
                {hasCode && <Link to={project.github}>code</Link>}
              </span>
            </div>

            {!!markdown && (
              <div className={styles.more}>
                <button type="button" className={styles.toggle} onClick={this.toggle}>
                  Want to know more?
                </button>
                <Collapse isOpened={isOpen}>
                  <Markdown className={styles.markdown} source={markdown} />
                </Collapse>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Project
