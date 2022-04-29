import React from "react";
import styled from "@emotion/styled";

const AppNavigation = () => {
  const Navigation = styled.div`
    width: 70%;
    justify-content: left;
    display: flex;
    margin: 0px;
    padding: 0px;
  `;
  return (
    <Navigation>
      <h4 className="nav">Home</h4>
      <h4 className="nav">Lecture</h4>
      <h4 className="nav">Planer</h4>
    </Navigation>
  );
};

export default AppNavigation;
