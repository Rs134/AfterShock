import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Graph({ data }) {
  // Dynamically adjust chart properties based on screen width
  const screenWidth = window.innerWidth;
  let chartHeight = 650;
  let barSize = 90;
  let fontSize = 25;
  let margin = { top: 30, right: 50, left: 100, bottom: 60 };

  if (screenWidth < 1400) {
    chartHeight = 550;
    barSize = 70;
    fontSize = 22;
    margin = { top: 30, right: 30, left: 80, bottom: 50 };
  }
  if (screenWidth < 992) {
    chartHeight = 450;
    barSize = 50;
    fontSize = 18;
    margin = { top: 20, right: 25, left: 60, bottom: 40 };
  }
  if (screenWidth < 600) {
    chartHeight = 350;
    barSize = 35;
    fontSize = 15;
    margin = { top: 10, right: 20, left: 40, bottom: 30 };
  }

  return (
    <div
      className="graph-wrapper"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h2 className="graph-heading">Car Accidents Every Year</h2>

      <div
        className="graph-inner"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart data={data} margin={margin}>
            <XAxis
              dataKey="year"
              tick={{ fill: "rgb(0, 94, 255)", fontSize }}
            />
            <YAxis
              tick={{ fill: "rgb(0, 94, 255)", fontSize }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(1, 1, 39)",
                boxShadow: "none",
                color: "white",
              }}
              cursor={{ fill: "none" }}
              labelStyle={{ color: "rgb(107, 90, 255)" }}
              itemStyle={{ color: "rgb(0, 94, 255)" }}
            />
            <Bar
              dataKey="totalAccidents"
              fill="rgb(107, 90, 255)"
              stroke="black"
              barSize={barSize}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
