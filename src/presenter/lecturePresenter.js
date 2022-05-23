import React from "react";
import LectureInfo from "../container/Lecture/LectureInfo";
import { Course } from "../model/data/ModelData";

function LecturePresenter(props) {
  return <LectureInfo lecture={props.lecture} />;
}

export default LecturePresenter;
