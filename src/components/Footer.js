import React from 'react'

import bananas from '../images/bananas.png'
import styles from './Footer.css'

const Footer = () => (
  <div className={styles.footer} style={{ backgroundImage: `url('${bananas}')` }}>
    <p className={styles.text}>MADE IN MELBOURNE BY JAMES FORMICA 2018</p>
    <p className={styles.text}>THANKS FOR STOPPING BY</p>
  </div>
)

export default Footer
