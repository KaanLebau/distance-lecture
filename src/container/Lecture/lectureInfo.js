import React from "react";
import styled from "@emotion/styled";
import Booked from "./Booked";
import Plan from "./Plan";

const LectureSide = styled.div`
  border-radius: 15px 50px;
  background-color: rgb(27, 59, 111);
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
`;
function lectureInfo(props) {
  return (
    <LectureSide>
      <Booked lecture={props.lecture} />
      <Plan module={props.lecture.capture} />
    </LectureSide>
  );
}

export default lectureInfo;
