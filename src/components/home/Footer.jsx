import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={`${styles.footerTopWrapper} container`}>
        <div className={styles.footerTopDetails}>
          <div className={styles.footerTopContent}>
            <div>
              <Link to="/">
                <img src="/icons/logo_footer.png" alt="" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                veniam animi debitis, praesentium hic maxime dolore eligendi
                esse soluta.
              </p>
            </div>
            <div>
              <h5>Categories</h5>
              <ul>
                <li>
                  <Link to="/">English Medium</Link>
                </li>
                <li>
                  <Link to="/">Bangla Medium</Link>
                </li>
                <li>
                  <Link to="/">SSC/HSC</Link>
                </li>
                <li>
                  <Link to="/">Edexcel</Link>
                </li>
                <li>
                  <Link to="/">Cambridge</Link>
                </li>
                <li>
                  <Link to="/">Kids Generation</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>Customer Service</h5>
              <ul>
                <li>
                  <Link to="/">Support Center</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={styles.footerTopSocialLinks}>
                <a
                  className={styles.instagram}
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                >
                  <i className="pi pi-instagram"></i>
                </a>
                <a
                  className={styles.linkedin}
                  href="https://www.linkedin.com/"
                  rel="noreferrer"
                >
                  <i className="pi pi-linkedin"></i>
                </a>
                <a
                  className={styles.twitter}
                  href="https://twitter.com/"
                  rel="noreferrer"
                >
                  <i className="pi pi-twitter"></i>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomDetails}>
        <div className={`${styles.footerBottomContent} container`}>
          <div>
            <p>&copy;2022 Ichchapuron. All Rights Reserved.</p>
          </div>
          <div className={styles.footerBottomNav}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Categories</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
