import React from "react";

import styles from "./Favorites.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";

const Favorites = () => {
  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
    </main>
  );
};

export default Favorites;
