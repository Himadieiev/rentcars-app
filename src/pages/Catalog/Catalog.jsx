import React, { useEffect, useState } from "react";

import styles from "./Calalog.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { fetchCars } from "../../services/apiCars";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const [filters, setFilters] = useState({
    selectedBrand: "",
    selectedPrice: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars(currentPage);

        if (cars.length > 0) {
          setCars((prevCars) => [...prevCars, ...cars]);
        } else {
          setHasMoreData(false);
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
      <FilterForm cars={cars} onFilter={handleFilterChange} />
      {!cars || cars.length === 0 ? (
        <Loader />
      ) : (
        <CarsList cars={cars} filters={filters} />
      )}

      {cars.length !== 0 && hasMoreData && (
        <button className={styles.loadMoreBtn} onClick={loadMore}>
          Load more
        </button>
      )}
      {!hasMoreData && <div className={styles.infoText}>No more cars</div>}
    </main>
  );
};

export default Catalog;
