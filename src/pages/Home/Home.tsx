import _ from "lodash";
import { Parallax } from "react-parallax";
import banner from "/img/banner.webp";
import logo from "/img/logo.png";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main>
      <Parallax
        bgImage={banner}
        bgImageAlt="jujutsu-kaisen-banner"
        blur={{ min: -7, max: 15 }}
        className={styles.banner}
        strength={500}
      >
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} />
        </div>
      </Parallax>
      <section className={styles.main}>
        <h1 className={styles.title}>Jujutsu Kaisen</h1>
        <h2 className={styles.subtitle}>The new king of Shonen</h2>
      </section>
    </main>
  );
}
