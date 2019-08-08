import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form.react.js";
import InputComponent from "./Components/InputComponent.react.js";
import LabelComponent from "./Components/LabelComponent.react.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LabelComponent label="Gloob" />

        {["Emmy", "Rishabh"].map(elem => {
          console.log(elem);
          return <LabelComponent label={elem} />;
        })}

        {["Emmy", "Rishabh"].map(elem => (
          <LabelComponent label={elem} />
        ))}

        <Form />
      </div>
    );
  }
}

export default App;
