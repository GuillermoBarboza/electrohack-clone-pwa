import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/carousel1.jpeg";
import img2 from "../img/carousel2.jpg";
import img3 from "../img/carousel3.jpeg";
import img4 from "../img/carousel4.jpg";

const CarouselComp = () => {
	return (
		<Carousel className="carousel-margin">
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${img2})`,
					}}
					alt="First slide"
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${img3})`,
					}}
					alt="Second slide"
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${img1})`,
					}}
					alt="Third slide"
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="carousel-img"
					style={{
						backgroundImage: `url(${img4})`,
					}}
					alt="Fourth slide"
				></div>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselComp;
