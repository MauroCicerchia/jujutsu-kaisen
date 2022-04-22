import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Characters from "pages/Characters";
import Navbar from "components/Navbar";
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
