import React from "react";
import Header from "../../components/home/Header";
import HomeBanner from "../../components/home/HomeBanner";
import BestSellingSlider from "../../components/home/BestSellingSlider";
import LicensedDeliveryQuality from "../../components/home/LicensedDeliveryQuality";
import PopularAndStock from "../../components/home/PopularAndStock";
import SoulBooksSlider from "../../components/home/SoulBooksSlider";
import WonderkidBooksSlider from "../../components/home/WonderkidBooksSlider";
import Categories from "../../components/home/Categories";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import TopBuyers from "../../components/home/TopBuyers";
import Footer from "../../components/home/Footer";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <BestSellingSlider />
      <LicensedDeliveryQuality />
      <Categories />
      <PopularAndStock />
      <SoulBooksSlider />
      <WonderkidBooksSlider />
      <FeaturedCategories />
      <TopBuyers />
      <Footer />
    </>
  );
};

export default HomeScreen;
