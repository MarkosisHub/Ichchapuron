import React from "react";
import styles from "./LicensedDeliveryQuality.module.css";

const LicensedDeliveryQuality = () => {
  return (
    <section className={styles.licensedDeliveryQualitySection}>
      <div className={`${styles.licensedDeliveryQualityWrapper} container`}>
        <div className={styles.licensedDeliveryQualityDetails}>
          <div className={styles.licensedContent}>
            <div>
              <img src="/icons/licensed.png" alt="" />
            </div>
            <div>
              <h5>Licensed Verified</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, placeat.
              </p>
            </div>
          </div>
          <div className={styles.deliveryContent}>
            <div>
              <img src="/icons/delivery.png" alt="" />
            </div>
            <div>
              <h5>Quick Delivery</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, placeat.
              </p>
            </div>
          </div>
          <div className={styles.qualityContent}>
            <div>
              <img src="/icons/quality.png" alt="" />
            </div>
            <div>
              <h5>Best Quality</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensedDeliveryQuality;
