import React from "react";
import "./App.css";
import { BasicForm, MultifieldsForm } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Hands on to React JSON Form Builder!</h1>
      <BasicForm />
      <MultifieldsForm />
    </div>
  );
}

export default App;
