import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const itemAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const itemAmount = itemAmountRef.current.value;
    const itemAmountNumber = +itemAmount;

    if (
      itemAmount.trim().length === 0 ||
      itemAmountNumber < 1 ||
      itemAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(itemAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        label="Amount"
        ref={itemAmountRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid number(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
