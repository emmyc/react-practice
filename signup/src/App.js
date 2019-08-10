import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StepSelector from "./Components/StepSelector.react.js";
import StepComponent from "./Components/StepComponent.react.js";
import LabelComponent from "./Components/LabelComponent.react.js";
import FormSelector from "./Components/FormSelector.react.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="signUpScreen">
          <div className="onboardContainer">
            <StepSelector />
          </div>
          <FormSelector />
        </div>
      </div>
    );
  }
}

export default App;
