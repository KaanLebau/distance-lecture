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
function Plan(props) {
  return (
    <div>
      <Info>
        Capture:
        <Data>Module {props.module.module}</Data>
      </Info>
      <Info>
        Topic:
        <Data>{props.module.topic}</Data>
      </Info>
      <Info>
        Content:
        <Data> {props.module.content}</Data>
      </Info>
    </div>
  );
}

export default Plan;
