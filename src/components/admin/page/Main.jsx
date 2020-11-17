import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../SearchBox";
import OrderChart from "../OrderChart";

const Main = () => {
  const token = useSelector((store) => store.user.token);
  const [orders, setOrders] = useState(null);
  const [search, setSearch] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "http://localhost:8000/api/v1/orders",
    }).then((res) => {
      setOrders(res.data);
    });
  }, [search, order]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="m-5">
            <div className="d-flex justify-content-between">
              {" "}
              <SearchBox setSearch={setSearch} />
            </div>

            <table className="table mt-3">
              <thead>
                <tr>
                  <th scope="col">Buyer name</th>
                  <th scope="col">Amount of items</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => {
                    return (
                      <tr>
                        <td>{order.buyer}</td>
                        <td>{order.products.length}</td>
                        <td>{order.state}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="chart-wrapper">
            <h5>Monthly Sales</h5>
            <OrderChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
