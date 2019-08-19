// @flow
import React from "react";
import ButtonComponent from "./ButtonComponent.react.js";
import "./KeypadComponent.css";

type Props = {
  setInputState: (inputState: string) => void
};

function KeypadComponent(props: Props) {
  const [keyState: ?string, setKeyState] = React.useState("");

  return (
    <div className="KeypadComponent_root">
      {[
        "C",
        "+/-",
        "%",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "0",
        "<",
        ".",
        "="
      ].map(elem => {
        return (
          <ButtonComponent value={elem} setInputState={props.setInputState} />
        );
      })}
    </div>
  );
}

module.exports = KeypadComponent;
