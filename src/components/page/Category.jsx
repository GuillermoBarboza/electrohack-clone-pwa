import React from "react";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";

const Category = () => {
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
