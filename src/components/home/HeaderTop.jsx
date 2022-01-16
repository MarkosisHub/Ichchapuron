import React from "react";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div className={styles.headerTopDetails}>
      <div className={styles.headerTopLogo}>
        <img src="/icons/logo.png" alt="Logo" />
      </div>
      <div className={styles.headerTopSearch}>
        <input type="text" placeholder="What are you looking for?" />
        <span className={styles.searchIcon}>
          <i className="pi pi-search"></i>
        </span>
      </div>
      <div className={styles.headerTopRight}>
        <span className={styles.headerTopCart}>
          <i className="pi pi-shopping-cart"></i>
          <span className={styles.headerTopCounter}>12</span>
        </span>
        <span className={styles.headerTopHeart}>
          <i className="pi pi-heart"></i>
        </span>
        <span className={styles.headerTopUser}>
          <i className="pi pi-user"></i>
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
