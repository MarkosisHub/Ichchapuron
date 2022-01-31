import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShippingBanner.module.css";

const ShippingBanner = () => {
  return (
    <section className={styles.shippingBannerSection}>
      <div className={`${styles.shippingBannerWrapper} container`}>
        <div className={styles.shippingBannerDetails}>
          <img src="/icons/shipping_banner_icon.png" alt="" />
          <h2>Make Payment</h2>
          <Link to="/">Back to Shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default ShippingBanner;
