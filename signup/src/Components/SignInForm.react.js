// @flow
import React from "react";
import ControlledInputComponent from "./ControlledInputComponent.react.js";

function SignInForm() {
  const [nameState: ?string, setNameState] = React.useState("");
  const [passwordState: ?string, setPasswordState] = React.useState("");
  const [emailState: ?string, setEmailState] = React.useState("");
  const submit = () => {
    console.log(nameState, passwordState);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <ControlledInputComponent
        type="email"
        name="Email"
        placeholder="emmy@gmail.com"
        value={emailState}
        setValue={setEmailState}
      />
      <ControlledInputComponent
        type="password"
        name="Password"
        placeholder="At least 6 digits"
        value={passwordState}
        setValue={setPasswordState}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

module.exports = SignInForm;
