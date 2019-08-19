// @flow
import React from "react";
import "./ButtonComponent.css";

type Props = {
  value: string,
  setInputState: (inputState: string) => void
};

function ButtonComponent(props: Props) {
  function onClick() {
    props.setInputState(props.value);
  }
  return (
    <div className="ButtonComponent_root">
      <button className="Button" name={props.value} onClick={onClick}>
        {props.value}
      </button>
    </div>
  );
}

module.exports = ButtonComponent;
