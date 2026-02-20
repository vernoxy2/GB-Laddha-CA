import React from "react";
import MainHeading from "../../../Components/MainHeading";
import Titleline from "../../../Components/Titleline";
import LazyImage from "../../../Components/LazyImage";
import AboutImg1 from "../../../assets/HomePageImg/AboutImg1.png";
import AboutImg2 from "../../../assets/HomePageImg/AboutImg2.png";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start space-y-4">
      {/* Left side - image */}
      <div className="flex gap-4 w-full justify-center">
        <LazyImage
          data-aos="fade-up"
          data-aos-delay="100"
          src={AboutImg1}
          alt="About Us illustration"
          className="w-full sm:w-auto h-fit object-cover rounded-xl"
        />
        <LazyImage
          data-aos="fade-up"
          data-aos-delay="300"
          src={AboutImg2}
          alt="About Us illustration"
          className="w-1/2 h-auto object-cover rounded-xl hidden sm:block"
        />
      </div>

      {/* Right side - text */}
      <div className="flex flex-col space-y-4 xl:space-y-6  ">
        <Titleline
          data-aos="fade-up"
          data-aos-delay="100"
          Title="About Us"
          className="-my-4 -mb-6 md:text-lg lg:text-xl"
        />
        <MainHeading
          data-aos="fade-up"
          data-aos-delay="200"
          BlackText="One-Stop"
          GradientText="Chartered Accountant"
          afterText="Firm in Vapi for GST, ROC & Tax Planning"
        />
        <p data-aos="fade-up" data-aos-delay="300">
          <strong>G. B. Laddha & Co. LLP</strong> is a Chartered Accountancy
          firm established in 2001 by CA Giriraj Baluram Laddha, with a vision
          to deliver taxation, audit, and financial services under one roof.
          Supported by a team of qualified professionals, we serve businesses
          across Gujarat with reliable compliance, advisory, and government
          subsidy assistance—helping them plan better and grow with confidence.
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="border-t-2 grid grid-cols-2">
          <div className="py-6 space-y-4 flex flex-col items-center justify-center">
            <h6 className="text-gradient-primary text-5xl md:text-6xl font-extrabold font-plusJakartaSans">
              <CountUp
                end={25}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce={true}
              />
              +
            </h6>
            <h3 className="text-center font-bold text-lg md:text-2xl text-textsecondary">
              Years of working <br /> Experience
            </h3>
          </div>
          <div className="border-l-2 flex items-center justify-center">
            <PrimaryBtn to="/aboutus" BtnText="Discover More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
