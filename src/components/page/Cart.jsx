import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCart, addToCart, removeFromCart } from "../../redux/actions";
import globalUrl from "../../utils/url";

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
      url: `${globalUrl}/api/v1/orders`,
      data: {
        cart: cart,
        total: total(),
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
    <div className="container margin-product cart-wrapper">
      <div className="row">
        <div className="col-lg-8 ">
          <div className="cart-bg">
            <div className="row">
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
            <hr className="mb-4" />
            {cart.length > 0 &&
              cart.map((product) => {
                return (
                  <div className="row mb-5">
                    <div className="col-2 my-auto">
                      <img
                        className="img-fluid"
                        src={product.image}
                        alt="Product"
                      />
                    </div>
                    <div className="col-5 my-auto">
                      <h5 className="cart-product-title">{product.name}</h5>
                    </div>

                    <div className="col-3 my-auto text-center">
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
                    <div className="col-2 my-auto text-center">
                      <p className="lead">${product.price}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="total-wrapper price-bg">
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
              <Link to="/login" className="text-dark text-decoration-none">
                <p className="btn btn-login-cart  btn-block p-2 my-4">Login</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
