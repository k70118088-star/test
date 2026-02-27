import React from "react";
import Navbar from "./components/Landingpage/Navbar";
import Headbar from "./components/Landingpage/Headbar";
import Footer from "./components/Landingpage/Footer";
import Slider from "./components/Landingpage/Slider";
import Products from "./components/Landingpage/Products";
import Categories from "./components/Landingpage/Categories";
import Trending from "./components/Landingpage/Trending";
import Promise from "./components/Landingpage/Promise";
import Blog from "./components/Landingpage/Blog";
import Questions from "./components/Landingpage/Questions";
import Newsletter from "./components/Landingpage/Newsletter";

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
