import React from "react";
import ContactBg from "../assets/ContactUsImg/ContactBg.png";

const Header = ({ title, color, subtitle , backgroundImage}) => {
  return (
    <div className="bg-cover pt-48" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container space-y-6 py-40">
        <h1 className="text-white ">
          {title}<span className="text-gradient-primary"> {color}</span>
        </h1>
        <p className="text-white max-w-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
