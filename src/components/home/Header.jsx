import React from "react";
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <div className={`${styles.headerWrapper} container`}>
        <HeaderTop/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
