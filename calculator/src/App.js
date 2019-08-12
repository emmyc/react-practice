import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Components/Calculator.react.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
