import { Fragment, useState } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "../UI/Button/HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = () => {
  const cartHandler = () => {
    setIsCart(true);
  };

  const [isCart, setIsCart] = useState(false);

  return (
    <Fragment>
      {isCart ? <Cart /> : <div />}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={cartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
