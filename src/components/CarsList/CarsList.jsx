import React from "react";

import styles from "./CarsList.module.css";
import Car from "../Car/Car";

const CarsList = ({ cars, filters }) => {
  const isCarWithinPriceRange = (car) => {
    if (filters.selectedPrice === "") {
      return true;
    }

    const carPrice = parseFloat(car.rentalPrice.replace("$", ""));

    return carPrice <= parseFloat(filters.selectedPrice);
  };

  const filteredCars = cars.filter((car) => {
    if (filters.selectedBrand && car.make !== filters.selectedBrand) {
      return false;
    }

    return isCarWithinPriceRange(car);
  });

  const hasFilters = filters.selectedBrand || filters.selectedPrice !== "";

  return (
    <div>
      {hasFilters ? (
        filteredCars.length === 0 ? (
          <div className={styles.infoText}>No cars matching the filters</div>
        ) : (
          <ul className={styles.carsList}>
            {filteredCars.map((car) => (
              <li key={car.id}>
                <Car car={car} />
              </li>
            ))}
          </ul>
        )
      ) : (
        <ul className={styles.carsList}>
          {cars.map((car) => (
            <li key={car.id}>
              <Car car={car} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarsList;
