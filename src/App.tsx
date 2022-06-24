import React from "react";
import "./App.css";
import Hello from "./components/Hello";

//Props
//Events
//Hooks (useState, useRef ...)

function App() {
  return (
    <div className="App">
      <h1>React - TypeScript</h1>
      <Hello
        name={"Ramazan"}
        onSmthHappen={(name) => {
          console.log(name);
        }}
      />
    </div>
  );
}

export default App;
