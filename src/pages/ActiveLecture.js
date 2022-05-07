import React from "react";
import CoursePresenter from "../presenter/CoursePresenter";
import AirQualityPresenter from "../presenter/AirQualityPresenter";
import TempPresenter from "../presenter/TempPresenter";
import HumidityPresenter from "../presenter/HumidtyPresenter";
import LecturePresenter from "../presenter/LecturePresenter";
import ProjectorPresenter from "../presenter/ProjectorPresenter";

function ActiveLecture() {
  return (
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
  );
}

export default ActiveLecture;
