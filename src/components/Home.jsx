import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <div className={styles.arch}></div>
    </div>
  );
};

export default Home;
