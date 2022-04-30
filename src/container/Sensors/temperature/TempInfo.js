import React, { useState } from "react";
import Info from "./InfoTemperature";
import LineChart from "./TempChart";
import { SensorData } from "./Datatemp";
import { registerables } from "chart.js";

const TempInfo = (props) => {
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
    <div className="AQI">
      <Info quality={["Temperature", "23", "C"]} />
      <div className="graph">
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </div>
  );
};

export default TempInfo;
