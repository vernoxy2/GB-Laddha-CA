import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Hero1 from "../../../assets/HomePageImg/Slider/Slide1.png";
import Hero2 from "../../../assets/HomePageImg/Slider/Slide2.png";
import Hero3 from "../../../assets/HomePageImg/Slider/Slide3.png";

import "swiper/css";
import "swiper/css/pagination";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import { ChevronRightIcon } from "lucide-react";
import SecondaryBtn from "../../../Components/secondaryBtn";

const slides = [
  {
    id: 1,
    bg: Hero1,
    badge: "25+ Years Experience",
    title: (
      <h1 className="font-bold">
        Of Trusted{" "}
        <span className="text-gradient-primary">Chartered Accountancy</span> in
        Vapi
      </h1>
    ),
    subtitle: "Securing Property",
    desc: "Expert solutions in taxation, audits, GST compliance, subsidy assistance, ROC filings, and more all under one roof, helping Gujarat businesses grow with confidence and complete peace of mind.",
    buttonText: "Request Free Consultation",
    buttonLink: "/contactus",
  },
  {
    id: 2,
    bg: Hero2,
    // badge: "25+ Years Experience",
    title: (
      <h1 className="font-bold">
        Your Trusted Partner for Subsidies{" "}
        <span className="text-gradient-primary">& Compliance</span>
      </h1>
    ),
    subtitle: "Our Priority",
    desc: "Specialized guidance on Gujarat Govt schemes, Central incentives, GST, income tax, statutory audits, and more – helping industrial units in Gujarat, maharashtra, daman and diu, Silvassa and dadra nagar haveli, and beyond unlock funding and stay fully compliant with ease.",
    buttonText: "Request Free Consultation",
    buttonLink: "/contactus",
  },
  {
    id: 3,
    bg: Hero3,
    badge: "2026 GST Compliance",
    title: (
      <h1 className="font-bold">
        From Registration to Litigation Full Support Under{" "}
        <span className="text-gradient-primary">One Roof</span>
        
      </h1>
    ),
    subtitle: "Our Priority",
    desc: "Seamless GST handling from registration to litigation defense — expert filings, refund maximization, notice replies & advisory, aligned with 2026 reforms for Gujarat businesses.",
    buttonText: "Request Free Consultation",
    buttonLink: "/contactus",
  },
];

const HeroSlider = () => {
  const [swiperData, setSwiperData] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([import("swiper/react"), import("swiper/modules")]).then(
        ([swiperReact, swiperModules]) => {
          setSwiperData({
            Swiper: swiperReact.Swiper,
            SwiperSlide: swiperReact.SwiperSlide,
            Autoplay: swiperModules.Autoplay,
            Pagination: swiperModules.Pagination, // ✅ add this
          });
        },
      );
    }
  }, []);

  if (!swiperData) {
    return <div className="h-screen bg-gray-200" />;
  }

  const { Swiper, SwiperSlide, Autoplay, Pagination } = swiperData;

  return (
  <section className="w-full relative overflow-hidden py-0">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      speed={1200}
      loop
      pagination={{ clickable: true }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="w-full  h-[460px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative h-full flex items-center bg-cover bg-center pt-20"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative container text-white">
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">

                {/* Badge */}
                {slide.badge && (
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-bold font-plusJakartaSans">
                      {slide.badge.split(" ")[0]}
                    </span>

                    <div className="w-[2px] h-12 sm:h-16 bg-white" />

                    <span className="text-sm sm:text-lg lg:text-xl font-semibold tracking-wider">
                      {slide.badge.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                )}

                {/* Title */}
                <div className="text-2xl sm:text-4xl lg:text-5xl leading-tight">
                  {slide.title}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl">
                  {slide.desc}
                </p>

                {/* Button */}
                <div>
                  <SecondaryBtn
                    Text={slide.buttonText}
                    to={slide.buttonLink}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Navigation Buttons */}
    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex gap-3">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary transition-all duration-300"
      >
        <ChevronRightIcon className="rotate-180 text-white group-hover:-translate-x-1 transition" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary transition-all duration-300"
      >
        <ChevronRightIcon className="text-white group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);
};

export default HeroSlider;
