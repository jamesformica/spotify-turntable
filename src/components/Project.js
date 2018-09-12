import React, { Component } from 'react'
import Markdown from 'react-markdown'

import FilterButton from './FilterButton'
import Link from './Link'
import styles from './Project.css'

import * as images from '../images'
import * as projects from '../markdown'

const imgStyles = image => ({
  backgroundImage: `url('${images[image]}')`,
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
    this.state = { markdown: null }
  }

  componentWillMount() {
    const { markdown: currentMd } = this.state

    if (!currentMd) {
      const { project: { markdown } } = this.props
      loadMarkdown(markdown).then(md => this.setState({ markdown: md }))
    }
  }

  render() {
    const { project } = this.props
    const { markdown } = this.state

    return (
      <div className={styles.project}>
        <div className={styles.image} style={imgStyles(project.image)} />
        <div className={styles.content}>
          <div className={styles.pad} />
          <div className={styles.info}>
            <h2 className={styles.name}>{buildName(project.name)}</h2>

            <div className={styles.tags}>
              {project.tags.map(t => (
                <FilterButton text={t} key={t} />
              ))}
            </div>

            {!!markdown && <Markdown source={markdown} />}
          </div>
        </div>
        <div className={styles.sheild} />
        <div className={styles.actions}>
          <span role="img" aria-label={project.action}>
            <Link primary to={project.url}>{project.action}</Link>
          </span>
          <span role="img" aria-label={project.action}>
            <Link secondary to={project.github}>GitHub</Link>
          </span>
        </div>
      </div>
    )
  }
}

export default Project
