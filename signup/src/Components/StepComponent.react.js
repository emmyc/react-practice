// @flow
import React from "react";
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";
// import ControlledInputComponent from "./ControlledInputComponent.react.js";

type Props = {
  label: "1" | "2" | "3"
};

function StepComponent(props: Props) {
  return (
    <div className="StepComponent_root">
      <h1>Step {props.label}.</h1>
      <img src={`step${props.label}`} />
    </div>
  );
}

module.exports = StepComponent;
