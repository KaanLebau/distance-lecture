import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Home from "./pages/Home";
import ActiveLecture from "./pages/ActiveLecture";
import PlanLecture from "./pages/PlanLecture";
import HeaderPresenter from "./presenter/HeaderPresenter";
/*
function App() {
  return (
    <div className="App">
      <ModelDB />
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <div className="app">
      <ActiveLecture />
    </div>
  );
}

export default App;
