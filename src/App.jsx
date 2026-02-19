import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PrimaryServiceCard from "./Components/PrimaryServiceCard.jsx";

// Lazy loaded pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs.jsx"));
const Services = lazy(() => import("./Pages/Services/Services.jsx"));
const ConatactUs = lazy(() => import("./Pages/Contact/ConatactUs.jsx"));
const Team = lazy(() => import("./Pages/Team/Team.jsx"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative">
      <div className="h-16 w-16 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<ConatactUs />} />
          <Route path="OurTeam" element={<Team />} />
        </Route>
      </Routes>
          <PrimaryServiceCard />
    </Suspense>
  );
};

export default App;
