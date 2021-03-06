import React, { useState } from "react";
import AirQualityInfo from "../container/Sensors/AirQuality/AirQualityInfo";
import styled from "@emotion/styled";

function airQualityPresenter(props) {
  const QualityBody = styled.div`
    margin: 4px;
  `;

  return (
    <QualityBody>
      <AirQualityInfo airQs={props.airQs} />
    </QualityBody>
  );
}

export default airQualityPresenter;
