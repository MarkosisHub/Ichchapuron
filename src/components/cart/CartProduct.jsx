import React from "react";
import styles from "./CartProduct.module.css";

const CartProduct = () => {
  return (
    <section className={styles.cartProductSection}>
      <div className={`${styles.cartProductWrapper} container`}>
        <div className={styles.cartProductDetails}>
          <div className={styles.cartProductDetailsHeader}>
            <h5>Product</h5>
            <h5 className={styles.quantityHeader}>Quantity</h5>
            <h5>Total</h5>
          </div>
          <div className={styles.singleCartProductDetails}>
            <div className={styles.singleCartProductDetailsLeft}>
              <div className={styles.singleCartProductImage}>
                <img src="/images/wishlist_image.png" alt="" />
              </div>
              <div className={styles.singleCartProductContent}>
                <h3>The Dreaming Arts</h3>
                <h4>Tom Moloney</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum dolore debitis vitae minima, reprehenderit enim sequi
                  labore veritatis quos perferendis.
                </p>
                <p className={styles.singlePrice}>BDT 580.00</p>
              </div>
            </div>
            <div className={styles.singleCartProductDetailsMiddle}>
              <button>
                <i className="fas fa-chevron-up"></i>
              </button>
              <p className={styles.counter}>3</p>
              <button>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className={styles.singleCartProductDetailsRight}>
              <div className={styles.singleCartProductTotalPrice}>
                <h5>BDT </h5>
                <h4>580.00</h4>
              </div>
              <div className={styles.singleCartProductDeleteBtn}>
                <button>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.singleCartProductDetails}>
            <div className={styles.singleCartProductDetailsLeft}>
              <div className={styles.singleCartProductImage}>
                <img src="/images/wishlist_image.png" alt="" />
              </div>
              <div className={styles.singleCartProductContent}>
                <h3>The Dreaming Arts</h3>
                <h4>Tom Moloney</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum dolore debitis vitae minima, reprehenderit enim sequi
                  labore veritatis quos perferendis.
                </p>
                <p className={styles.singlePrice}>BDT 580.00</p>
              </div>
            </div>
            <div className={styles.singleCartProductDetailsMiddle}>
              <button>
                <i className="fas fa-chevron-up"></i>
              </button>
              <p className={styles.counter}>3</p>
              <button>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className={styles.singleCartProductDetailsRight}>
              <div className={styles.singleCartProductTotalPrice}>
                <h5>BDT </h5>
                <h4>580.00</h4>
              </div>
              <div className={styles.singleCartProductDeleteBtn}>
                <button>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.singleCartProductDetails}>
            <div className={styles.singleCartProductDetailsLeft}>
              <div className={styles.singleCartProductImage}>
                <img src="/images/wishlist_image.png" alt="" />
              </div>
              <div className={styles.singleCartProductContent}>
                <h3>The Dreaming Arts</h3>
                <h4>Tom Moloney</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum dolore debitis vitae minima, reprehenderit enim sequi
                  labore veritatis quos perferendis.
                </p>
                <p className={styles.singlePrice}>BDT 580.00</p>
              </div>
            </div>
            <div className={styles.singleCartProductDetailsMiddle}>
              <button>
                <i className="fas fa-chevron-up"></i>
              </button>
              <p className={styles.counter}>3</p>
              <button>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className={styles.singleCartProductDetailsRight}>
              <div className={styles.singleCartProductTotalPrice}>
                <h5>BDT </h5>
                <h4>580.00</h4>
              </div>
              <div className={styles.singleCartProductDeleteBtn}>
                <button>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProduct;
