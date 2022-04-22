import classNames from "classnames";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Character.module.scss";

type Props = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default memo(function Character({
  id,
  name,
  description,
  image,
}: Props) {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.imageContainer}>
        <img
          alt={name}
          className={classNames(styles.image, styles[id])}
          src={image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>
          <Link to={`/character/${id}`}>{name}</Link>
        </h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          <Link to={`/character/${id}`}>View</Link>
        </button>
      </div>
    </div>
  );
});
