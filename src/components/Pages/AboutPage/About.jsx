import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1>Meet the team</h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;
