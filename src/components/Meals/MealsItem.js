import React from "react";
import styles from "./MealsItem.module.css";
import Card from "../UI/Card/Card";
import MealItemForm from "./MealItemForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Card>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.key} />
        </div>
      </li>
    </Card>
  );
};

export default MealsItem;
