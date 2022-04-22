import classNames from "classnames";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import styles from "./Navbar.module.scss";

export default memo(function Navbar() {
  return (
    <div className={classNames(styles.container, styles.navbar)}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/characters">
          Characters
        </Link>
      </div>
    </div>
  );
});