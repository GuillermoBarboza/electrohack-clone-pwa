import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./Navbar";
import ProductsList from "./ProductsList";
import { getProducts } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products").then((res) => {
      dispatch(getProducts(res.data));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container bg-light">
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
