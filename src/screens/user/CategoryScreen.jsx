import React from 'react'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import CategoryBanner from '../../components/category/CategoryBanner'
import CategoryDetails from '../../components/category/CategoryDetails'

const CategoryScreen = () => {
  return (
    <>
      <Header />
      <CategoryBanner />
      <CategoryDetails />
      <Footer />
    </>
  )
}

export default CategoryScreen
