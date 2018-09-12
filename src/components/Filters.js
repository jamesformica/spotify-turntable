import React from 'react'

import Container from './Container'
import styles from './Filters.css'

const Filters = ({ children }) => (
  <Container>
    <div className={styles.filters}>
      {children}
    </div>
  </Container>
)

export default Filters
