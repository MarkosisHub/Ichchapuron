import React from "react";
import styles from "./FeaturedCategories.module.css";

const FeaturedCategories = () => {
  return (
    <section className={styles.featuredCategoriesSection}>
      <div className={`${styles.featuredCategoriesWrapper} container`}>
        <div className={styles.featuredCategoriesTop}>
          <div className={styles.featuredCategoriesTopBlock}></div>
          <h3 className={styles.featuredCategoriesTopHeader}>
            Featured Categories
          </h3>
          <div className={styles.featuredCategoriesTopBlock}></div>
        </div>
        <div className={styles.featuredCategoriesDetails}>
          <div className={styles.singleFeaturedCategory}>
            <img src="/images/featured_categories_1.png" alt="" />
            <h4>Pens & Pencils</h4>
          </div>
          <div className={styles.singleFeaturedCategory}>
            <img src="/images/featured_categories_2.png" alt="" />
            <h4>Printing Materials</h4>
          </div>
          <div className={styles.singleFeaturedCategory}>
            <img src="/images/featured_categories_3.png" alt="" />
            <h4>Office Supplies</h4>
          </div>
          <div className={styles.singleFeaturedCategory}>
            <img src="/images/featured_categories_4.png" alt="" />
            <h4>Arts & Carfts</h4>
          </div>
          <div className={styles.singleFeaturedCategory}>
            <img src="/images/featured_categories_5.png" alt="" />
            <h4>Stationaries</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
