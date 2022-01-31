import React from "react";
import { Link } from 'react-router-dom'
import styles from "./CartBanner.module.css";

const CartBanner = () => {
  return (
    <section className={styles.cartBannerSection}>
      <div className={`${styles.cartBannerWrapper} container`}>
        <div className={styles.cartBannerDetails}>
          <img src="/icons/cart_banner_icon.png" alt="" />
          <h2>My cart</h2>
          <Link to="/">Back to Shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;
