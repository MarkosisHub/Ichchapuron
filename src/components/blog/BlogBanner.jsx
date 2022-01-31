import React from "react";
import {Link} from 'react-router-dom'
import styles from "./BlogBanner.module.css";

const BlogBanner = () => {
  return (
    <section className={styles.blogBannerSection}>
      <div className={`${styles.blogBannerWrapper} container`}>
        <div className={styles.blogBannerDetails}>
          <img src="/icons/blog_banner_icon.png" alt="" />
          <h2>Blog</h2>
          <Link to="/">Back to Shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
