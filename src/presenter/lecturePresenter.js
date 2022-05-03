import React from "react";
import LectureInfo from "../container/Lecture/LectureInfo";
import { Course } from "../model/Course";
import { Lecture } from "../model/Lecture";

function LecturePresenter(props) {
  return <LectureInfo course={Course} lecture={Lecture} />;
}

export default LecturePresenter;
