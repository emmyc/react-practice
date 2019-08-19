// @flow
import React from "react";
import ScreenComponent from "./ScreenComponent.react.js";
import ButtonComponent from "./ButtonComponent.react.js";
import KeypadComponent from "./KeypadComponent.react.js";

function Calculator() {
  const [inputState: ?string, setInputState] = React.useState("");
  const [resultState: ?string, setResultState] = React.useState("0");
  const [prevKey: ?string, setPrevKey] = React.useState("");
  const maxLength = 9;
  // React.useEffect(() => {
  //   if (inputState != "") {
  //     setResultState(parseInt(inputState));
  //   }
  // }, [inputState]);

  function clear() {
    setInputState("");
    setResultState("0");
    setPrevKey("");
  }
  function calculate() {
    try {
      setResultState(eval(inputState) + "");
    } catch (e) {
      setResultState("error");
    }
  }

  function backspace() {
    setInputState(inputState.slice(0, -1));
  }

  function updateInputState(key: string) {
    if (parseInt(key) >= 0 && parseInt(key) <= 9) {
      if (prevKey === "=") {
        clear();
        setInputState(key);
      } else {
        setInputState(inputState.concat(key));
      }
    } else if (
      key === "+" ||
      key === "-" ||
      key === "/" ||
      key === "*" ||
      key === "%"
    ) {
      if (resultState === "error") {
        clear();
      } else if (prevKey === "=") {
        setInputState(resultState.concat(key));
        setResultState("0");
      } else if (prevKey === "") {
        setInputState("0".concat(key));
      } else {
        setInputState(inputState.concat(key));
      }
    } else if (key === "=") {
      calculate();
    } else if (key === "C") {
      clear();
    } else if (key === "<") {
      backspace();
    } else if (key === ".") {
      if (prevKey >= "0" && prevKey <= "9") {
        setInputState(inputState.concat(key));
      }
      if (prevKey === "=") {
        setInputState(resultState.concat("."));
        setResultState("0");
      }
    } else if (key === "+/-") {
      if (prevKey === "=") {
        setInputState(eval(parseInt(resultState) * -1) + "");
        setResultState("0");
      }
    }
    setPrevKey(key);
  }

  return (
    <div className="Calculator_root">
      <ScreenComponent
        input={inputState}
        setInput={setInputState}
        result={resultState}
        setResult={setResultState}
      />
      <KeypadComponent setInputState={updateInputState} />
    </div>
  );
}

module.exports = Calculator;
