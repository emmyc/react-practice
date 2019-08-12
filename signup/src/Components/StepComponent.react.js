// @flow
import React from "react";
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";
// import ControlledInputComponent from "./ControlledInputComponent.react.js";

type Props = {
  step: number
};

const dataset = [
  { title: "Register for an account", image: step1 },
  { title: "Get matched with another player", image: step2 },
  { title: "Connect and meet new friends!", image: step3 }
];
function StepComponent(props: Props) {
  return (
    <div className="StepComponent_root">
      <h1>Step {props.step}.</h1>
      <h3> {dataset[props.step - 1].title}</h3>
      <img src={dataset[props.step - 1].image} />
    </div>
  );
}

module.exports = StepComponent;
