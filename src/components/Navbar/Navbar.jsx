import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";
  return (
    <nav className={styles.navbar}>
      <a
        className={`${styles.title} ${!isHomePage ? styles.newTitle : ""}`}
        href="/"
      >
        Hafsart
      </a>

      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <IoMenu />}
        </div>

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/book">Book</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
