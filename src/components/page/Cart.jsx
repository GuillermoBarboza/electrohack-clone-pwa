import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCart, addToCart, removeFromCart } from "../../redux/actions";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const token = useSelector((store) => store.user.token);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const total = () => {
    return cart
      .map((product) => product.quantity * product.price)
      .reduce((sum, val) => sum + val, 0);
  };

  const handlePurchase = () => {
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "http://localhost:8000/api/v1/orders",
      data: {
        cart: cart,
      },
    })
      .then((res) => {
        dispatch(resetCart([]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container margin-product cart-bg">
      <div className="row pb-4">
        <div className="col-lg-8 mt-3 second-color rounded">
          <div className="row mt-3">
            <div className="col-7">
              <h5>Shopping Cart</h5>
            </div>
            <div className="col-3 text-center">
              <h5>Quantity</h5>
            </div>
            <div className="col-2 text-center">
              <h5>Price</h5>
            </div>
          </div>
          <hr className="mb-5" />
          {cart.length > 0 &&
            cart.map((product) => {
              return (
                <div className="row mb-5">
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt="Product"
                    />
                  </div>
                  <div className="col-5">
                    <h5 className="">{product.name}</h5>
                  </div>

                  <div className="col-3 text-center">
                    <p>
                      <span
                        className="btn"
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        <i class="fas fa-minus"></i>
                      </span>
                      {product.quantity}
                      <span
                        className="btn"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <i class="fas fa-plus"></i>
                      </span>
                    </p>
                  </div>
                  <div className="col-2 text-center">
                    <p className="lead">${product.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-lg-4 mt-3">
          <div className="total-wrapper border second-color rounded">
            <h5 className="font-italic mb-4">TOTAL:</h5>
            <p className="lead text-center">${total()}</p>
            {token ? (
              <button
                className="btn btn-custom btn-block p-2 my-4"
                onClick={handlePurchase}
              >
                Proceed to checkout
              </button>
            ) : (
              <Link to="/login">
                <i className="btn btn-success btn-block my-3">Login</i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
