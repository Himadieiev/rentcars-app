import React from "react";

import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span className={styles.logoLeft}>RENT </span>
            <span className={styles.logoCenter}>CARs </span>
            <span className={styles.logoRight}>UA</span>
          </NavLink>
        </div>
        <div className={styles.rights}>
          <span className={styles.rightsText}>Developed by </span>
          <a
            href="https://github.com/Himadieiev"
            target="_blank"
            rel="noreferrer"
            className={styles.rightsLink}
          >
            Himadieiev Ruslan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
