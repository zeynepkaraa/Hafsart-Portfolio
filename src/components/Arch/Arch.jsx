import React from "react";
import styles from "./Arch.module.css";

const Arch = ({ title, image }) => {
  return (
    <div className={styles.arch} style={{ backgroundImage: `url(${image})` }}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Arch;
