// @flow
import React from "react";

type Props = {
  type: "text" | "password",
  name: string,
  placeholder: string
};

function InputComponent(props: Props) {
  const [inputState: ?string, setInputState] = React.useState("Emmy");

  function poop() {
    console.log("Poop");
    return <div>Poop</div>;
  }

  // const onChange = function(e) {};
  const onChange = e => {
    console.log(e);
    console.log(e.target.value);
    setInputState(e.target.value);
  };

  // const setValue = function() {}
  const setValue = () => {
    if (inputState === "Emmy") {
      setInputState("Cutie");
    } else {
      setInputState("Emmy");
    }
  };

  return (
    <div>
      <input
        type={props.type}
        onChange={onChange}
        // onChange is also default input property in HTML
        placeholder={props.placeholder}
        value={inputState}
      />

      <button onClick={setValue}>Hello</button>

      {poop()}
    </div>
  );
}

module.exports = InputComponent;
