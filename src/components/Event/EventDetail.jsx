import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../../data/events.json";
import Navbar from "../Navbar/Navbar";
import styles from "./EventDetail.module.css";
import Footer from "../Footer/Footer";
import ImageGallery from "../Image Gallery/imageGallery";

function EventDetail() {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{event.name}</h1>
        <p className={styles.description}>{event.description}</p>
        {/* <div className="images">
          {event.images.map((image, index) => (
            <img key={index} src={image} alt={`${event.name} ${index + 1}`} />
          ))}
        </div> */}
        <ImageGallery images={event.images} />
      </div>
      <Footer />
    </div>
  );
}

export default EventDetail;
