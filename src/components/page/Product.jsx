import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const Product = ({ match }) => {
  const dispatch = useDispatch();

  const product = useSelector((store) => {
    return store.products.find((product) => {
      return (
        product.name.toLowerCase().trim().replace(/ /g, "-") ===
        match.params.product
      );
    });
  });

  return (
    <>
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-8 border">
            <img className="mt-3" src={product.image} alt="" />
            <div className="mt-3">
              <h3 className="font-italic border-bottom border-dark">
                Specifications:
              </h3>
              <h4 className="mt-3">
                Model:{" "}
                <span className="font-weight-lighter">{product.name}</span>
              </h4>
              <h4 className="mt-3">
                Description:{" "}
                <p className="font-weight-lighter">{product.description}</p>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-dark text-light h-25">
              <h4 className="mt-3 pt-3 text-center">{product.name}</h4>
              <p className="ml-3">
                {product.stock > 0 ? "available" : "not available"}
              </p>
            </div>
            <div className="h-25">
              <h4 className="mt-3 ml-3 pt-3">
                Price: $<span className="font-italic">{product.price}</span>
              </h4>
              <i
                className="btn btn-primary btn-block"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
