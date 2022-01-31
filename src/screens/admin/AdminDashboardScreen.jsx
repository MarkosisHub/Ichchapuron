import React from "react";
import AdminSidenav from "../../components/admin/AdminSidenav";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminTotalAccount from "../../components/admin/AdminTotalAccount";
import AdminTotalOverview from "../../components/admin/AdminTotalOverview";
import AdminSalesStatusChart from "../../components/admin/AdminSalesStatusChart";
import AdminShoppingStatusChart from "../../components/admin/AdminShoppingStatusChart";
import AdminRecentTransactionTable from "../../components/admin/AdminRecentTransactionTable";
import styles from "./AdminDashboardScreen.module.css";

const AdminDashboardScreen = () => {
  return (
    <section className={styles.adminDashboardSection}>
      <div className={styles.adminDashboardWrapper}>
        <div className={styles.adminDashboardDetails}>
          <div className={styles.adminDashboardContentLeft}>
            <AdminSidenav />
          </div>
          <div className={styles.adminDashboardContentRight}>
            <AdminNavbar />
            <AdminTotalAccount />
            <AdminTotalOverview />
            <AdminSalesStatusChart />
            <AdminShoppingStatusChart />
            <AdminRecentTransactionTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardScreen;
