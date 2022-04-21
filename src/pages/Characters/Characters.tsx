import React from "react";
import styles from "./Characters.module.scss";

export default function Characters() {
  return (
    <div className={styles.container}>
      <div className={styles.characters}>
        <h1 className={styles.gradient}>Characters</h1>
      </div>
    </div>
  );
}
