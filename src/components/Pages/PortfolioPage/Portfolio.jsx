import React from "react";
import styles from "./Portfolio.module.css";
import Arch from "../../Arch/Arch";
import Navbar from "../../Navbar/Navbar";
import coupleImage from "../../../../assets/images/couple.png";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.arches}>
          <Link to={"/live"}>
            <Arch title="Live Events" image={coupleImage} />
          </Link>
          <Link to={"/wedding"}>
            <Arch title="Weddings" image={coupleImage} />
          </Link>
          <Link to={"/custom"}>
            <Arch title="Custom Portraits" image={coupleImage} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
