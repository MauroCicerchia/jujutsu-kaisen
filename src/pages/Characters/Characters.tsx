import React from "react";
import characters from "data/characters";
import Character from "components/Character";
import styles from "./Characters.module.scss";

export default function Characters() {
  return (
    <main className={styles.charactersContainer}>
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </main>
  );
}
