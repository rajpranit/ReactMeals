import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addCartItem = (item) => {};

  const removeCartItem = (id) => {};

  const cartContext = {
    items: [],
    amount: 0,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
