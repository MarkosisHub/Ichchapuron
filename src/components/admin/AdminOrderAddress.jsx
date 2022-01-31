import React from "react";
import styles from "./AdminOrderAddress.module.css";

const AdminOrderAddress = () => {
  return (
    <div className={styles.adminOrderAddressSection}>
      <div className={styles.adminOrderAddressWrapper}>
        <div className={styles.adminOrderAddressDetails}>
          <div className={styles.deliveryAddress}>
            <h6>Delivery Address</h6>
            <ul className={styles.deliveryAddressList}>
              <li>
                <p>Block Number:</p>
                <span>A-423</span>
              </li>
              <li>
                <p>Address:</p>
                <span>81 Fulton London</span>
              </li>
              <li>
                <p>Code:</p>
                <span>8238942</span>
              </li>
              <li>
                <p>Phone:</p>
                <span>01850301867</span>
              </li>
            </ul>
          </div>
          <div className={styles.billingAddress}>
            <h6>Billing Address</h6>
            <ul className={styles.billingAddressList}>
              <li>
                <p>Block Number:</p>
                <span>A-423</span>
              </li>
              <li>
                <p>Address:</p>
                <span>81 Fulton London</span>
              </li>
              <li>
                <p>Code:</p>
                <span>8238942</span>
              </li>
              <li>
                <p>Phone:</p>
                <span>01850301867</span>
              </li>
            </ul>
          </div>
          <div className={styles.invoiceDetail}>
            <h6>Invoice Detail</h6>
            <ul className={styles.invoiceDetailList}>
              <li>
                <p>Number:</p>
                <span>8924289374</span>
              </li>
              <li>
                <p>Seller GST:</p>
                <span>SDFJWEISSF</span>
              </li>
              <li>
                <p>Purchase GST:</p>
                <span>KSAHTFFWWEIO</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderAddress;
