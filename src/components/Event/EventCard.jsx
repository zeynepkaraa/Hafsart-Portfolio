import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventDetail.module.css";

function EventCard({ event }) {
  return (
    <div className={styles.eventCard}>
      <Link to={`/${event.type.toLowerCase()}/${event.id}`}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={event.thumbnail}
            alt={event.name}
          />
          <div className={styles.titleOverlay}>
            <h1 className={styles.eventName}>{event.name}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;
