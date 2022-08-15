import React from "react";

const CartContext = () => {
  return React.createContext({
    items: [],
    amount: 0,
  });
};

export default CartContext;
