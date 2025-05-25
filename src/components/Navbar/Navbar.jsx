import React from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils.js";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
    </nav>
  );
};
