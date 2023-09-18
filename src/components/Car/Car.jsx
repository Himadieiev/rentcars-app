import React, { useState } from "react";

import styles from "./Car.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Car = ({ car, setFavoritesCars, favoritesCars }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const toggleFavorite = (car) => {
    if (setFavoritesCars && favoritesCars) {
      setFavoritesCars((prevFavorites) => {
        const isCarInFavorites = prevFavorites.some(
          (favoriteCar) => favoriteCar.id === car.id
        );

        if (isCarInFavorites) {
          return prevFavorites.filter(
            (favoriteCar) => favoriteCar.id !== car.id
          );
        } else {
          return [...prevFavorites, car];
        }
      });
    }
  };

  return (
    <div className={styles.carContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="Car" />
        <button
          className={styles.toggleFavoritesBtn}
          onClick={() => toggleFavorite(car)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={styles.toggleFavoritesIcon}
          >
            <path
              d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.topTextContainer}>
          <div>
            <span>{make} </span>
            <span className={styles.model}>{model}, </span>
            <span>{year}</span>
          </div>
          <p>{rentalPrice}</p>
        </div>
        <div className={styles.bottomTextContainer}>
          <span>{address[1]}</span>
          <div className={styles.decorLine}></div>
          <span>{address[2]}</span>
          <div className={styles.decorLine}></div>
          <span>{rentalCompany}</span>
          <div className={styles.decorLine}></div>
          <span>{type}</span>
          <div className={styles.decorLine}></div>
          <span>{model}</span>
          <div className={styles.decorLine}></div>
          <span>{id}</span>
        </div>
      </div>
      <div className={styles.btnContainer} onClick={toggleModal}>
        <Button>Learn more</Button>
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} car={car} />}
    </div>
  );
};

export default Car;
