import React, { useEffect, useState } from "react";
import Slider from "react-touch-drag-slider";

import styles from "./Home.module.css";
import images from "./images";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textBlockVisible, setTextBlockVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          clearInterval(interval);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    setTimeout(() => {
      setTextBlockVisible(true);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className={styles.home}>
      <div className={styles.slider}>
        <Slider
          activeIndex={activeIndex}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img className={styles.img} src={url} key={index} alt={title} />
          ))}
        </Slider>
        <div
          className={`${styles.textBlock} ${
            textBlockVisible ? styles.visible : ""
          }`}
        >
          <div>RENT EXCLUSIVE CAR</div>
          <div className={styles.secondText}>
            <span>To get started go to </span>
            <span className={styles.link}>
              <NavLink to="/catalog">Catalog Page</NavLink>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
