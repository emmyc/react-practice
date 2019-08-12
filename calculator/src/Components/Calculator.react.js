// @flow
import React from "react";
import ResultComponent from "./ResultComponent.react.js";
import ButtonComponent from "./ButtonComponent.react.js";
import KeypadComponent from "./KeypadComponent.react.js";

function Calculator() {
  const [inputState: ?string, setInputState] = React.useState("");
  const [resultState: number, setResultState] = React.useState(0);

  return (
    <div className="Calculator_root">
      <ResultComponent
        input={inputState}
        setInput={setInputState}
        result={resultState}
        setResult={setResultState}
      />
      <KeypadComponent />
    </div>
  );
}

module.exports = Calculator;
