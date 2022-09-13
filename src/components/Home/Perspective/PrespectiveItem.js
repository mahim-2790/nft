import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import image from "../../../assets/grid/other.png";
import "./perspective.css";

const PrespectiveItem = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="painting-detail-div">
      <div className="painting-detail-img ">
        <img alt="" src={image} />
      </div>
      <div className="painting-detail">
        <div className="art-detail">
          <div>
            <h4 className="painting-name">Abstract Painting</h4>
            <small>John doe</small>
          </div>
          {clicked ? (
            <AiFillHeart
              size={24}
              color={clicked && "red"}
              onClick={() => setClicked(!clicked)}
            />
          ) : (
            <AiOutlineHeart size={24} onClick={() => setClicked(!clicked)} />
          )}
        </div>
        <h4>15000</h4>
      </div>
    </div>
  );
};

export default PrespectiveItem;
