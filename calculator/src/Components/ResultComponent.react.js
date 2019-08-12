// @flow
import React from "react";
import "./ResultComponent.css";

type Props = {
  input: string,
  setInput: (input: string) => void,
  result: number,
  setResult: (result: number) => void
};
function ResultComponent(props: Props) {
  return (
    <div className="ResultComponent_root">
      <div className="ResultComponent_input">
        {" "}
        <p>{props.input}</p>
      </div>
      <div className="ResultComponent_result">
        <h1>{props.result}</h1>
      </div>
    </div>
  );
}

module.exports = ResultComponent;
