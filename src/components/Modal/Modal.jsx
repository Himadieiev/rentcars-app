import { createPortal } from "react-dom";
import { useEffect } from "react";

import styles from "./Modal.module.css";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ toggleModal, car }) {
  const {
    img,
    // make,
    // model,
    // year,
    // rentalPrice,
    // address,
    // rentalCompany,
    // type,
    // id,
    // accessories,
    // functionalities,
  } = car;

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.closeIcon}
          onClick={toggleModal}
        >
          <path
            d="M18 6L6 18"
            stroke="#121417"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.imgContainer}>
          <img src={img} alt="Car" />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles.btnContainer}>
          <Button>Rental car</Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
