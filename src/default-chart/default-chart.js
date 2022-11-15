import React, { useEffect } from "react";
// import $ from "jquery";
import "./default-chart.css";
// require("orgchart");
import OrgChart from "./OrgChart";

const DefaultChart = () => {
  const ds = {
    id: "n1",
    name: "Lao Lao",
    title: "general manager",
    children: [
      { id: "n2", name: "Bo Miao", title: "department manager" },
      {
        id: "n3",
        name: "Su Miao",
        title: "department manager",
        children: [
          { id: "n4", name: "Tie Hua", title: "senior engineer" },
          {
            id: "n5",
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { id: "n6", name: "Dan Dan", title: "engineer" },
              { id: "n7", name: "Xiang Xiang", title: "engineer" }
            ]
          },
          { id: "n8", name: "Pang Pang", title: "senior engineer" }
        ]
      },
      { id: "n9", name: "Hong Miao", title: "department manager" },
      {
        id: "n10",
        name: "Chun Miao",
        title: "department manager",
        children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
      }
    ]
  };
  useEffect(() => {
    new OrgChart({
      chartContainer: "#chart-container",
      data: ds,
      nodeContent: "title",
      // direction: "l2r",
      pan: true,
      nodeTemplate: (data) =>
        `<div class="title"><span>${data.id}</span></div><div class="content"><span>${data.id}</span></div>`
    });
  });
  return <div id="chart-container" />;
};

export default DefaultChart;