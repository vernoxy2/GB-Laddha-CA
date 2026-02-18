import React from "react";
import MainHeading from "../../../Components/MainHeading";
import Titleline from "../../../Components/Titleline";
import LazyImage from "../../../Components/LazyImage";
import AboutImg1 from "../../../assets/HomePageImg/AboutImg1.png";
import AboutImg2 from "../../../assets/HomePageImg/AboutImg2.png";

const AboutUs = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start space-y-0">
      {/* Left side - image */}
      <div className="flex gap-4">
        <LazyImage
          src={AboutImg1}
          alt="About Us illustration"
          className="w-fit h-fit"
        />
        <LazyImage
          src={AboutImg2}
          alt="About Us illustration"
          className="w-fit h-fit"
        />
      </div>

      {/* Right side - text */}
      <div className="flex flex-col space-y-6 ">
        <Titleline Title="About Us" className="-my-2 -mb-6" />
        <MainHeading
          BlackText="One-Stop"
          GradientText="Chartered Accountant"
          afterText="Firm in Vapi for GST, ROC & Tax Planning"
        />
        <p>
          <strong>G. B. Laddha & Co. LLP</strong> is a Chartered Accountancy
          firm established in 2000 by CA Giriraj Baluram Laddha and CA
          Ramswaroop B. Laddha, with a vision to deliver taxation, audit, and
          financial services under one roof.Supported by a team of qualified
          professionals, we serve businesses across Gujarat with reliable
          compliance, advisory, and government subsidy assistance helping them
          plan better and grow with confidence.
        </p>

        <div className="border-t-2 grid grid-cols-2">
          <div className="py-6 space-y-4 flex flex-col items-center justify-center">
            <h6 className="text-gradient-primary text-6xl font-extrabold font-plusJakartaSans">25+</h6>
            <h3 className="text-center font-bold text-2xl text-textsecondary">
              Years of working  <br /> Experience
            </h3>
          </div>
          <div className="border-l-2 py-8 pl-10 flex items-center justify-center">
            <button className="inline-block font-bold text-white py-3 px-4 rounded-md bg-gradient-to-r from-primaryStart to-primaryEnd transition duration-300 hover:scale-105 hover:shadow-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
