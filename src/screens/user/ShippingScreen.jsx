import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import ShippingBanner from "../../components/shipping/ShippingBanner";
import ShippingForm from "../../components/shipping/ShippingForm";
import Summary from "../../components/cart/Summary";

const ShippingScreen = () => {
  return (
    <>
      <Header />
      <ShippingBanner />
      <ShippingForm />
      <Summary />
      <Footer />
    </>
  );
};

export default ShippingScreen;
