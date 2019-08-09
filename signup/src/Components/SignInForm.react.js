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
      <ControlledInputComponent
        type="email"
        name="Email"
        placeholder="Email"
        value={emailState}
        setValue={setEmailState}
      />
      <ControlledInputComponent
        type="password"
        name="Password"
        placeholder="Password"
        value={passwordState}
        setValue={setPasswordState}
      />

      <button onClick={submit}>Sign In</button>
    </div>
  );
}

module.exports = SignInForm;
