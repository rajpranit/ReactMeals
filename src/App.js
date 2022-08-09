import { Fragment } from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummay";
import MealsList from "./components/Meals/MealsList";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <MealsList />
    </Fragment>
  );
}

export default App;
