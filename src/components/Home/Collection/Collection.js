import "./collection.css";

import React from "react";

const Collection = () => {
  return (
    <div className="body">
      <div className="heading-view">
        <h1 className="heading left">Featured Collection</h1>
        <p>
          <a href="#">View All</a>
        </p>
      </div>
      <div className="collection-grid-item">
        <div className="first detail-style">
          <div className="detail-div">
            <div>
              <p>Abstract Painting</p>
              <small>John Doe</small>
            </div>
            <p>25000</p>
          </div>
        </div>
        <div className="collection-grid-item">
          <div className="image detail-style">
            <div className="detail-div">
              <div>
                <p>Abstract Painting</p>
                <small>John Doe</small>
              </div>
              <p>25000</p>
            </div>
          </div>
          <div className="image detail-style">
            <div className="detail-div">
              <div>
                <p>Abstract Painting</p>
                <small>John Doe</small>
              </div>
              <p>25000</p>
            </div>
          </div>
        </div>
        <div className="image detail-style">
          <div className="detail-div">
            <div>
              <p>Abstract Painting</p>
              <small>John Doe</small>
            </div>
            <p>25000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
