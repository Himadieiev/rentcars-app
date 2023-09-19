import React from "react";

import styles from "./Favorites.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { NavLink } from "react-router-dom";

const Favorites = ({ favoritesCars, setFavoritesCars }) => {
  return (
    <main className={`${styles.favorites} container`}>
      {favoritesCars.length !== 0 && <FilterForm />}
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
      <CarsList cars={favoritesCars} setFavoritesCars={setFavoritesCars} />
    </main>
  );
};

export default Favorites;
