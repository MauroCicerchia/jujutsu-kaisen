import styles from "css/App.module.scss";
import Navbar from "components/navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route element={<div>HOME</div>} path="/" />
        <Route element={<div>CHARACTERS</div>} path="/characters" />
      </Routes>
    </div>
  );
}

export default App;
