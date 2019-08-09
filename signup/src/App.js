import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./Components/SignUpForm.react.js";
import InputComponent from "./Components/InputComponent.react.js";
import LabelComponent from "./Components/LabelComponent.react.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="onboardContainer">
          <LabelComponent label="Gloob" />
          {["Emmy", "Rishabh"].map(elem => {
            console.log(elem);
            return <LabelComponent label={elem} />;
          })}

          {["Emmy", "Rishabh"].map(elem => (
            <LabelComponent label={elem} />
          ))}
        </div>

        <div className="formContainer">
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default App;
