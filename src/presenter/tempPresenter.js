import React from "react";
import TempInfo from "../container/Sensors/temperature/TempInfo";
import styled from "@emotion/styled";

function tempPresenter(props) {
  const TempBody = styled.div`
    margin: 4px;
  `;
  return (
    <div>
      <TempInfo room={"Lecture room A"} />
    </div>
  );
}

export default tempPresenter;
