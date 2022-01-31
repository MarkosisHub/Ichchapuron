import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegistrationScreen.module.css";

const RegistrationScreen = () => {
  return (
    <section className={styles.registrationSection}>
      <div className={`${styles.registrationWrapper} container`}>
        <div className={styles.registrationDetails}>
          <div className={styles.registrationContentLeft}>
            <Link to="/">
              <img src="/icons/logo.png" alt="" />
            </Link>
            <h5>Getting Started</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              soluta et distinctio saepe neque. Porro doloremque delectus ad
              dolorem sapiente.
            </p>
            <form className={styles.registrationForm}>
              <div className={styles.registrationFormGroup}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" />
              </div>
              <div className={styles.registrationFormGroup}>
                <label htmlFor="email">E-mail Address</label>
                <input type="email" id="email" />
              </div>
              <div className={styles.registrationFormGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className={styles.registrationFormGroup}>
                <label htmlFor="re-password">Re-type Password</label>
                <input type="password" id="re-password" />
              </div>
              <div
                className={`${styles.registrationFormGroup} ${styles.checkboxAndRemember}`}
              >
                <input type="checkbox" /> <span>Remember me</span>
              </div>
              <div className={styles.registrationFormGroup}>
                <button className={styles.registrationBtn}>Sign up</button>
              </div>
            </form>
            <div className={styles.registrationGoogleAndFacebook}>
              <h6>or</h6>
              <button className={styles.googleBtn}>
                <i className="pi pi-google"></i> <span>Google</span>
              </button>
              <button className={styles.facebookBtn}>
                <i className="pi pi-facebook"></i> <span>Facebook</span>
              </button>
              <p>
                Already have an account? <Link to="/login">Click here</Link>
              </p>
            </div>
          </div>
          <div className={styles.registrationContentRight}>
            <img src="/images/registration_image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationScreen;
