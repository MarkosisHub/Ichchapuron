import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className={styles.productDetailsSection}>
      <div className={`${styles.productDetailsWrapper} container`}>
        <div className={styles.productDetails}>
          <div className={styles.productDetailsContentLeft}>
            <img src="/images/book_2.png" alt="" />
            <button className={styles.numOfWishlist}>
              <i className="pi pi-heart"></i>
              <span>37.6 K</span>
            </button>
          </div>
          <div className={styles.productDetailsContentRight}>
            <h4 className={styles.name}>My heart is a chainsaw</h4>
            <p className={styles.author}>By Stephen Graham Jones</p>
            <p className={styles.price}>BDT 145.00</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem odio eveniet quisquam, voluptatibus consequuntur sit
              optio eum tenetur sunt neque? Ipsam quaerat, eius distinctio
              explicabo aperiam enim debitis voluptates neque.
            </p>
            <p className={styles.stock}>Stock</p>
            <p className={styles.outOfStock}>Out of Stock</p>
            <div className={styles.numOfReviews}>
              <span className="pi pi-star-fill"></span>
              <span className="pi pi-star-fill"></span>
              <span className="pi pi-star-fill"></span>
              <span className="pi pi-star-fill"></span>
              <span className="pi pi-star-fill"></span>
            </div>
            <div className={styles.counterCartRead}>
              <div className={styles.counter}>
                <span className="pi pi-caret-left"></span>
                <span className="count">1</span>
                <span className="pi pi-caret-right arrow-right"></span>
              </div>
              <div className={styles.cartBtn}>
                <Sidebar
                  position="right"
                  visible={visible}
                  onHide={() => setVisible(false)}
                >
                  Content
                </Sidebar>
                <button
                  onClick={(e) => setVisible(true)}
                >add to cart</button>
              </div>
              <div className={styles.readOnline}>
                <button>read online</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
