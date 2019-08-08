// @flow
import React from "react";
import ControlledInputComponent from "./ControlledInputComponent.react.js";

function Form() {
  const [nameState: ?string, setNameState] = React.useState("");
  const [lastNameState: ?string, setLastNameState] = React.useState("");

  const submit = () => {
    console.log(nameState, lastNameState);
  };
  return (
    <div>
      <h1>Form</h1>
      <ControlledInputComponent
        type="text"
        name="Name"
        placeholder="What's your name"
        value={nameState}
        setValue={setNameState}
      />
      <ControlledInputComponent
        type="text"
        name="Last Name"
        placeholder="What's your last name"
        value={lastNameState}
        setValue={setLastNameState}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

module.exports = Form;
