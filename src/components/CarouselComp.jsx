import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComp = () => {
  return (
    <Carousel className="carousel-margin">
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
          }}
          alt="First slide"
        ></div>
        <Carousel.Caption>
          <h1 className="carousel-text">Home Appliances</h1>
          <h4 className="carousel-text">Your perfect house is here</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
          }}
          alt="Second slide"
        ></div>
        <Carousel.Caption>
          <h1 className="carousel-text">Home Appliances</h1>
          <h4 className="carousel-text">Your perfect house is here</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
          }}
          alt="Third slide"
        ></div>
        <Carousel.Caption>
          <h1 className="carousel-text">Home Appliances</h1>
          <h4 className="carousel-text">Your perfect house is here</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
          }}
          alt="Fourth slide"
        ></div>
        <Carousel.Caption>
          <h1 className="carousel-text">Home Appliances</h1>
          <h4 className="carousel-text">Your perfect house is here</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
