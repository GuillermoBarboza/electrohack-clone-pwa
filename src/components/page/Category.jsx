import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";
import { getProducts } from "../../redux/actions";

const Category = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/categories/${match.params.category}`)
      .then((res) => {
        dispatch(getProducts(res.data));
      });
  }, []);

  return (
    <div className="bg-light">
      <CarouselComp />
      <div className="container bg-light">
        <ProductsList />
      </div>
    </div>
  );
};

export default Category;
