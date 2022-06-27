import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const sumValues = dataPointValues.reduce((total, item) => {
    return total + item;
  }, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={sumValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
