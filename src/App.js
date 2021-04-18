import React, { useState } from "react";
import "./App.css";
import Button from "./Components/WebLayout/Button/button";
import CheckBox from "./Components/WebLayout/CheckBox/checkBox";
import Input from "./Components/WebLayout/Input/input"
import Radio from "./Components/WebLayout/Radio/radio";

function App() {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState("")
  const [gender, setGender]=useState("")
  const options = ["one", "Two", "Three"];
  const [opValue, setOpValue]=useState(options[0])
  const [file, setFile]=useState("")
  const [textArea, setTextArea]=useState("")
  const[fever, setFever]=useState(null)
  const[pain, setPain]=useState(null)

const handlePain = (e) => {
  if(e.target.checked){
    setPain(e.target.value)
  }else{
    setPain(null)
  }
}
const handleFever = (e) => {
  if(e.target.checked){
    setFever(e.target.value)
  } else{
    setFever(null)
  }
}
  const output={
    name:name,
    email:email,
    password: password,
    opValue:opValue,
    file:file,
    textArea:textArea,
    pain:pain,
    fever:fever,
    gender:gender,
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
         <CheckBox
          label="fever"
          value="fever"
          type="checkbox"
          onChecked={handleFever}
         
        />
          <CheckBox
          label="pain"
          value="pain"
          type="checkbox"
          onChecked={handlePain}
          
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
        <Input
          label="TeaxArea"
          value={textArea}
          type="textArea"
          changed={(e) => setTextArea(e.target.value)}
        />
        <Radio
          name="sayeem"
          label="female"
          value="female"
          type="radio"
          changed={(e)=>setGender(e.target.value)}
        />
         <Radio
          name="sayeem"
          label="male"
          value="male"
          type="radio"
          changed={(e)=>setGender(e.target.value)}
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
