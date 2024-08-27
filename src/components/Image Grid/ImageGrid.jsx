import React from "react";
import styles from "./ImageGrid.module.css"; // Import CSS module

const ImageGrid = () => {
  const data = [
    {
      title: "Event 1",
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Event 2",
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      title: "Event 3",
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      title: "Event 4",
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Events</h1>
      <div className={styles.grid}>
        {data.map(({ imageLink, title }, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img className={styles.image} src={imageLink} alt={title} />
            <div className={styles.titleOverlay}>
              <h1 className={styles.eventName}>{title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
