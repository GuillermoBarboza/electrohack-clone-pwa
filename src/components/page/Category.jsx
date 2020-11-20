import React from "react";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";

const Category = () => {
	return (
		<div>
			<div className="overlay">
				<h1 className="carousel-heading">Home Appliances</h1>
				<h4 className="carousel-subheading">Your perfect house is here</h4>
			</div>
			<CarouselComp />
			<div className="container pt-5">
				<ProductsList />
			</div>
		</div>
	);
};

export default Category;
