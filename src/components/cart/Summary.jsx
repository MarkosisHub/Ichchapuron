import React from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  return (
    <section className={styles.summarySection}>
      <div className={`${styles.summaryWrapper} container`}>
        <div className={styles.summaryDetails}>
          <div className={styles.summaryContentLeft}>
            <h3>Summary</h3>
            <ul className={styles.summaryListLeft}>
              <li>
                <p>Price</p>
                <h4>BDT 500.00</h4>
              </li>
              <li>
                <p>Delivery Charge</p>
                <h4>BDT 500.00</h4>
              </li>
              <li>
                <div>
                  <span>Have a coupon?</span>
                  <input type="text" placeholder="Enter voucher code" />
                </div>
                <button>Apply</button>
              </li>
              <li>
                <p>Discount</p>
                <h4 className={styles.discountPrice}>-BDT 15.00</h4>
              </li>
            </ul>
          </div>
          <div className={styles.summaryContentRight}>
            <ul className={styles.summaryListRight}>
              <li>
                <p>Total Price</p>
                <h4>BDT 500.00</h4>
              </li>
              <li>
                <button>Confirm & Pay</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
