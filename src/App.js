import React from "react";
import "./App.css";

import HeaderPresenter from "./presenter/HeaderPresenter";
import CoursePresenter from "./presenter/CoursePresenter";
import AirQualityPresenter from "./presenter/AirQualityPresenter";
import TempPresenter from "./presenter/TempPresenter";
import HumidityPresenter from "./presenter/HumidtyPresenter";

/*
function App() {
  return (
    <div className="App">
      <AirQualityInfo />
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
            <div class="course">
              <CoursePresenter />
            </div>
          </div>
          <div class="middle">
            <p>middle</p>
            <div class="projector">
              <h1>Projectors info</h1>
              <div class="allproj">
                <div class="aproj">
                  <h1>prj.1</h1>
                  <h2>ON/OFF</h2>
                </div>
                <div class="aproj">
                  <h1>prj.2</h1>
                  <h2>ON/OFF</h2>
                </div>
                <div class="aproj">
                  <h1>prj.2</h1>
                  <h2>ON/OFF</h2>
                </div>
              </div>

              <p>
                här kommer information om kursen som ska hämtas från database
                skaparen gör ett statisk till och börja med
              </p>
            </div>

            <div class="temp">
              <TempPresenter />
            </div>
            <div class="fukt">
              <HumidityPresenter />
            </div>
            <div class="luft">
              <AirQualityPresenter />
            </div>
          </div>
          <div class="right">
            <p>side right</p>
            <div class="lecture">
              <h1>Lecture info</h1>
              <h2>Content</h2>
              <h2>Time _:_</h2>
              <h2>Attend: _</h2>
              <h2>Absence: _</h2>
              <h2>Student info</h2>
              <p>
                här kommer information om aktiva ämnet som ska hämtas från
                database skaparen gör ett statisk till och börja med
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
