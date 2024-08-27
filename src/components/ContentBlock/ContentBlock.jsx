import React from "react";
import styles from "./ContentBlock.module.css";
import { FaCircle } from "react-icons/fa";
import Arrow from "../../../assets/images/arrow.svg";
const ContentBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}> Why fashion illustration?</h1>
        <p className={styles.description}>
          Get ready to spice up your events with live fashion illustrations,
          capturing the vibe of your guests' style in every stroke. Get ready to
          spice up your events with live fashion illustrations, capturing the
          vibe of your guests' style in every stroke.
        </p>
      </div>
      <div className={styles.container2}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FaCircle className={styles.icon} /> First item
          </li>
          <li className={styles.item}>
            <FaCircle className={styles.icon} /> Second item
          </li>
          <li className={styles.item}>
            <FaCircle className={styles.icon} /> Third item
          </li>
          <li className={styles.item}>
            <FaCircle className={styles.icon} /> Fourth item
          </li>
        </ul>
      </div>
      <img src={Arrow} className={styles.svgIcon} alt="Arrow" />{" "}
      {/* Use SVG as an image source */}
    </div>
  );
};

export default ContentBlock;
