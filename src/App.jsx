import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import HomePage from "./components/Pages/HomePage/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutPage from "./components/Pages/AboutPage/About.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
