import React, { useEffect } from "react";
import Chart from "chart.js";

const OrderChart = ({ orders }) => {
  useEffect(() => {
    if (orders) {
      const ctx = document.getElementById("myChart");
      const chart = new Chart(ctx, {
        type: "line",

        data: {
          labels: [...Array(30)].map((_, idx) => idx + 1),
          datasets: [
            {
              label: "Order sales report.",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: orders.map((order) => order.total),
            },
          ],
        },

        options: {},
      });
    }
  }, [orders]);

  return <canvas id="myChart"></canvas>;
};

export default OrderChart;
