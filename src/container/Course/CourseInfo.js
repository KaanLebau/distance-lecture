import React from "react";
import TerminPeriod from "./TerminPeriod";
import Module from "./Module";
import styled from "@emotion/styled";

function courseInfo(props) {
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

  return (
    <div className="course">
      <Info>{props.course[0].name}</Info>
      <Info>Course id: {props.course[0].id}</Info>
      <TerminPeriod
        termin={props.course[0].termin}
        period={props.course[0].period}
      />
      <Info>Registred Students: {props.course[0].registredStudents}</Info>
      <Module modules={props.course[0].modules} />
    </div>
  );
}

export default courseInfo;
