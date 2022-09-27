import React, { useState, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../Store/Cart-Context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const onAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setCheckout(true);
  };

  const actions = (
    <div className={styles.actions}>
      <button onClick={props.hideCart} className={styles["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          price={meal.price}
          amount={meal.amount}
          onAdd={onAddItemHandler.bind(null, meal)}
          onRemove={onRemoveItemHandler.bind(null, meal.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.hideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && <Checkout onClose={props.hideCart} />}
      {!checkout && actions}
    </Modal>
  );
};

export default Cart;
