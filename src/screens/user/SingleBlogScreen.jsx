import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import BlogBanner from "../../components/blog/BlogBanner";
import SingleBlog from "../../components/blog/SingleBlog";

const SingleBlogScreen = () => {
  return (
    <>
      <Header />
      <BlogBanner />
      <SingleBlog />
      <Footer />
    </>
  );
};

export default SingleBlogScreen;
