import React from "react";
import "./shop.css";

const Shop = () => {
  return (
    <div className="body">
      <h1 className="heading">Shop by Price</h1>
      <div className="artist-grid">
        <div className="height artist-img ">
          <div className="shop-inner">
            <p>Under</p>
            <h1>5000</h1>
          </div>
        </div>
        <div className="height artist-img">
          <div className="shop-inner">
            <p>Under</p>
            <h1>5000</h1>
          </div>
        </div>
        <div className="height artist-img">
          <div className="shop-inner">
            <p>Under</p>
            <h1>5000</h1>
          </div>
        </div>
        <div className="height artist-img">
          <div className="shop-inner">
            <p>Under</p>
            <h1>5000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
