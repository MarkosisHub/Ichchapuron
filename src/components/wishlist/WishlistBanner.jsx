import React from "react";
import {Link} from 'react-router-dom'
import styles from "./WishlistBanner.module.css";

const WishlistBanner = () => {
  return (
    <section className={styles.wishlistBannerSection}>
      <div className={`${styles.wishlistBannerWrapper} container`}>
        <div className={styles.wishlistBannerDetails}>
          <img src="/icons/wishlist_banner_icon.png" alt="" />
          <h2>My Wishlist</h2>
          <Link to="/">Back to Shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default WishlistBanner;
