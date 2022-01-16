import React from 'react'
import styles from './TopBuyers.module.css'

const TopBuyers = () => {
  return (
    <section className={styles.topBuyersSection}>
      <div className={`${styles.topBuyersWrapper} container`}>
      <div className={styles.topBuyersTop}>
          <div className={styles.topBuyersTopBlock}></div>
          <h3 className={styles.topBuyersTopHeader}>
            Top Buyers Of The Week
          </h3>
          <div className={styles.topBuyersTopBlock}></div>
        </div>
        <div className={styles.topBuyersDetails}>
          <div className={styles.singleTopBuyerContent}>
            <img src="/images/buyer_1.png" alt="" />
            <h5>Emily Smith</h5>
          </div>
          <div className={styles.singleTopBuyerContent}>
            <img src="/images/buyer_2.png" alt="" />
            <h5>Emily Smith</h5>
          </div>
          <div className={styles.singleTopBuyerContent}>
            <img src="/images/buyer_3.png" alt="" />
            <h5>Emily Smith</h5>
          </div>
          <div className={styles.singleTopBuyerContent}>
            <img src="/images/buyer_4.png" alt="" />
            <h5>Emily Smith</h5>
          </div>
          <div className={styles.singleTopBuyerContent}>
            <img src="/images/buyer_5.png" alt="" />
            <h5>Emily Smith</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopBuyers
