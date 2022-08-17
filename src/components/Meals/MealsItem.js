import React, { useContext } from "react";
import styles from "./MealsItem.module.css";
import Card from "../UI/Card/Card";
import MealItemForm from "./MealItemForm";
import CartContext from "../Store/Cart-Context";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amountNumber) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amountNumber,
      price: props.price,
    });
  };

  return (
    <Card>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </Card>
  );
};

export default MealsItem;
