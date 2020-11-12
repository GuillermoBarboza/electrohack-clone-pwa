import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

const CarouselComp = () => {
	const images = useSelector((state) => state.carousel);

	return (
		<Carousel>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${images[0]})`,
					}}
					alt="First slide"
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${images[1]})`,
					}}
					alt="Second slide"
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${images[2]})`,
					}}
					alt="Third slide"
				></div>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselComp;
