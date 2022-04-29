import React from "react";
import styled from "@emotion/styled";

const UserNavigation = (props) => {
  const Navigation = styled.div`
    width: 30%;
    justify-content: right;
    display: flex;
  `;
  return (
    <Navigation>
      <h4 className="nav">{props.name}</h4>
      <h4 className="nav">log out</h4>
    </Navigation>
  );
};

export default UserNavigation;
