import React, { useEffect } from "react";

import styles from "./Favorites.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";

const Favorites = ({ favoritesCars, setFavoritesCars }) => {
  useEffect(() => {
    setFavoritesCars(favoritesCars);
  }, [favoritesCars, setFavoritesCars]);

  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
      <CarsList cars={favoritesCars} setFavoritesCars={setFavoritesCars} />
    </main>
  );
};

export default Favorites;
