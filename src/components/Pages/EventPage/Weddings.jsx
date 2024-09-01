import React from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./EventPage.module.css";
import eventsData from "../../../data/events.json";
import EventCard from "../../Event/EventCard";
import Footer from "../../Footer/Footer";

const Weddings = () => {
  const weddings = eventsData.filter((event) => event.type === "Wedding");
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Weddings</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
          vestibulum.
        </p>
        <div className={styles.grid}>
          {weddings.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Weddings;
