import React from "react";
import image from "../../../assets/grid/life.png";
import "./quote.css";

const Quote = () => {
  return (
    <div className=" body-margin quote-div">
      <div className="quote-img">
        <img alt="" src={image} />
      </div>
      <div className="quote-message">
        <h2>Find Art You Love</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <img alt="" src="" />
      </div>
    </div>
  );
};

export default Quote;
