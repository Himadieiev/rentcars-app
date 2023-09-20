import React, { useEffect, useState } from "react";

import styles from "./Favorites.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../../context/FavoritesContext";
import Loader from "../../components/Loader/Loader";

const Favorites = () => {
  const { favoritesCars, setFavoritesCars } = useFavoritesContext();
  const [isLoading, setIsLoading] = useState(true);
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
    const storedFavoritesCars = JSON.parse(
      localStorage.getItem("favoritesCars")
    );

    if (storedFavoritesCars) {
      setFavoritesCars(storedFavoritesCars);
    }

    setIsLoading(false);
  }, [setFavoritesCars]);

  return (
    <main className={`${styles.favorites} container`}>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <>
          {favoritesCars.length !== 0 && (
            <FilterForm onFilter={handleFilterChange} />
          )}
          {favoritesCars.length === 0 && (
            <>
              <div className={styles.infoTextTop}>
                You haven't added anything :(
              </div>
              <div className={styles.infoTextBottom}>
                <span>To add your favorite car, go to </span>
                <span className={styles.link}>
                  <NavLink to="/catalog">Catalog Page</NavLink>
                </span>
              </div>
            </>
          )}
          <CarsList
            cars={favoritesCars}
            setFavoritesCars={setFavoritesCars}
            filters={filters}
          />
        </>
      )}
    </main>
  );
};

export default Favorites;
