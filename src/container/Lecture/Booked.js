import React from "react";
import styled from "@emotion/styled";

const Info = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  color: azure;
`;

const Data = styled.p`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  color: azure;
  text-align: center;
`;
function Booked(props) {
  return (
    <div>
      <Info>
        Date:
        <Data>{props.lecture.date}</Data>
      </Info>

      <Info>
        Time:
        <Data>{props.lecture.time}</Data>
      </Info>
      <Info>
        Room:
        <Data>{props.lecture.room}</Data>
      </Info>
    </div>
  );
}

export default Booked;
