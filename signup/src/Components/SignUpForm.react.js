// @flow
import React from "react";
import ControlledInputComponent from "./ControlledInputComponent.react.js";
import "./SignUpForm.css";

function SignUpForm() {
  const [nameState: ?string, setNameState] = React.useState("");
  const [passwordState: ?string, setPasswordState] = React.useState("");
  const [emailState: ?string, setEmailState] = React.useState("");
  const [termsState: ?unchecked, setTermsState] = React.useState("unchecked");

  const submit = () => {
    console.log(nameState, passwordState);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <ControlledInputComponent
        type="text"
        name="Full Name"
        placeholder="Enter your full name"
        value={nameState}
        setValue={setNameState}
      />
      <ControlledInputComponent
        type="password"
        name="Password"
        placeholder="At least 6 digits"
        value={passwordState}
        setValue={setPasswordState}
      />
      <ControlledInputComponent
        type="email"
        name="Email"
        placeholder="emmy@gmail.com"
        value={emailState}
        setValue={setEmailState}
      />

      <ControlledInputComponent
        type="checkbox"
        name=""
        placeholder=""
        value={termsState}
        setValue={setTermsState}
      />
      <div className="SignUpForm_options">
        <button className="SignUpForm_submit" onClick={submit}>
          Sign Up
        </button>
        <button className="SignUpForm_existingMember">
          <u>I already have an account</u>
        </button>
      </div>
    </div>
  );
}

module.exports = SignUpForm;
