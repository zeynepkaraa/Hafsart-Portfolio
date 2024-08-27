import styles from "./App.module.css";

import Hero from "./components/Hero/Hero.jsx";
import HomePage from "./components/Pages/HomePage/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className={styles.App}>
      <HomePage />
    </div>
  );
}

export default App;
