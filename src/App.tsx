import { Route, Routes } from "react-router-dom";
import { Characters, Home } from "pages";
import Navbar from "components/navbar";
import styles from "css/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Characters />} path="/characters" />
      </Routes>
    </div>
  );
}

export default App;
