import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Graph({ data }) {
  return (
    <div style={{ width: "85%" }}> 
      <ResponsiveContainer width="100%" height={650}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 50, left: 100, bottom: 60 }} // increased bottom margin
        >
          <XAxis
            dataKey="year"
            tick={{ fill: "rgb(0, 94, 255)", fontSize: 25 }}
            label={{
              value: "Year",
              position: "bottom", 
              fill: "white",
              fontSize: 30,
              dy: 10, 
            }}
          />
          <YAxis
            tick={{ fill: "rgb(0, 94, 255)", fontSize: 25 }}
            label={{
              value: "Total Accidents",
              angle: -90,
              position: "insideLeft",
              fill: "white",
              fontSize: 30,
              dx: -80 
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020024",
              borderRadius: "8px",
              color: "white",
              fontSize: "18px"
            }}
          />
          <Bar
            dataKey="totalAccidents"
            fill="rgb(107, 90, 255)"
            stroke="black"
            barSize={90}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
