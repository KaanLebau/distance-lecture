import React, { useState } from "react";
import Info from "./InfoTemperature";
import LineChart from "./TempChart";
import { SensorData } from "./Datatemp";
import styled from "@emotion/styled";

const TempInfo = (props) => {
  const Box = styled.div`
    border-radius: 70px 30px 70px 30px;
    display: flex;
    background-color: #86003c;
  `;

  const [userData, setUserData] = useState({
    labels: SensorData.map((data) => data.time),
    datasets: [
      {
        label: SensorData[0].sensor,
        data: SensorData.map((data) => data.mesurement),
        borderColor: " rgb(180, 248, 248)",
        backgroundColor: " rgb(180, 248, 248)",
      },
    ],
  });
  const options = {};
  return (
    <Box>
      <Info quality={["Temperature", "23", "C"]} />
      <div>
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </Box>
  );
};

export default TempInfo;
