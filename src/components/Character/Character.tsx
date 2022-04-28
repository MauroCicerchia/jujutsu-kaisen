import classNames from "classnames";
import React, { memo } from "react";
import Button from "components/Button";
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
    <Link to={`/character/${id}`}>
      <section className={styles.characterContainer}>
        <div className={styles.imageContainer}>
          <img
            alt={name}
            className={classNames(styles.image, styles[id])}
            src={image}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h3 className={styles.name}>
              <Link to={`/character/${id}`}>{name}</Link>
            </h3>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.button}>
            <Link to={`/character/${id}`}>
              <Button>View more</Button>
            </Link>
          </div>
        </div>
      </section>
    </Link>
  );
});
