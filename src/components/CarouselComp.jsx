import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

const CarouselComp = () => {
  const images = useSelector((state) => state.carousel);

  return (
    <Carousel>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src={images[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src={images[1]}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src={images[2]}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
