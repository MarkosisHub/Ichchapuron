import React from "react";
import styles from "./AdminTotalAccount.module.css";

const AdminTotalAccount = () => {
  return (
    <div className={styles.adminTotalAccountSection}>
      <div className={styles.adminTotalAccountWrapper}>
        <div className={styles.adminTotalAccountDetails}>
          <div
            className={`${styles.singleAdminTotalAccount} ${styles.totalSales}`}
          >
            <span>
              <i className="fas fa-hand-holding-usd"></i>
            </span>
            <div>
              <h6>Total sales</h6>
              <p>bdt 32423423</p>
            </div>
          </div>
          <div
            className={`${styles.singleAdminTotalAccount} ${styles.totalExpenses}`}
          >
            <span>
              <i className="far fa-credit-card"></i>
            </span>
            <div>
              <h6>Total Expenses </h6>
              <p>bdt 32423423</p>
            </div>
          </div>
          <div
            className={`${styles.singleAdminTotalAccount} ${styles.totalRevenue}`}
          >
            <span>
              <i className="fas fa-dollar-sign"></i>
            </span>
            <div>
              <h6>Total Revenue </h6>
              <p>bdt 32423423</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTotalAccount;
