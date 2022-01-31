import React from 'react';
import { Link } from 'react-router-dom'
import styles from './OrderConfirmedScreen.module.css'

const OrderConfirmedScreen = () => {
  return <section className={styles.orderConfirmedSection}>
    <div className={`${styles.orderConfirmedWrapper} container`}>
      <div className={styles.orderConfirmedDetails}>
        <img src="/icons/confirmed.png" alt="" />
        <h1>Your order has beed placed</h1>
        <Link to="/">Back to Shopping</Link>
      </div>
    </div>
  </section>;
};

export default OrderConfirmedScreen;
