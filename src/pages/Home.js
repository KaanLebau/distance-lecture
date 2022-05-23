import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/";

const StyledLink = styled(Link)`
  border: 1px solid black;
  border-radius: 15px;
  height: 200px;
  width: 300px;
  margin: 50px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: rgb(27, 59, 111);
    color: azure;
    border: 1px solid azure;
  }
`;

const Info = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: 50px;
  align-content: center;
`;

const Box = styled.div`
  background-color: rgb(159, 179, 194);
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Home() {
  return (
    <Box>
      <StyledLink to={"selectlecture"}>
        <Info>Activate lecture</Info>
      </StyledLink>
      <StyledLink to={"lectureplaner"}>
        <Info>Lecture planer</Info>
      </StyledLink>
    </Box>
  );
}

export default Home;
