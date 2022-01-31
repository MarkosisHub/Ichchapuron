import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidenav from "../../components/admin/AdminSidenav";
import AdminOrderInformation from "../../components/admin/AdminOrderInformation";
import AdminOrderAddress from "../../components/admin/AdminOrderAddress";
import styles from "./AdminOrderDetailsScreen.module.css";

const AdminOrderDetailsScreen = () => {
  return (
    <section className={styles.adminOrderDetailsSection}>
      <div className={styles.adminOrderDetailsWrapper}>
        <div className={styles.adminOrderDetails}>
          <div className={styles.adminOrderDetailsLeft}>
            <AdminSidenav />
          </div>
          <div className={styles.adminOrderDetailsRight}>
            <AdminNavbar />
            <div className={styles.adminOrderDetailsContent}>
              <AdminOrderInformation />
              <AdminOrderAddress />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminOrderDetailsScreen;
