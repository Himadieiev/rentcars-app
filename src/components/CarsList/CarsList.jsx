import React from "react";

import styles from "./CarsList.module.css";
import Car from "../Car/Car";

const CarsList = ({ cars, filters }) => {
  const filteredCars = cars.filter((car) => {
    if (!filters.selectedBrand) {
      return true;
    }

    return car.make === filters.selectedBrand;
  });

  return (
    <ul className={styles.carsList}>
      {filteredCars.map((car) => (
        <li key={car.id}>
          <Car car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
