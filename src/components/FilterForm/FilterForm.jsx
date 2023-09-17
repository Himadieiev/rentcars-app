import React from "react";

import styles from "./FilterForm.module.css";
import Button from "../Button/Button";

const FilterForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.brandInputContainer}>
        <label htmlFor="brand" className={styles.label}>
          Car brand
        </label>
        <input
          id="brand"
          className={styles.brandInput}
          type="text"
          placeholder="Enter the text"
        />
        <button className={styles.brandInputBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.brandBtnIcon}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#121417"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.priceInputContainer}>
        <label htmlFor="price" className={styles.label}>
          Price/ 1 hour
        </label>
        <input
          id="price"
          className={styles.priceInput}
          type="text"
          placeholder="To $"
        />
        <button className={styles.priceInputBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.priceBtnIcon}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#121417"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.mileAgeContainer}>
        <div className={styles.fromInputContainer}>
          <label htmlFor="mileage" className={styles.label}>
            Сar mileage / km
          </label>
          <input id="mileage" className={styles.mileageFromInput} type="text" />
          <span className={styles.textFrom}>From</span>
        </div>
        <div className={styles.toInputContainer}>
          <input className={styles.mileageToInput} type="text" />
          <span className={styles.textTo}>To</span>
        </div>
      </div>
      <div className={styles.searchBtnContainer}>
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default FilterForm;
