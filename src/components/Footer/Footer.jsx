import React from "react";

import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span className={styles.logoLeft}>RENTCARs</span>
            <span className={styles.logoRight}>UA</span>
          </NavLink>
        </div>
        <div className={styles.rights}>
          <span className={styles.rightsText}>Developed by </span>
          <a
            href="https://www.linkedin.com/in/ruslan-himadieiev-32416b271/"
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
