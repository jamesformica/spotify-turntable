import React, { Component } from 'react'
import Markdown from 'react-markdown'

import Link from './Link'
import styles from './Project.css'

import * as images from '../images'
import * as projects from '../markdown'

const imgStyles = ({ image, bgPosition }) => ({
  backgroundImage: `url('${images[image]}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
    this.state = { markdown: null, image: null }
  }

  componentWillMount() {
    const { markdown: currentMd } = this.state
    const { project: { markdown } } = this.props

    if (!currentMd && markdown) {
      loadMarkdown(markdown).then(md => this.setState({ markdown: md }))
    }
  }

  componentDidMount() {
    // const box = this.project.getBoundingClientRect()

    // if (box.top < global.window.innerHeight) {
    // const { project: { image } } = this.props
    // this.setState({ image })
    // } else {
    //   // listen to scroll and do shit
    // }
  }

  render() {
    const { project } = this.props
    const { markdown } = this.state

    return (
      <div className={styles[project.style]}>
        <div className={styles.project} ref={(p) => { this.project = p }}>
          <div className={styles.image}>
            <Link noHover to={project.url} style={imgStyles(project)} />
          </div>

          <div className={styles.content}>
            <Link to={project.url}>
              <h2 className={styles.name}>{buildName(project.name)}</h2>
            </Link>

            {!!markdown && <Markdown className={styles.markdown} source={markdown} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Project
