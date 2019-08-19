// @flow
import React from "react";
import "./ScreenComponent.css";

type Props = {
  input: string,
  setInput: (input: string) => void,
  result: string,
  setResult: (result: string) => void
};
function ScreenComponent(props: Props) {
  return (
    <div className="ScreenComponent_root">
      <div className="ScreenComponent_input">
        <p>{props.input}</p>
      </div>
      <div className="ScreenComponent_result">
        <h1>{props.result}</h1>
      </div>
    </div>
  );
}

module.exports = ScreenComponent;
