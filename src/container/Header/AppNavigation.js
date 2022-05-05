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
  const Nav = styled.h4`
    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      rgb(167, 17, 69) 90%,
      rgb(167, 17, 69) 100%
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;

    transition: 300ms;

    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    margin-inline: 20px;
    &:hover {
      background-size: 100% 100%;
      background-position-x: left;
    }
  `;

  return (
    <Navigation>
      <Nav>Home</Nav>
      <Nav>Lecture</Nav>
      <Nav>Planer</Nav>
    </Navigation>
  );
};

export default AppNavigation;
