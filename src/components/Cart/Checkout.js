import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value === "";
const isFiveCharacter = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const [submitFormValidation, setSubmitFormValidation] = useState({
    name: true,
    address: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const checkoutHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const address = addressInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const addressIsValid = !isEmpty(address);
    const postalCodeIsValid =
      !isEmpty(postalCode) && isFiveCharacter(postalCode);
    const cityIsValid = !isEmpty(city);

    const formIsValid =
      nameIsValid && addressIsValid && postalCodeIsValid && cityIsValid;

    setSubmitFormValidation({
      name: nameIsValid,
      address: addressIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: name,
      address: address,
      postalCode: postalCode,
      city: city,
    });
  };

  const nameControlClasses = `${classes.control} ${
    submitFormValidation.name ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    submitFormValidation.address ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    submitFormValidation.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    submitFormValidation.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={checkoutHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!submitFormValidation.name && <p>Please input a valid name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!submitFormValidation.address && <p>Please input a valid address</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="code">Postal Code</label>
        <input type="text" id="code" ref={postalCodeInputRef} />
        {!submitFormValidation.postalCode && (
          <p>Please input a valid postalCode</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Your City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!submitFormValidation.city && <p>Please input a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Close
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
