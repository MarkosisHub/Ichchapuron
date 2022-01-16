import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <section className={styles.categoriesSection}>
      <div className={`${styles.categoriesWrapper} container`}>
        <div className={styles.categoriesDetails}>
          <div>
            <Link to="">English Medium</Link>
          </div>
          <div>
            <Link to="">Edexcel</Link>
          </div>
          <div>
            <Link to="">Cambridge</Link>
          </div>
          <div>
            <Link to="">Past Questions</Link>
          </div>
          <div>
            <Link to="">Bangla Medium</Link>
          </div>
          <div>
            <Link to="">English Version</Link>
          </div>
          <div>
            <Link to="">SSC/HSC</Link>
          </div>
          <div>
            <Link to="">Kids Generation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
