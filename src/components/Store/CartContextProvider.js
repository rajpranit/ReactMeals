import React from "react";
import CartContext from "./Cart-Context";

const CartProvier = (props) => {
  const addCartItem = (item) => {};

  const removeCartItem = (id) => {};

  const cartContext = {
    items: [],
    amount: 0,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.provider value={cartContext}>
      {props.children}
    </CartContext.provider>
  );
};

export default CartProvier;
