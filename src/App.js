import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/user/HomeScreen";
import CategoryScreen from "./screens/user/CategoryScreen";
import SingleProductScreen from "./screens/user/SingleProductScreen";
import WishlistScreen from "./screens/user/WishlistScreen";
import CartScreen from "./screens/user/CartScreen";
import ShippingScreen from "./screens/user/ShippingScreen";
import OrderConfirmedScreen from "./screens/user/OrderConfirmedScreen";
import BlogScreen from "./screens/user/BlogScreen";
import SingleBlogScreen from "./screens/user/SingleBlogScreen";
import LoginScreen from "./screens/user/LoginScreen";
import RegistrationScreen from "./screens/user/RegistrationScreen";
import AdminDashboardScreen from "./screens/admin/AdminDashboardScreen";
import AdminProductListScreen from "./screens/admin/AdminProductListScreen";
import AdminProductCreateScreen from "./screens/admin/AdminProductCreateScreen";
import AdminProductUpdateScreen from "./screens/admin/AdminProductUpdateScreen";
import AdminProductDetailsScreen from "./screens/admin/AdminProductDetailsScreen";
import AdminOrderListScreen from "./screens/admin/AdminOrderListScreen";
import AdminOrderDetailsScreen from "./screens/admin/AdminOrderDetailsScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/product/:id" element={<SingleProductScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/order-success" element={<OrderConfirmedScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/blog/:id" element={<SingleBlogScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
        <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />
        <Route path="/admin/product-list" element={<AdminProductListScreen />} />
        <Route
          path="/admin/product-list/:id"
          element={<AdminProductDetailsScreen />}
        />
        <Route
          path="/admin/product-create"
          element={<AdminProductCreateScreen />}
        />
        <Route
          path="/admin/product-update"
          element={<AdminProductUpdateScreen />}
        />
        <Route path="/admin/order-list" element={<AdminOrderListScreen />} />
        <Route path="/admin/order-list/:id" element={<AdminOrderDetailsScreen />} />
      </Routes>
    </>
  );
};

export default App;
