import React from "react";
import TerminPeriod from "./TerminPeriod";
import Module from "./Module";
import styled from "@emotion/styled";

const Course = styled.div`
  border-radius: 15px 50px;
  background-color: rgb(27, 59, 111);
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
`;
const Info = styled.h3`
  border: 2px;
  background-color: rgb(27, 59, 111);
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: medium;
  margin: 2px;
  padding: 2px;
  color: rgb(180, 248, 248);
`;
function courseInfo(props) {
  return (
    <Course>
      <Info>{props.course.course_name}</Info>
      <Info>Course id: {props.course.course_id}</Info>
      <TerminPeriod
        termin={props.course.course_termin}
        period={props.course.course_period}
      />
      <Info>Registred Students: {props.course.course_registredStudents}</Info>
      <Module modules={props.course.course_modules} />
    </Course>
  );
}

export default courseInfo;
