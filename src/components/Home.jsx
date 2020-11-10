import React from "react";
import Navbar from "./Navbar";
import ProductsList from "./ProductsList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container bg-light">
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
