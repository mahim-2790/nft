import React from "react";
import "./gridItem.css";

const GridItem = ({ imgUrl, count, title }) => {
  console.log(imgUrl);
  return (
    <div className="grid-item">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

export default GridItem;
