import { Fragment } from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/Summary/MealsSummay";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;
