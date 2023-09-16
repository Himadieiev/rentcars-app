import React from "react";

import styles from "./CarsList.module.css";
import Car from "../Car/Car";
import Loader from "../Loader/Loader";

const CarsList = ({ cars }) => {
  if (!cars) {
    return <Loader />;
  }

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
