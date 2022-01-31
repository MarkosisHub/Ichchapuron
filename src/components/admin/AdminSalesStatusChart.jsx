import React from "react";
import { Chart } from "primereact/chart";
import './AdminSalesStatusChart.css'

const AdminSalesStatusChart = () => {
  const basicData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Purchase",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Sell",
        backgroundColor: "#FFA726",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const getLightTheme = () => {
    let horizontalOptions = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
      horizontalOptions,
    };
  };

  const { horizontalOptions } = getLightTheme();

  return (
    <div className="adminSalesStatusChartSection">
      <div className="adminSalesStatusChartWrapper">
        <div className="adminSalesStatusChartDetails">
          <Chart type="bar" data={basicData} options={horizontalOptions} />
        </div>
      </div>
    </div>
  );
};

export default AdminSalesStatusChart;
