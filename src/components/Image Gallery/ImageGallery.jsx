import React from "react";
import styles from "./imageGallery.module.css"; // Import your custom CSS file

const ImageGallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div className={styles.item} key={index}>
          <img
            className={styles.image}
            src={src}
            alt={`Gallery Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
