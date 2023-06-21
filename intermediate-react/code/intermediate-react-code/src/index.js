import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateComponent from "./State";
import EffectComponent from './Effect';
import ContextComponent from './Context';



function App() {
  return (
    <div className="App">
      <StateComponent />
      <hr />
      <EffectComponent />
      <hr />
      <ContextComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

