import React from "react";
import ActiveteLecturePresenter from "../presenter/ActiveteLecturePresenter";

function SelectLecture(props) {
  return (
    <div className="home">
      <ActiveteLecturePresenter courses={props.model.getCourses()} />
    </div>
  );
}

export default SelectLecture;
