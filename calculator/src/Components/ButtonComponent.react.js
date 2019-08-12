// @flow
import React from "react";
import "./ButtonComponent.css";

type Props = {
  value: string
};

function ButtonComponent(props: Props) {
  return (
    <div className="ButtonComponent_root">
      <button className="Button" name={props.value}>
        {props.value}
      </button>
    </div>
  );
}

module.exports = ButtonComponent;
