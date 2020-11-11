import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComp = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.ikea.com/images/a-white-kitchen-with-white-drawers-and-cabinets-with-glass-d-44ee69846ee7b4c479e3b7846fa56216.jpg?f=xxxl"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.ikea.com/images/a-kitchen-with-kitchen-doors-in-anthracite-a-walnut-veneer-c-7a0e38fb85f217f2a1d66ed2e0746158.jpg?f=xxxl"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.ikea.com/images/a-small-kitchen-with-white-cabinets-at-the-bottom-and-chalk--ee46c2978d4bc358e6bd11a84bbccb99.jpg?f=xxxl"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
