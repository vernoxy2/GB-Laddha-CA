import React from "react";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Services from "./Pages/Services/Services.jsx";
import ConatactUs from "./Pages/Contact/ConatactUs.jsx";
import Team from "./Pages/Team/Team.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ConatactUs />} />
        <Route path="/OurTeam" element={<Team />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
