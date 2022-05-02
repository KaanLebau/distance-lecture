import React from "react";
import { Course } from "../model/Course";
import CourseInfo from "../container/Course/CourseInfo";
import styled from "@emotion/styled";

function coursePresenter(props) {
  return <CourseInfo course={Course} />;
}

export default coursePresenter;
