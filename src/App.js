import React, { useState } from "react";
import "./App.css";
import Button from "./Components/WebLayout/Input/Button/button";
import Input from "./Components/WebLayout/Input/input"

function App() {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState("")
  const [gender, setGender]=useState("")
  const options = ["one", "Two", "Three"];
  const [opValue, setOpValue]=useState(options[0])
  const [file, setFile]=useState("")

  const output={
    name:name,
    email:email,
    password: password,
    gender:gender,
    opValue:opValue,
    file:file
  }
  console.log("output", output);
  return (
    <div className="container">
      <div className="formContainer">
        <Input
          label="name"
          value={name}
          type="text"
          changed={(e) => setName(e.target.value)}
        />
        <Input
          label="email"
          value={email}
          type="email"
          changed={(e) => setEmail(e.target.value)}
        />
         <Input
          label="password"
          value={password}
          type="password"
          changed={(e) => setPassword(e.target.value)}
        />
         <Input
          label="male"
          value="male"
          type="checkbox"
          changed={(e) => setGender(e.target.value)}
        />
         <Input
          label="female"
          value="female"
          type="checkbox"
          changed={(e) => setGender(e.target.value)}
        />
        <Input
          value={opValue}
          options={options}
          type="select"
          changed={(e) => setOpValue(e.target.value)}
        />
        <Input
          label="upload"
          value={file}
          type="file"
          changed={(e) => setFile(e.target.value)}
        />
        <div className="d-flex justify-content-between">
        <Button title="add" color="primary" />
        <Button title="delete" color="secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
