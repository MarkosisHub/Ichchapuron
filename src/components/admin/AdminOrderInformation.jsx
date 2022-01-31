import React from "react";
import styles from "./AdminOrderInformation.module.css";

const AdminOrderInformation = () => {
  return (
    <div className={styles.adminOrderInformationSection}>
      <div className={styles.adminOrderInformationWrapper}>
        <div className={styles.adminOrderInformationDetails}>
          <div
            className={`${styles.singleAdminOrderInformation} ${styles.orderCreated}`}
          >
            <span>
              <i className="fas fa-hand-holding-usd"></i>
            </span>
            <div>
              <h6>Order Created at</h6>
              <p>16/02/2022 at 4:30pm</p>
            </div>
          </div>
          <div
            className={`${styles.singleAdminOrderInformation} ${styles.orderName}`}
          >
            <span>
              <i className="far fa-credit-card"></i>
            </span>
            <div>
              <h6>Name</h6>
              <p>Gabrielle</p>
            </div>
          </div>
          <div
            className={`${styles.singleAdminOrderInformation} ${styles.orderMail}`}
          >
            <span>
              <i className="fas fa-dollar-sign"></i>
            </span>
            <div>
              <h6>Mail</h6>
              <p>Gabrielle@gmail.com</p>
            </div>
          </div>
          <div
            className={`${styles.singleAdminOrderInformation} ${styles.orderContact}`}
          >
            <span>
              <i className="fas fa-dollar-sign"></i>
            </span>
            <div>
              <h6>Contact No</h6>
              <p>01831213421</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderInformation;
