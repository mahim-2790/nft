import React from "react";
import "./buygrid.css";
import GridItem from "./GridItem/GridItem";

const BuyGrid = () => {
  return (
    <div className="body">
      <h1 className="heading">Buy Original Image</h1>
      <div className="home-grid">
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
        <GridItem
          imgUrl={"../../../assets/grid/dear.png"}
          title="All Paintings"
          count="520"
        />
      </div>
    </div>
  );
};

export default BuyGrid;
