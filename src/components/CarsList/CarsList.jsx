import React from "react";

import styles from "./CarsList.module.css";
import Car from "../Car/Car";

const CarsList = ({ cars }) => {
  return (
    <ul className={styles.carsList}>
      {cars.map((car) => (
        <li key={car.id}>
          <Car car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
