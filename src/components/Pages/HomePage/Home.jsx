import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import Hero from "../../Hero/Hero.jsx";
import Card from "../../Card/Card.jsx";
import Arch from "../../Arch/Arch.jsx";
import ContentBlock from "../../ContentBlock/ContentBlock.jsx";
import { GiLotusFlower } from "react-icons/gi";
import styles from "./Home.module.css";
import coupleImage from "../../../../assets/images/couple.png";
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

      {/* <div className={styles.cards}>
        <Card
          title="Coffee Time"
          icon={<FaHeart />}
          description="Enjoy a cup of freshly brewed coffee!"
        />
        <Card
          title="Work Mode"
          icon={<FaStar />}
          description="Get productive and tackle your tasks."
        />
        <Card
          title="Relax"
          icon={<FaCouch />}
          description="Take a break and unwind for a while."
        />
      </div> */}
    </div>
  );
};

export default Home;
