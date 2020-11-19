import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card my-2 shadow-about-us">
        <img src={product.image} className="img-card m-5" alt="..." />
        <div
          className="card-body card-height second-color d-flex flex-column justify-content-between"
          bg="snow"
        >
          <div>
            <Link
              to={{
                pathname:
                  "/products/" +
                  product.name.toLowerCase().trim().replace(/ /g, "-"),
                state: { product },
              }}
              className="text-dark"
            >
              <h5 className="card-title">{product.name}</h5>
            </Link>
          </div>
          <div>
            <img src={product.brand.logo} alt="" className="card-logo-size" />
          </div>

          <div>
            <p className="lead mb-0">$ {product.price}</p>
            {product.stock > 0 ? (
              <>
                <p className="my-2">
                  <small>In stock</small>
                </p>
                <button
                  className="btn btn-custom btn-block"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                </button>
              </>
            ) : (
              <>
                <p className="my-2">
                  <small>Out of Stock</small>
                </p>
                <button disabled className="btn btn-custom btn-block">
                  <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
