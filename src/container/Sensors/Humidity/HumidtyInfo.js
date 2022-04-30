import React, { useState } from "react";
import Info from "./InfoHumidity";
import LineChart from "./HumidityChart";
import { SensorData } from "./DataHumidity";
import { registerables } from "chart.js";

const HumidityInfo = (props) => {
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
    <div className="AQI">
      <Info quality={["Humidity", "50%"]} />
      <div className="graph">
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </div>
  );
};

export default HumidityInfo;
