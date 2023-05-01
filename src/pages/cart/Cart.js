import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/shop-context";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemsList = cartItems.map((item) => ({ ...item }));

  const totalItems = cartItemsList.reduce(
    (total, currentValue) => total + currentValue.quantity,
    0
  );

  const totalPrice = cartItemsList.reduce((total, currentValue) => {
    const price = parseFloat(currentValue.price);
    return total + price * currentValue.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {totalItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItemsList.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <img
                    className="cart-item-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div>
                    <p className="cart-item-name">{item.title}</p>
                    <p className="cart-item-price">${item.price}</p>
                    <p className="cart-item-quantity">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  className="cart-item-remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p className="item-quantity">Total Items: {totalItems}</p>
            <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
