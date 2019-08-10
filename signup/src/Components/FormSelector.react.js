// @flow
import React from "react";
import SignUpForm from "./SignUpForm.react.js";
import SignInForm from "./SignInForm.react.js";
import "./FormSelector.css";

function FormSelector() {
  const [selectState: "signup" | "signin", setSelectState] = React.useState(
    "signup"
  );

  // function selectSignIn() {
  //   setSelectState("signin");
  // }
  // function selectSignUp() {
  //   setSelectState("signup");
  // }

  const setSelectStateTo = (value: string) => {
    setSelectState(value);
  };

  return (
    <div className="FormSelector_root">
      <div className="FormSelector_options">
        <button
          onClick={setSelectStateTo.bind(this, "signin")}
          className={`button ${selectState === "signin" ? "active" : ""}`}
        >
          Sign In
        </button>
        <p>or</p>
        <button
          onClick={() => setSelectStateTo("signup")}
          className={`button ${selectState === "signup" ? "active" : ""}`}
        >
          Sign Up
        </button>
      </div>

      {selectState === "signin" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

module.exports = FormSelector;
