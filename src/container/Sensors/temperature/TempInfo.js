import Current from "./currentTemperature";
import LineChart from "./TempChart";
import styled from "@emotion/styled";
import { SensorData } from "./Datatemp";
import React, { useState, useEffect } from "react";

const Box = styled.div`
  border-radius: 70px 30px 70px 30px;
  display: flex;
  background-color: #86003c;
`;
const TempInfo = (props) => {
  const [userData, setUserData] = useState({
    labels: SensorData.map((data) => data.time),
    datasets: [
      {
        label: SensorData[0].sensor,
        data: SensorData.map((data) => data.mesurement),
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgb(255,255,255)",
      },
    ],
  });
  const options = {};

  return (
    <Box>
      <Current theTemp={SensorData[SensorData.length - 1]} />
      <div>
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </Box>
  );
};

export default TempInfo;

/**
 
 theTemp={listOfTemps[listOfTemps.length - 1]}

<div>
        <LineChart chartData={data} chartOptions={options} />
      </div>
 */
