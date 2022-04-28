import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import styles from "./Navbar.module.scss";

export default memo(function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <nav className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/characters">
          Characters
        </Link>
      </nav>
    </header>
  );
});
