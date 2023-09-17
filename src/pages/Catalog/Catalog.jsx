import React, { useEffect, useState } from "react";

import styles from "./Calalog.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { fetchCars } from "../../services/apiCars";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars(page);

        setCars([...cars]);
      } catch (e) {
        throw e.message;
      }
    };

    fetchData();
  }, [page]);
  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
      <CarsList cars={cars} />
      <button className={styles.loadMoreBtn}>Load more</button>
    </main>
  );
};

export default Catalog;
