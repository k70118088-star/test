import React from "react";
import Navbar from "./Landingpage/Navbar";
import Headbar from "./Landingpage/Headbar";
import Footer from "./Landingpage/Footer";
import Slider from "./Landingpage/Slider";
import Products from "./Landingpage/Products";
import Categories from "./Landingpage/Categories";
import Trending from "./Landingpage/Trending";
import Promise from "./Landingpage/Promise";
import Blog from "./Landingpage/Blog";
import Questions from "./Landingpage/Questions";
import Newsletter from "./Landingpage/Newsletter";

const Home = () => {
  return (
    <div>
      <Headbar />
      <Navbar />
      <Slider />
      <Products />
      <Categories />
      <Trending />
      <Promise />
      <Blog />
      <Questions />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
