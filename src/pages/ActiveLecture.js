import React from "react";
import CoursePresenter from "../presenter/CoursePresenter";
import AirQualityPresenter from "../presenter/AirQualityPresenter";
import TempPresenter from "../presenter/TempPresenter";
import HumidityPresenter from "../presenter/HumidtyPresenter";
import LecturePresenter from "../presenter/LecturePresenter";
import ProjectorPresenter from "../presenter/ProjectorPresenter";

function ActiveLecture(props) {
  return (
    <div class="row">
      <div class="left">
        <div className="course">
          <CoursePresenter course={props.model.getTheCourse(0)} />
        </div>
      </div>
      <div class="middle">
        <ProjectorPresenter room={props.roomModel.setRoom(0)} />
      </div>
      <div class="right">
        <LecturePresenter lecture={props.model.getActiveLecture()} />
      </div>
    </div>
  );
}

export default ActiveLecture;
