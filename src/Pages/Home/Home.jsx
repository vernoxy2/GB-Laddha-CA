import React from "react";
import WhyChooseus from "./Components/WhyChooseus";
import Header from "../../Components/Header";
import TeamBg from "../../assets/TeamImg/TeamBg.png"
import WeServe from "./Components/WeServe";
import Resources from "./Components/Resources";
import OurServices from "./Components/Ourservices";
import AboutUs from "./Components/AboutUs";
import Scroll from "./Components/Scroll";


const Home = () => {
  return (
    <>
    <Header
        backgroundImage={TeamBg}
        title={"Our"}
        color={"Team"}
        subtitle={
          "A multidisciplinary team of professionals delivering ethical, reliable, and solution-driven expertise with consistency, collaboration, and client-focused excellence."
        }
      />
      <Scroll/>
      <AboutUs/>
      <OurServices />
      <Resources />
      <WeServe />
      <WhyChooseus />
    </>
  );
};

export default Home;
