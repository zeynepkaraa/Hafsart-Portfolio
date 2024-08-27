import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import Hero from "../../Hero/Hero.jsx";
import Card from "../../Card/Card.jsx";
import Arch from "../../Arch/Arch.jsx";
import ContentBlock from "../../ContentBlock/ContentBlock.jsx";
import { GiLotusFlower } from "react-icons/gi";
import styles from "./Home.module.css";
import coupleImage from "../../../../assets/images/couple.png";
import ImageGrid from "../../Image Grid/ImageGrid.jsx";
import Footer from "../../Footer/Footer.jsx";
const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <div className={styles.arch}></div>
      </div>

      <div className={styles.services}>
        <div className={styles.sticker}>
          {" "}
          <GiLotusFlower />
        </div>
        <div className={styles.arches}>
          <Arch title="Live Events" image={coupleImage} />
          <Arch title="Fashion Illustrations" image={coupleImage} />
          <Arch title="Custom Portraits" image={coupleImage} />
        </div>
      </div>

      <ContentBlock />
      <div className="flex">
        <ImageGrid />
      </div>

      <div className={styles.testimonial}>
        <h1 className={styles.cardTitle}>
          Our <span className={styles.highlight}>happy </span> clients says
          about us
        </h1>
        <div className={styles.cards}>
          <Card
            review="This event was fantastic! Everything was perfect from start to finish."
            clientImg="path/to/client-image.jpg"
            clientName="Jane Doe"
            eventType="Wedding"
          />
          <Card
            review="This event was fantastic! Everything was perfect from start to finish."
            clientImg="path/to/client-image.jpg"
            clientName="Jane Doe"
            eventType="Wedding"
          />
          <Card
            review="This event was fantastic! Everything was perfect from start to finish."
            clientImg="path/to/client-image.jpg"
            clientName="Jane Doe"
            eventType="Wedding"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
