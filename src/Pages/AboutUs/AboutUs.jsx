import React from "react";
import About from "./Components/About";
import Principles from "./Components/Principles";
import Header from "../../Components/Header";
import ContactBg from "../../assets/AboutUsImgs/AboutBg.png";

const AboutUs = () => {
  return (
    <div className="pb-16">
      <Header
        backgroundImage={ContactBg}
        title={"About"}
        color={"Us"}
        subtitle={
          "We go beyond numbers, partnering with businesses to build strong, compliant, and future-ready financial foundations."
        }
      />
      <About />
      <Principles />
    </div>
  );
};

export default AboutUs;
