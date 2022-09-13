import React from "react";
import Artist from "../../Home/Artist/Artist";
import Attribute from "../../Home/Attribute/Attribute";
import Banner from "../../Home/Banner/Banner";
import BuyGrid from "../../Home/BuyGrid/BuyGrid";
import Collection from "../../Home/Collection/Collection";
import Footer from "../../Home/Footer/Footer";
import Perspective from "../../Home/Perspective/Perspective";
import Quote from "../../Home/Quote/Quote";
import Shop from "../../Home/Shop/Shop";

const Home = () => {
  return (
    <div className="main">
      <Banner />
      <div className="main-div">
        <BuyGrid />
        <Collection />
        <Artist />
        <Shop />
        <Quote />
        <Perspective />
        <Attribute />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
