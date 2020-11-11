import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-9">
          <div className="row border-bottom border-dark mb-3">
            <div className="col-2">
              {" "}
              <h3>Articulo</h3>
            </div>
            <div className="col-6"></div>
            <div className="col-2">
              <h3>Precio</h3>
            </div>
            <div className="col-2">
              <h3>Cantidad</h3>
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
                    <i className="">{"$" + product.price}</i>
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
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Cart;
