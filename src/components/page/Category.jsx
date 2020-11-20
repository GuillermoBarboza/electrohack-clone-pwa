import React from "react";
import ProductsList from "../ProductsList";
import CarouselComp from "../CarouselComp";

const Category = () => {
	return (
		<div>
			<div className="d-none d-md-block overlay">
				<h1 className="d-none d-md-block carousel-heading">Home Appliances</h1>
				<h4 className="d-none d-md-block carousel-subheading">
					Your perfect house is here
				</h4>
			</div>
			<CarouselComp />
			<div className="container pt-5">
				<ProductsList />
			</div>
		</div>
	);
};

export default Category;
