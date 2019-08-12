// @flow
import React from "react";
import ButtonComponent from "./ButtonComponent.react.js";
import "./KeypadComponent.css";

type Props = {
  value: string,
  setValue: (value: string) => void
};

function KeypadComponent(props: Props) {
  const [keyState: ?string, setKeyState] = React.useState("");
  const setKeyTo = (key: string) => {
    setKeyState(key);
  };

  return (
    <div className="KeypadComponent_root">
      <div className="KeypadComponent_row">
        <ButtonComponent value="C" />
        <ButtonComponent value="+/-" />
        <ButtonComponent value="%" />
        <ButtonComponent value="/" />
      </div>
      <div className="KeypadComponent_row">
        <ButtonComponent value="7" />
        <ButtonComponent value="8" />
        <ButtonComponent value="9" />
        <ButtonComponent value="*" />
      </div>
      <div className="KeypadComponent_row">
        <ButtonComponent value="4" />
        <ButtonComponent value="5" />
        <ButtonComponent value="6" />
        <ButtonComponent value="-" />
      </div>
      <div className="KeypadComponent_row">
        <ButtonComponent value="1" />
        <ButtonComponent value="2" />
        <ButtonComponent value="3" />
        <ButtonComponent value="+" />
      </div>
      <div className="KeypadComponent_row">
        <ButtonComponent value="0" />
        <ButtonComponent value="<" />
        <ButtonComponent value="." />
        <ButtonComponent value="=" />
      </div>
    </div>
  );
}

module.exports = KeypadComponent;
