import React from "react";
import { GoThumbsup } from "react-icons/go";
import "./attribute.css";

const Attribute = () => {
  return (
    <div className="body-margin attribute home-grid">
      <div>
        <GoThumbsup size={30} color="#B18579" />
        <h4>High Quality Material</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
      </div>
      <div>
        <GoThumbsup size={30} color="#B18579" />
        <h4>High Quality Material</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
      </div>
      <div>
        <GoThumbsup size={30} color="#B18579" />
        <h4>High Quality Material</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
      </div>
    </div>
  );
};

export default Attribute;
