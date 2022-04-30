import React from "react";
import { Course } from "../model/Course";
import CourseInfo from "../container/Course/CourseInfo";

function coursePresenter(props) {
  return (
    <div>
      <CourseInfo course={Course} />
    </div>
  );
}

export default coursePresenter;
