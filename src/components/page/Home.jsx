import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import globalUrl from "../../utils/url";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";
import HomeModal from "../HomeModal";
import { getProducts } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    axios.get(`${globalUrl}/api/v1/products/featured`).then((res) => {
      dispatch(getProducts(res.data));
    });
  }, []);

  return (
    <div>
      <div className="d-none d-md-block  overlay">
        <h1 className="d-none d-md-block carousel-heading">Home Appliances</h1>
        <h4 className="d-none d-md-block carousel-subheading">
          Your perfect house is here
        </h4>
      </div>
      <CarouselComp />
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4">Featured Products</h2>
        </div>

        <ProductsList />
      </div>
      
    </div>
  );
};

export default Home;
