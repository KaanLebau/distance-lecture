import React from "react";

import CourseInfo from "../container/Course/CourseInfo";

function coursePresenter(props) {
  return <CourseInfo course={props.course} />;
}

export default coursePresenter;
