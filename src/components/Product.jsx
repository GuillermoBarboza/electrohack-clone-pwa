import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card my-2">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body card-height">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <i href="#" className="btn btn-primary">
            Buy
          </i>
        </div>
      </div>
    </div>
  );
};

export default Product;
