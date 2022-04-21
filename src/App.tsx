import { Route, Routes } from "react-router-dom";
import Navbar from "components/navbar";
import styles from "css/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route
          element={
            <h1>
              Meet your favorite{" "}
              <span className={styles.gradient}>Jujutsu Kaisen</span> characters
            </h1>
          }
          path="/"
        />
        <Route
          element={
            <h1>
              <span className={styles.gradient}>Characters</span>
            </h1>
          }
          path="/characters"
        />
      </Routes>
    </div>
  );
}

export default App;
