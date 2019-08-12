// @flow
import React from "react";
import StepComponent from "./StepComponent.react.js";
import "./StepSelector.css";
// import ControlledInputComponent from "./ControlledInputComponent.react.js";

function StepSelector() {
  const [stepState: number, setStepState] = React.useState(1);

  const setStepStateTo = (value: number) => {
    setStepState(value);
  };

  React.useEffect(() => {
    console.log("Did Update anything");
  });

  React.useEffect(() => {
    // Call this as soon as stepState becomes 1
    console.log("updaated to stae", stepState);
    const timerID = setTimeout(() => {
      cycleSteps();
    }, 3000);

    // Call this when stepState is no longer going to be 1
    return () => {
      clearTimeout(timerID);
    };
  }, [stepState]);

  React.useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Ummount");
    };
  }, []);

  function cycleSteps() {
    setStepState(prevStepState => {
      if (prevStepState === 3) {
        return 1;
      } else {
        return prevStepState + 1;
      }
    });
  }

  return (
    <div className="StepSelector_root">
      <StepComponent step={stepState} />
      <div className="StepSelector_buttonRow">
        {[1, 2, 3].map(elem => {
          return (
            <button
              className={`StepSelector_button step${elem} ${
                stepState === elem ? "active" : ""
              }`}
              key={elem}
              onClick={setStepStateTo.bind(this, elem)}
            />
          );
        })}
      </div>
    </div>
  );
}

module.exports = StepSelector;
