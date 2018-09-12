import React from 'react'

import Container from './Container'
import Link from './Link'
import me from '../images/me.jpg'
import styles from './About.css'

const About = () => (
  <Container>
    <div className={styles.about}>
      <div className={styles.avatar}>
        <img className={styles.img} src={me} alt="self portrait" />
      </div>
      <div className={styles.info}>
        <p>
          <span className={styles.item}>UI Developer</span>-
          <span className={styles.item}>Melbourne</span>
        </p>
        <p>
          <span className={styles.item}>React</span>-
          <span className={styles.item}>ES6</span>-
          <span className={styles.item}>Typescript</span>
        </p>
        <p>
          <span className={styles.item}>CSS Modules</span>-
          <span className={styles.item}>PostCSS</span>-
          <span className={styles.item}>SASS</span>
        </p>
        <p />
        <p>
          <Link className={styles.item} to="https://twitter.com/jamesralphjr">twitter</Link>-
          <Link className={styles.item} to="https://linkedin.com/in/james-formica">linkedIn</Link>-
          <Link className={styles.item} to="mailto:james.formica@gmail.com">email</Link>
        </p>
      </div>
    </div>
  </Container>
)

export default About
