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

  const isCarWithinMileageRange = (car) => {
    if (filters.mileageFrom === "" && filters.mileageTo === "") {
      return true;
    }

    const mileageFrom =
      filters.mileageFrom !== ""
        ? parseFloat(filters.mileageFrom.replace(/,/g, ""))
        : -Infinity;
    const mileageTo =
      filters.mileageTo !== ""
        ? parseFloat(filters.mileageTo.replace(/,/g, ""))
        : Infinity;

    return (
      parseFloat(car.mileage) >= mileageFrom &&
      parseFloat(car.mileage) <= mileageTo
    );
  };

  const filteredCars = cars.filter((car) => {
    if (filters.selectedBrand && car.make !== filters.selectedBrand) {
      return false;
    }

    if (filters.selectedPrice !== "") {
      const carPrice = parseFloat(car.rentalPrice.replace("$", ""));
      if (carPrice > parseFloat(filters.selectedPrice)) {
        return false;
      }
    }

    return isCarWithinPriceRange(car) && isCarWithinMileageRange(car);
  });

  const hasFilters =
    filters.selectedBrand ||
    filters.selectedPrice !== "" ||
    filters.mileageFrom !== "" ||
    filters.mileageTo !== "";

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
