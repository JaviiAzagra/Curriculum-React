import React from "react";
import "./Habilities.scss";

const Habilities = ({ habilities }) => {
  return (
    <div>
      <h1>[ Skills ]</h1>
      <div className="habilities">
        <div>
          <div className="images">
            <img src={habilities.linux} alt="linux" />
            <img src={habilities.html} alt="html" />
            <img src={habilities.css} alt="css" />
            <img src={habilities.js} alt="js" />
            <img src={habilities.react} alt="react" />
            <img src={habilities.angular} alt="angular" />
            <img src={habilities.node} alt="node" />
            <img src={habilities.mongo} alt="mongo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilities;
