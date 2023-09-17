import React, { useEffect, useState } from "react";

import styles from "./Calalog.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { fetchCars } from "../../services/apiCars";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const maxNumberCars = 32;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars(currentPage);

        if (cars.length > 0) {
          setCars((prevCars) => [...prevCars, ...cars]);
        }
      } catch (e) {
        throw e.message;
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
      {!cars || cars.length === 0 ? <Loader /> : <CarsList cars={cars} />}

      {cars.length !== 0 && cars.length < maxNumberCars && (
        <button className={styles.loadMoreBtn} onClick={loadMore}>
          Load more
        </button>
      )}
    </main>
  );
};

export default Catalog;
