import React from "react";
import styled from "@emotion/styled";
//import {  } from "react-router-dom";

const Navigation = styled.div`
  width: 30%;
  justify-content: right;
  display: flex;
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
const UserNavigation = (props) => {
  return (
    <Navigation>
      <Nav>{props.name}</Nav>
      <Nav>log out</Nav>
    </Navigation>
  );
};

export default UserNavigation;
