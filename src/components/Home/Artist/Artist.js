import React from "react";
import "./artist.css";

const Artist = () => {
  return (
    <div className="body">
      <div className="heading-view">
        <h1 className="heading left">Featured Artist</h1>
        <p>
          <a href="#">View All</a>
        </p>
      </div>
      <div className="artist-grid">
        <div className="artist-img detail-style height">
          <p className="detail-text">John Doe</p>
        </div>
        <div className="artist-img detail-style height">
          <p className="detail-text">John Doe</p>
        </div>
        <div className="artist-img detail-style height">
          <p className="detail-text">John Doe</p>
        </div>
        <div className="artist-img detail-style height">
          <p className="detail-text">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
