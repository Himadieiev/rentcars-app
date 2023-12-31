import React, { useEffect, useRef, useState } from "react";

import styles from "./FilterForm.module.css";
import Button from "../Button/Button";

const FilterForm = ({ onFilter, cars }) => {
  const [isBrandFilterMenuOpen, setIsBrandFilterMenuOpen] = useState(false);
  const [isPriceFilterMenuOpen, setIsPriceFilterMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const brandFilterMenuRef = useRef(null);
  const priceFilterMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (brandFilterMenuRef.current &&
          !brandFilterMenuRef.current.contains(e.target)) ||
        (priceFilterMenuRef.current &&
          !priceFilterMenuRef.current.contains(e.target))
      ) {
        setIsBrandFilterMenuOpen(false);
        setIsPriceFilterMenuOpen(false);
      }
    };

    const handleDocumentClick = (e) => {
      handleClickOutside(e);
    };

    if (isBrandFilterMenuOpen || isPriceFilterMenuOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isBrandFilterMenuOpen, isPriceFilterMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    const filters = {
      selectedBrand,
      selectedPrice,
      mileageFrom,
      mileageTo,
    };

    onFilter(filters);
  };

  const toggleBrandMenu = (e) => {
    e.preventDefault();

    setIsBrandFilterMenuOpen((prevState) => !prevState);
  };

  const togglePriceMenu = (e) => {
    e.preventDefault();

    setIsPriceFilterMenuOpen((prevState) => !prevState);
  };

  const handleBrandItemClick = (make) => {
    setSelectedBrand(make);
    setIsBrandFilterMenuOpen(false);
  };

  const handlePriceItemClick = (price) => {
    setSelectedPrice(price);
    setIsPriceFilterMenuOpen(false);
  };

  const handleMileageFromChange = (e) => {
    const formattedValue = e.target.value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setMileageFrom(formattedValue);
  };

  const handleMileageToChange = (e) => {
    const formattedValue = e.target.value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setMileageTo(formattedValue);
  };

  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <div className={styles.brandInputContainer}>
        <label htmlFor="brand" className={styles.label}>
          Car brand
        </label>
        <input
          id="brand"
          className={styles.brandInput}
          type="text"
          placeholder="Enter the text"
          value={selectedBrand}
          readOnly
        />
        <button className={styles.brandInputBtn} onClick={toggleBrandMenu}>
          {!isBrandFilterMenuOpen ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.brandBtnIcon}
            >
              <path
                d="M5 12.5L10 7.5L15 12.5"
                stroke="#121417"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        {isBrandFilterMenuOpen && (
          <div className={styles.brandFilterContainer} ref={brandFilterMenuRef}>
            <div className={styles.brandFilter}>
              <ul className={styles.brandList}>
                {Array.from(new Set(cars.map((car) => car.make))).map(
                  (make) => (
                    <li
                      className={styles.brandItem}
                      key={make}
                      onClick={() => handleBrandItemClick(make)}
                    >
                      {make}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={styles.priceInputContainer}>
        <label htmlFor="price" className={styles.label}>
          Price/ 1 hour
        </label>
        <input
          id="price"
          className={styles.priceInput}
          type="text"
          placeholder="$"
          value={selectedPrice ? `${selectedPrice}$` : ""}
          readOnly
        />
        <span className={styles.priceTextTo}>To</span>
        <button className={styles.priceInputBtn} onClick={togglePriceMenu}>
          {!isPriceFilterMenuOpen ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.priceBtnIcon}
            >
              <path
                d="M5 12.5L10 7.5L15 12.5"
                stroke="#121417"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        {isPriceFilterMenuOpen && (
          <div className={styles.priceFilterContainer} ref={priceFilterMenuRef}>
            <div className={styles.priceFilter}>
              <ul className={styles.priceList}>
                {(() => {
                  const prices = [];
                  for (let price = 10; price <= 300; price += 10) {
                    prices.push(
                      <li
                        className={styles.priceItem}
                        key={price}
                        onClick={() => handlePriceItemClick(price)}
                      >
                        {price}
                      </li>
                    );
                  }
                  return prices;
                })()}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={styles.mileAgeContainer}>
        <div className={styles.fromInputContainer}>
          <label htmlFor="mileage" className={styles.label}>
            Сar mileage / km
          </label>
          <input
            id="mileage"
            className={styles.mileageFromInput}
            type="text"
            value={mileageFrom}
            onChange={handleMileageFromChange}
          />
          <span className={styles.textFrom}>From</span>
        </div>
        <div className={styles.toInputContainer}>
          <input
            className={styles.mileageToInput}
            type="text"
            value={mileageTo}
            onChange={handleMileageToChange}
          />
          <span className={styles.textTo}>To</span>
        </div>
      </div>
      <div className={styles.searchBtnContainer}>
        <Button type="submit">
          <span>Search</span>
        </Button>
      </div>
    </form>
  );
};

export default FilterForm;
