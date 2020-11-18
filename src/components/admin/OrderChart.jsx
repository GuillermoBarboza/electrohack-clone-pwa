import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js";
import axios from "axios";

const OrderChart = () => {
  const token = useSelector((store) => store.user.token);
  const [orders, setOrders] = useState([]);
  const [timelapse, setTimelapse] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "https://back-end-swart.vercel.app/api/v1/orders/chart",
    })
      .then((res) => {
        setOrders(res.data);
        setTimelapse([...Array(30)].map((_, idx) => idx + 1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
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
  }, [orders, timelapse]);

  return <canvas id="myChart"></canvas>;
};

export default OrderChart;
