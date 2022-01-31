import React from "react";
import { Chart } from "primereact/chart";

const AdminShoppingStatusChart = () => {
  const basicData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Online Shopping",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.4,
      },
      {
        label: "Offline Shopping",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "#FFA726",
        tension: 0.4,
      },
    ],
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div className="adminShoppingStatusChartSection">
      <div className="adminShoppingStatusChartWrapper">
        <div className="adminShoppingStatusChartDetails">
          <Chart type="line" data={basicData} options={basicOptions} />
        </div>
      </div>
    </div>
  );
};

export default AdminShoppingStatusChart;
