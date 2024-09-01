import React from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./EventPage.module.css";
import eventsData from "../../../data/events.json";
import EventCard from "../../Event/EventCard";
import Footer from "../../Footer/Footer";
const customPortraits = () => {
  const customs = eventsData.filter((event) => event.type === "custom");
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Custom Portraits</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
          vestibulum.
        </p>
        <div className={styles.grid}>
          {customs.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default customPortraits;
