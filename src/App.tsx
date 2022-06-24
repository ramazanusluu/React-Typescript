import React from "react";
import "./App.css";
import Events from "./components/Events";
import Hooks from "./components/Hooks";
import Props from "./components/Props";

//Props
//Events
//Hooks (useState, useRef ...)

function App() {
  return (
    <div className="App">
      <h1>React - TypeScript</h1>
      <h2>Props</h2>
      <Props
        name={"Ramazan"}
        onSmthHappen={(name) => {
          console.log(name);
        }}
      />
      <hr />
      <h2>Events</h2>
      <Events
        name={"Ramazan"}
        onSmthHappen={(name) => {
          console.log(name);
        }}
      />
      <hr />
      <h2>Hooks</h2>
      <Hooks
        name={"Ramazan"}
        onSmthHappen={(name) => {
          console.log(name);
        }}
      />
    </div>
  );
}

export default App;
