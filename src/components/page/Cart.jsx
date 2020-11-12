import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCart, addToCart, removeFromCart } from "../../redux/actions";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const token = useSelector((store) => store.user.token);

  const dispatch = useDispatch();

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
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="col-md-9">
          <div className="row border-bottom border-dark mb-3">
            <div className="col-2">
              {" "}
              <h3>Item</h3>
            </div>
            <div className="col-6"></div>
            <div className="col-2">
              <h3>Price</h3>
            </div>
            <div className="col-2">
              <h3>Amount</h3>
            </div>
          </div>
          {cart.length > 0 &&
            cart.map((product) => {
              return (
                <div className="row mb-5">
                  <div className="col-2">
                    <img className="img-thumbnail" src={product.image} alt="" />
                  </div>
                  <div className="col-6">
                    <h4 className="">{product.name}</h4>
                  </div>
                  <div className="col-2">
                    <i className="">{"c/u $" + product.price}</i>
                  </div>
                  <div className="col-2">
                    <i
                      className="btn"
                      onClick={() => dispatch(removeFromCart(product))}
                    >
                      -
                    </i>
                    {product.quantity}
                    <i
                      className="btn"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      +
                    </i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-md-3 text-center">
          <div className="container border">
            <h3 className="mb-5 border-bottom border-dark font-italic">
              TOTAL:
            </h3>
            <i className="font-italic">${total()}</i>
            {token ? (
              <i
                className="btn btn-primary btn-block my-3"
                onClick={handlePurchase}
              >
                Buy
              </i>
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
