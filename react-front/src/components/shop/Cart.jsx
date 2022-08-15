import React from "react";
import "../../css/cart.css";
import formatCurrency from "../../frontServices/utils";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  removeFromCart,
  products,
  reduceItem,
  increaseItem,
  clearCart,
}) => {
  return (
    <>
      <div className="cart">
        <div className="left-side-cart">
          {cartItems.length === 0 ? (
            <div className="cart cart-header">Your cart is empty</div>
          ) : (
            <div className="cart cart-header">
              You have {cartItems.length} items in the cart{" "}
            </div>
          )}
        </div>

        <div>
          <ul className="cart-items">
            {cartItems.map((cartItem) => {
              const item = products.find((p) => p._id === cartItem.id);
              return (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content">
                    <div>{item.title}</div>
                    <div>{item.description}</div>

                    <div className="amount">
                      <button
                        className="count-button"
                        onClick={() => {
                          reduceItem(item);
                        }}
                      >
                        -
                      </button>
                      <span>{cartItem.count}</span>
                      <button
                        className="count-button"
                        onClick={() => {
                          increaseItem(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    {formatCurrency(item.price)} x {cartItem.count}{" "}
                    <button
                      className="trash-button"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* calculate */}
        <div className="right-side-cart">
          <div className="cart-total">
            total:{" "}
            <div>
              {formatCurrency(
                cartItems.reduce(
                  (total, item) => total + products.find((p) => p._id === item.id).price * item.count,
                  0
                )
              )}
            </div>
          </div>

          <Link to="#" className="payment-button" onClick={clearCart}>
            Payment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
