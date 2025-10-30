import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Graph({ data }) {
  return (
    <div style={{ width: "95%" }}> 
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
              backgroundColor: 'rgb(1, 1, 39)', 
              boxShadow: 'none', 
              color: 'white'
            }}
            cursor={{ fill: 'none' }}
            labelStyle={{ color: 'rgb(107, 90, 255)' }}
            itemStyle={{ color: 'rgb(0, 94, 255)' }}
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
