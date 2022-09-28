import React, { useState, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../Store/Cart-Context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const confirmHanndler = (userData) => {
    setIsSubmitting(true);
    fetch("https://react-http-95b9d-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && (
        <Checkout onConfirm={confirmHanndler} onClose={props.hideCart} />
      )}
      {!checkout && actions}
    </>
  );

  const submittingModelContent = <p>Submitting....</p>;
  const didSubmitModelContent = (
    <>
      <p>Your Order has been placed!</p>
      <div className={styles.actions}>
        <button onClick={props.hideCart} className={styles["button--alt"]}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal closeCart={props.hideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && submittingModelContent}
      {didSubmit && didSubmitModelContent}
    </Modal>
  );
};

export default Cart;
