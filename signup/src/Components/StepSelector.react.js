// @flow
import React from "react";
import StepComponent from "./StepComponent.react.js";
// import ControlledInputComponent from "./ControlledInputComponent.react.js";

function StepSelector() {
  const [stepState: "1" | "2" | "3", setStepState] = React.useState("1");
  const setStepStateTo = (value: string) => {
    setStepState(value);
  };

  return (
    <div className="StepSelector_root">
      <StepComponent label={stepState} />
      <div className="StepSelector_buttonRow">
        <button className="StepSelector_button step1" />
        <button className="StepSelector_button step1" />
        <button className="StepSelector_button step1" />
      </div>
    </div>
  );
}

module.exports = StepSelector;
