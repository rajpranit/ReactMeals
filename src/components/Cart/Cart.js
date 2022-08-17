import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../Store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const onAddItemHandler = (item) => {};
  const onRemoveItemHandler = (id) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          id={meal.id}
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
      <div className={styles.actions}>
        <button onClick={props.hideCart} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
