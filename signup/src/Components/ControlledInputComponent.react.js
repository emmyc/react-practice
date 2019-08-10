// @flow
import React from "react";
import "./ControlledInputComponent.css";
type Props = {
  type: "text" | "password" | "email" | "checkbox",
  name: string,
  placeholder: string,
  value: string | boolean,
  setValue: (value: string | boolean) => void
};

function ControlledInputComponent(props: Props) {
  // const [inputState: string, setInputState] = React.useState("");

  // const onChange = function(e) {};
  const onChange = e => {
    console.log(e.target);
    console.log(e.target.value);
    if (props.type === "checkbox") {
      props.setValue(!props.value);
    } else {
      props.setValue(e.target.value);
    }
    // setValue goes to setNameState in Form, which changes nameState
  };

  function getCheckbox() {
    if (props.type === "checkbox") {
      return <span>{props.value ? "Unhecked" : "Check/ed"}</span>;
    } else {
      return null;
    }
  }

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
      {getCheckbox()}
    </div>
  );
}

module.exports = ControlledInputComponent;
