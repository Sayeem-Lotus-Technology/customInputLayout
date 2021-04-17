import React, { useState } from "react";
import "./App.css";
import Button from "./Components/WebLayout/Input/Button/button";
import Input from "./Components/WebLayout/Input/input";

function App() {
  const [value, setValue] = useState("");
  const options = ["one", "Two", "Three"];
  console.log("valueeee", value);
  return (
    <div className="container">
      <div className="form">
        <Input
          title=""
          value={value}
          setValue={setValue}
          type="text"
          id="sayeem"
        />
        <Input
          title="tshirt"
          value={value}
          setValue={setValue}
          type="radio"
          id="sayeem"
        />
        <Input
          title="show"
          value={value}
          setValue={setValue}
          type="checkbox"
          id="sayeem"
        />
        <Input
          title=""
          value={value}
          setValue={setValue}
          type="checkbox"
          id="sayeem"
        />
        <Input
          title=""
          value={value}
          setValue={setValue}
          options={options}
          type="select"
          id="sayeem"
        />
        <Button title="add" color="primary" />
        <Button title="delete" color="secondary" />
      </div>
    </div>
  );
}

export default App;
