import React from "react";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";

const Category = () => {
  return (
    <div>
      <CarouselComp />
      <div className="container">
        <ProductsList />
      </div>
    </div>
  );
};

export default Category;
