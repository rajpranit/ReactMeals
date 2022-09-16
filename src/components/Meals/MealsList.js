import React from "react";
import { useState, useEffect } from "react";
import MealsItem from "./MealsItem";
import styles from "./MealsList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://react-http-95b9d-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error(response.status.toString);
      }

      const data = await response.json();

      const loadedMeals = [];
      // console.log(data["m1"].price);

      for (const key in data) {
        if (data[key].name !== "") {
          console.log(data[key].price);
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (error) {
    return (
      <section>
        <p className={styles.mealloading}>Error ({error})</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section>
        <p className={styles.mealloading}>Loading...</p>
      </section>
    );
  }

  let allMeals = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <ul>{allMeals}</ul>
    </section>
  );
};

export default MealsList;
