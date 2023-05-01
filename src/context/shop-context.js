import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log("cartItems before adding: ", cartItems);
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    console.log("itemIndex: ", itemIndex);
    if (itemIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity++;
      setCartItems(newCartItems);
    } else {
      const newCartItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
    console.log("cartItems after adding: ", cartItems);
  };

  const removeFromCart = (itemId) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    if (itemIndex >= 0) {
      const newCartItems = [...cartItems];
      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity--;
      }
      setCartItems(newCartItems);
    }
  };

  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
