import { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummay";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCart, setIsCart] = useState(false);

  const cartHandler = () => {
    setIsCart(true);
  };

  const hideCartHandler = () => {
    setIsCart(false);
  };

  return (
    <Fragment>
      {isCart && <Cart hideCart={hideCartHandler} />}
      <Header showCart={cartHandler} />
      <MealsSummary />
      <MealsList />
    </Fragment>
  );
}

export default App;
