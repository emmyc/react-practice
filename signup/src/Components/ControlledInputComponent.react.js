// @flow
import React from "react";
import "./ControlledInputComponent.css";
type Props = {
  type: "text" | "password" | "email" | "checkbox",
  name: string,
  placeholder: string,
  value: string,
  setValue: (value: string) => void
};

function ControlledInputComponent(props: Props) {
  // const [inputState: string, setInputState] = React.useState("");

  // const onChange = function(e) {};
  const onChange = e => {
    console.log(e);
    console.log(e.target.value);
    props.setValue(e.target.value);
    // setValue goes to setNameState in Form, which changes nameState
  };

  return (
    <div className="ControlledInputComponent_root">
      <label className="ControlledInputComponent_label">{props.name}</label>
      <input
        className="ControlledInputComponent_input"
        type={props.type}
        onChange={onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

module.exports = ControlledInputComponent;
