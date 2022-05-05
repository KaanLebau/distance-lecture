import React, { useState } from "react";
import Info from "./InfoHumidity";
import LineChart from "./HumidityChart";
import { SensorData } from "./DataHumidity";
import styled from "@emotion/styled";

const HumidityInfo = (props) => {
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
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgb(255,255,255)",
      },
    ],
  });
  const options = {};
  return (
    <Box>
      <Info quality={["Humidity", "50%"]} />
      <div>
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </Box>
  );
};

export default HumidityInfo;
