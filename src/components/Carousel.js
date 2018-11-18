import React from 'react'
import NukaCarousel from 'nuka-carousel'

import styles from './Carousel.css'

const Previous = ({ previousSlide }) => (
  <button className={styles.previous} onClick={previousSlide} type="button">⬅</button>
)

const Next = ({ nextSlide }) => (
  <button className={styles.next} onClick={nextSlide} type="button">⬅</button>
)

const Carousel = ({ children }) => (
  <NukaCarousel
    wrapAround
    renderBottomCenterControls={null}
    renderCenterLeftControls={Previous}
    renderCenterRightControls={Next}
  >
    {children}
  </NukaCarousel>
)

export default Carousel
