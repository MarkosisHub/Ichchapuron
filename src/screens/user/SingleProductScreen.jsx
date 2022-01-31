import React from 'react'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import ProductDetails from '../../components/product/ProductDetails'
import SpecificationAndAuthor from '../../components/product/SpecificationAndAuthor'
import CustomerReview from '../../components/product/CustomerReview'
import PeopleBuySlider from '../../components/product/PeopleBuySlider'
import JustForYouSlider from '../../components/product/JustForYouSlider'

const SingleProductScreen = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <SpecificationAndAuthor />
      <CustomerReview />
      <PeopleBuySlider />
      <JustForYouSlider />
      <Footer />
    </>
  )
}

export default SingleProductScreen
