import React from "react";
import styles from "./Footer.module.css"; // Import your CSS module
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.linkGroups}>
            <div className={styles.linkGroup}>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </div>
            <div className={styles.linkGroup}>
              <a href="#" className={styles.link}>
                Book
              </a>
            </div>
            <div className={styles.linkGroup}>
              {/* <h4 className={styles.title}>FAQ</h4> */}
              <a href="#" className={styles.link}>
                FAQ
              </a>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <BsInstagram />
            </a>
            <a href="#" className={styles.icon}>
              <BsTiktok />
            </a>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <a href="#" className={styles.copyrightLink}>
              © 2024 Hafsart
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
