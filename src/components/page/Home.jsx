import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import globalUrl from "../../utils/url";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";
import { getProducts } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${globalUrl}/api/v1/products/featured`).then((res) => {
      dispatch(getProducts(res.data));
    });
  }, []);

  return (
    <div>
      <CarouselComp />
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 ">Featured Products</h2>
        </div>

        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
