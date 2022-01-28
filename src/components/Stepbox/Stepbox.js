import React from "react";
import "./Stepbox.scss";

const Stepbox = ({ stepName, stepIcon }) => {
  return (
    <div class="step ">
      <div class="v-stepper">
        <div class="rectangle">
          <div className="icon-box">{stepIcon}</div>
          <div className="icon-text">{stepName}</div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  );
};

export default Stepbox;
