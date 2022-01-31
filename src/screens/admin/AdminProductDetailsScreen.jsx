import React from "react";
import AdminSidenav from "../../components/admin/AdminSidenav";
import AdminNavbar from "../../components/admin/AdminNavbar";
import styles from "./AdminProductDetailsScreen.module.css";

const AdminProductDetailsScreen = () => {
  return (
    <section className={styles.adminProductDetialsSection}>
      <div className={styles.adminProductDetailsWrapper}>
        <div className={styles.adminProductDetails}>
          <div className={styles.adminProductDetailsLeft}>
            <AdminSidenav />
          </div>
          <div className={styles.adminProductDetailsRight}>
            <AdminNavbar />
            <div className={styles.adminProductDetailsContent}>
              <div className={styles.adminProductDetailsContentLeft}>
                <img src="/images/product_details_image.png" alt="" />
              </div>
              <div className={styles.adminProductDetailsContentRight}>
                <div>
                  <h6>Product Name</h6>
                  <h4>Test</h4>
                </div>
                <div className={styles.adminProductInfo}>
                  <h6>Product Info</h6>
                  <ul>
                    <li>
                      <p>Serial no:</p>
                      <span>e23i23we</span>
                    </li>
                    <li>
                      <p>Category:</p>
                      <span>e23i23we</span>
                    </li>
                    <li>
                      <p>Status:</p>
                      <span>e23i23we</span>
                    </li>
                    <li>
                      <p>Description:</p>
                      <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Perferendis id officiis, error reiciendis
                        reprehenderit pariatur eius ducimus culpa vitae eum,
                        quae quas quaerat soluta quis vero ipsam possimus
                        tenetur repudiandae!
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.adminSalesInfo}>
                  <h6>Sales info</h6>
                  <ul>
                    <li>
                      <p>Price:</p>
                      <span>bdt 23423.00</span>
                    </li>
                    <li>
                      <p>Availability:</p>
                      <span>In Stock</span>
                    </li>
                    <li>
                      <p>Amount:</p>
                      <span>32 pcs</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.adminSpecification}>
                  <h6>Specification</h6>
                  <ul>
                    <li>
                      <p>Author:</p>
                      <span>Humayun</span>
                    </li>
                    <li>
                      <p>Publisher:</p>
                      <span>test</span>
                    </li>
                    <li>
                      <p>ISBN:</p>
                      <span>32232</span>
                    </li>
                    <li>
                      <p>Edition:</p>
                      <span>test</span>
                    </li>
                    <li>
                      <p>Cover:</p>
                      <span>test</span>
                    </li>
                    <li>
                      <p>Language:</p>
                      <span>test</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductDetailsScreen;
