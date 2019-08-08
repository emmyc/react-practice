// @flow
import React from "react";

type Props = {
  label: string,
  number: number
};

function LabelComponent(props: Props) {
  return <div>Hello {props.label}</div>;
}

module.exports = LabelComponent;
