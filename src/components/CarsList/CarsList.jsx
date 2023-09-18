import React from "react";

import styles from "./CarsList.module.css";
import Car from "../Car/Car";

const CarsList = ({ cars, setFavoritesCars, favoritesCars }) => {
  return (
    <ul className={styles.carsList}>
      {cars.map((car) => (
        <li key={car.id}>
          <Car
            car={car}
            setFavoritesCars={setFavoritesCars}
            favoritesCars={favoritesCars}
          />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
