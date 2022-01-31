import React from 'react';
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import BlogBanner from "../../components/blog/BlogBanner";
import Blog from "../../components/blog/Blog";


const BlogScreen = () => {
  return <>
  <Header />
  <BlogBanner />
  <Blog />
  <Footer />
  </>;
};

export default BlogScreen;
