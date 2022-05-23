import React from "react";
import styled from "@emotion/styled";

const Box = styled.div`
  background-color: rgb(159, 179, 194);
  height: 850px;
`;
const Lecture = styled.div`
  border: 2px solid azure;
  background-color: rgb(27, 59, 111);
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const LecInfo = styled.div`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  color: azure;
  display: flex;
  justify-content: space-around;
`;
const Info = styled.h2``;

function LectionSelector(props) {
  return (
    <Box>
      {props.lectures.map((theLecture) => {
        <Lecture>
          <LecInfo>
            <Info>Date : {theLecture.date}</Info>
            <Info>Time : {theLecture.time}</Info>
            <Info>Room : {theLecture.room}</Info>
          </LecInfo>
          <LecInfo>
            <Info>Module : module {theLecture.capture.module}</Info>
            <Info>Content : {theLecture.content}</Info>
          </LecInfo>
          <div className="klickbox">
            <button className="klick">select lecture</button>
          </div>
        </Lecture>;
      })}
    </Box>
  );
}

export default LectionSelector;

/*

 <Lecture>
            <LecInfo>
              <Info>Date : {theLecture.date}</Info>
              <Info>Time : {theLecture.time}</Info>
              <Info>Room : {theLecture.room}</Info>
            </LecInfo>

            <LecInfo>
              <Info>Module : module {theLecture.capture.module}</Info>
              <Info>Content : {theLecture.content}</Info>
            </LecInfo>
            <div className="klickbox">
              <button className="klick">select lecture</button>
            </div>
          </Lecture>





{props.lecture.map((lecture) => {
        return (
          <article key={lecture.id}>
            <div>
              <h3> Date {lecture.date}</h3>
              <h3> Time {lecture.time}</h3>
              <h3> Room {lecture.room}</h3>
            </div>
            <div>
              <h3>Module {lecture.capture.module}</h3>
              <h3>{lecture.content}</h3>
            </div>
          </article>
        );
      })}












*/
