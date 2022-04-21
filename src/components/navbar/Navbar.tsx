import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default memo(function Navbar() {
  return (
    <div>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/characters">
        Characters
      </Link>
    </div>
  );
});
