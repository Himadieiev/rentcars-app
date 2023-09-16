import React from "react";

import styles from "./Favorites.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";

const Favorites = () => {
  return (
    <main className={styles.catalog}>
      <div className={styles.form}>
        <FilterForm />
      </div>
      <div className={styles.list}></div>
    </main>
  );
};

export default Favorites;
