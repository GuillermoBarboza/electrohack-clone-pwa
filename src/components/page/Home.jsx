import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";
import { getProducts, changeCarousel } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://back-end-swart.vercel.app/api/v1/products")
      .then((res) => {
        dispatch(getProducts(res.data));
      });
    dispatch(
      changeCarousel([
        "https://image.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg",
      ])
    );
  }, []);

  return (
    <div>
      <CarouselComp />
      <div className="container">
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
