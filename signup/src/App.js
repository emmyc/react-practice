import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LabelComponent from "./Components/LabelComponent.react.js";
import FormSelector from "./Components/FormSelector.react.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="signUpScreen">
          <div className="onboardContainer">
            <LabelComponent label="Gloob" />

            {["Emmy", "Rishabh"].map(elem => {
              console.log(elem);
              return <LabelComponent label={elem} />;
            })}

            {["Emmy", "Rishabh"].map(elem => (
              <LabelComponent label={elem} />
            ))}
          </div>

          <FormSelector />
        </div>
      </div>
    );
  }
}

export default App;
