import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import WishlistBanner from "../../components/wishlist/WishlistBanner";
import WishlistProduct from "../../components/wishlist/WishlistProduct";

const WishlistScreen = () => {
  return (
    <>
      <Header />
      <WishlistBanner />
      <WishlistProduct />
      <Footer />
    </>
  );
};

export default WishlistScreen;
