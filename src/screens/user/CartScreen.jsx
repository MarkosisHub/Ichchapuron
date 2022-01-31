import React from 'react'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import CartBanner from '../../components/cart/CartBanner'
import CartProduct from '../../components/cart/CartProduct'
import Summary from '../../components/cart/Summary'

const CartScreen = () => {
  return (
    <>
      <Header />
      <CartBanner />
      <CartProduct />
      <Summary />
      <Footer />
    </>
  )
}

export default CartScreen
