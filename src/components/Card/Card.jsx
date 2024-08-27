import React from "react";
import styles from "./Card.module.css"; // Assuming you're using CSS modules

const Card = ({ title, icon, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
