import React from "react";
import styled from "@emotion/styled";

const Logo = () => {
  const Icon = styled.img`
    height: 150%;
    margin-right: 20px;
  `;

  return <Icon src="./icons/app-icon.png" alt="App icon" />;
};

export default Logo;
