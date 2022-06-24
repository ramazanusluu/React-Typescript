import React from "react";
import "./App.css";
import Events from "./components/Events";
import Props from "./components/Props";

//Props
//Events
//Hooks (useState, useRef ...)

function App() {
  return (
    <div className="App">
      <h1>React - TypeScript</h1>
      <Props
        name={"Ramazan"}
        onSmthHappen={(name) => {
          console.log(name);
        }}
      />
      <hr />
      <Events />
    </div>
  );
}

export default App;
