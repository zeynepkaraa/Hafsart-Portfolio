import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import HomePage from "./components/Pages/HomePage/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutPage from "./components/Pages/AboutPage/About.jsx";
import LiveEvents from "./components/Pages/EventPage/LiveEvents.jsx";
import Weddings from "./components/Pages/EventPage/Weddings.jsx";
import CustomPortraits from "./components/Pages/EventPage/CustomPortraits.jsx";
import EventDetail from "./components/Event/EventDetail.jsx";
import Portfolio from "./components/Pages/PortfolioPage/Portfolio.jsx";
import Book from "./components/Pages/BookPage/Book.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="book" element={<Book />} />
        <Route path="/live/:id" element={<EventDetail />} />
        <Route path="/wedding/:id" element={<EventDetail />} />
        <Route path="/custom/:id" element={<EventDetail />} />
        <Route path="/live" element={<LiveEvents />} />
        <Route path="/wedding" element={<Weddings />} />
        <Route path="/custom" element={<CustomPortraits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
