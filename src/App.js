import React from "react";
import "./App.css";

import HeaderPresenter from "./presenter/HeaderPresenter";
import CoursePresenter from "./presenter/CoursePresenter";
import AirQualityPresenter from "./presenter/AirQualityPresenter";
import TempPresenter from "./presenter/TempPresenter";
import HumidityPresenter from "./presenter/HumidtyPresenter";
import LecturePresenter from "./presenter/LecturePresenter";
import ProjectorPresenter from "./presenter/ProjectorPresenter";

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
    <div className="App">
      <header className="App-header">
        <HeaderPresenter name={"Kaan Özsan"} />

        <div class="row">
          <div class="left">
            <div className="course">
              <CoursePresenter />
            </div>
          </div>
          <div class="middle">
            <ProjectorPresenter />
            <TempPresenter />
            <HumidityPresenter />
            <AirQualityPresenter />
          </div>
          <div class="right">
            <LecturePresenter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
