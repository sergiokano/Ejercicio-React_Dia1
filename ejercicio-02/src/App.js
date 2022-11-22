import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <h1>Ejercicio 2</h1>
      <Person name="Mónica" lastname="Cano" age= {32}/>
      <Person name="Abrahan" lastname="Berenguer" age= {38}/>
      <Person name="Carlos" lastname="Donderis" age= {25}/>
    </div>
  );
}

export default App;
