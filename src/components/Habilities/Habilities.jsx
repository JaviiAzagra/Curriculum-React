import React from "react";
import "./Habilities.scss";

const Habilities = ({ habilities }) => {
  return (
    <div>
      <h1>[ Skills ]</h1>
      <div className="habilities">
        <div>
          <div className="images">
            <img src={habilities.linux} alt="" />
            <img src={habilities.html} alt="" />
            <img src={habilities.css} alt="" />
            <img src={habilities.js} alt="" />
            <img src={habilities.react} alt="" />
            <img src={habilities.node} alt="" />
            <img src={habilities.mongo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilities;
