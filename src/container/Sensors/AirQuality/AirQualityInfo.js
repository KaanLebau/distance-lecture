import React, { useState } from "react";
import Info from "./InfoQuality";
import LineChart from "./QualityChart";
import { SensorData } from "./Dataquality";

const AirQualityInfo = (props) => {
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
      <Info quality={["Air Quality", "25%", "ppm"]} />
      <div className="graph">
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </div>
  );
};

export default AirQualityInfo;
