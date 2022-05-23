import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CourseModel from "./model/CourseModel";
import HeaderPresenter from "./presenter/HeaderPresenter";
import ActiveLecture from "./pages/ActiveLecture";
import SelectLecture from "./pages/SelectLecture";
import PlanLecture from "./pages/PlanLecture";
import Home from "./pages/Home";
import RoomModel from "./model/RoomModel";

function App() {
  const courseModel = new CourseModel();
  const roomModel = new RoomModel();
  return (
    <div className="App">
      <Router>
        <HeaderPresenter />
        <Routes>
          <Route path="/" exact element={<Home model={courseModel} />} />
          <Route
            path="activelecture"
            element={
              <ActiveLecture model={courseModel} roomModel={roomModel} />
            }
          />
          <Route
            path="selectlecture"
            element={<SelectLecture model={courseModel} />}
          />
          <Route
            path="lectureplaner"
            element={<PlanLecture model={courseModel} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*

<Router>
        <HeaderPresenter />
        <Routes>
          <Route path="/" exact element={<Home model={courseModel} />} />
          <Route path="activelecture" element={<ActiveLecture />} />
          <Route
            path="selectlecture"
            element={<SelectLecture model={courseModel} />}
          />
          <Route path="lectureplaner" element={<PlanLecture />} />
        </Routes>
      </Router>
    


*/
