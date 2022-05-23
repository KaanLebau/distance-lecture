import React from "react";
import styled from "@emotion/styled";
import AppNavigation from "./AppNavigation";
import UserNavigation from "./UserNavigation";

const Navigation = styled.div`
  display: flex;
`;
const HeadLocation = (props) => {
  return (
    <Navigation>
      <AppNavigation />
      <UserNavigation name={props.name} />
    </Navigation>
  );
};

export default HeadLocation;
