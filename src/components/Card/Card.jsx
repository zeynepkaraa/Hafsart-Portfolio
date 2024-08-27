import React from "react";
import { FaHeart } from "react-icons/fa"; // Import the icon you want to use for all cards
import styles from "./Card.module.css"; // Assuming you're using CSS modules
import { RiDoubleQuotesL } from "react-icons/ri";

const Card = ({ review, clientImg, clientName, eventType }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <RiDoubleQuotesL />
      </div>
      <p className={styles.review}>{review}</p>
      <div className={styles.clientInfo}>
        <img src={clientImg} alt={clientName} className={styles.clientImg} />
        <div>
          <h4 className={styles.clientName}>{clientName}</h4>
          <p className={styles.eventType}>{eventType}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
