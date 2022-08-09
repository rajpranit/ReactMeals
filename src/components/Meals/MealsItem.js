import React from "react";
import styles from "./MealsItem.module.css";
import Card from "../UI/Card/Card";

const MealsItem = (props) => {
  return (
    <Card>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
      </li>
    </Card>
  );
};

export default MealsItem;
