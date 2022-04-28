import _ from "lodash";
import { Parallax } from "react-parallax";
import banner from "/img/banner.webp";
import logo from "/img/logo.png";
import classNames from "classnames";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section>
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
      <main className={classNames(styles.container, styles.centered)}></main>
    </section>
  );
}
