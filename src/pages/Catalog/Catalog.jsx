import React, { useEffect, useState } from "react";

import styles from "./Calalog.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { fetchCars } from "../../services/apiCars";

const Catalog = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars();

        setCars(cars);
      } catch (e) {
        throw e.message;
      }
    };

    fetchData();
  }, []);
  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
      <CarsList cars={cars} />
    </main>
  );
};

export default Catalog;
