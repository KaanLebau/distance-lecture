import React from "react";
import styled from "@emotion/styled";
import HeadLocation from "./HeadLocation";
import Product from "./Product";

const Headers = styled.div`
  background-color: rgb(159, 179, 194);
  justify-content: center;
`;
const Header = (props) => {
  return (
    <Headers>
      <Product />
      <HeadLocation name={props.name} />
    </Headers>
  );
};

export default Header;
