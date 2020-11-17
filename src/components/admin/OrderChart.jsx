import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import axios from "axios";

const OrderChart = () => {
  const [orders, setOrders] = useState([]);
  const [timelapse, setTimelapse] = useState([]);
  console.log();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/orders",
    })
      .then((res) => {
        setOrders(res.data);
        console.log(res.data)
        setTimelapse([...Array(30)].map((_, idx) => idx + 1))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    const ctx = document.getElementById("myChart");
    const chart = new Chart(ctx, {
      type: "line",

      data: {
        labels: timelapse,
        datasets: [
          {
            label: "Order sales report.",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: orders,
          },
        ],
      },

      options: {},
    });
  }, [orders, timelapse])

  return <canvas id="myChart"></canvas>;
};

export default OrderChart;
