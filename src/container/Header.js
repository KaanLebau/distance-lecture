import React from "react";
import styled from "@emotion/styled";

const Header = (props) => {
  const Header = styled.div`
    background-color: rgb(159, 179, 194);
    justify-content: center;
    justify-items: ;
  `;
  const CompanyAndProduct = styled.div`
    display: flex;
    justify-content: center;
    height: 35px;
  `;
  const Company = styled.div`
    text-align: center;
  `;
  const ProductName = styled.div`
    margin: 0 auto;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: 30px;
  `;
  const WebAppName = styled.div`
    margin: 0 auto;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: larger;
  `;

  const LogoIcon = styled.div`
    width: 20%;
    height: 20%;
  `;

  return (
    <Header>
      <CompanyAndProduct>
        <LogoIcon>
          <img src="./icons/app-icon.png" alt="App icon" />
        </LogoIcon>
        <Company>
          <ProductName>SMART ROOM</ProductName>
          <WebAppName>DISTANCE LECTURE</WebAppName>
        </Company>
      </CompanyAndProduct>
      <div className="head-navigation">
        <div className="pos">
          <img className="icon" src="" alt="Content controller" />
          <h4 className="nav">Home</h4>
          <h4 className="nav">Course</h4>
          <h4 className="nav">Planer</h4>
        </div>
        <div className="log">
          <img src="" alt="Teacher" />
          <h4 className="nav">Teacher name</h4>
          <h4 className="nav">log out</h4>
        </div>
      </div>
    </Header>
  );
};

export default Header;
