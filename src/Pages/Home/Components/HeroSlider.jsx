import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Hero1 from "../../../assets/HomePageImg/Slider/Hero1.png";
import Hero2 from "../../../assets/HomePageImg/Slider/Hero1.png";

import "swiper/css";
import "swiper/css/pagination";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import { ChevronRightIcon } from "lucide-react";

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
    badge: "25+ Years Experience",
    title: (
      <h1 className="font-bold">
        Of Trusted{" "}
        <span className="text-gradient-primary">Chartered Accountancy</span> in
        Vapi
      </h1>
    ),
    subtitle: "Our Priority",
    desc: "Expert solutions in taxation, audits, GST compliance, subsidy assistance, ROC filings, and more all under one roof, helping Gujarat businesses grow with confidence and complete peace of mind.",
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
    <section className="w-full py-0 relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        speed={1200}
        loop
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full py-24 flex items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Content */}
              <div className="relative container mx-auto text-white">
                <div className="w-full lg:w-1/2 2xl:w-[40%] space-y-3">
                  {/* Badge */}
                  {slide.badge && (
                    <div className="inline-flex items-center gap-3">
                      <span className="text-8xl font-bold font-plusJakartaSans text-transparent text-stroke-only">
                        {slide.badge.split(" ")[0]}
                      </span>
                      <div className="w-0.5 h-20 bg-white" />
                      <span className="text-white text-2xl font-bold tracking-widest font-plusJakartaSans w-28">
                        {slide.badge.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  )}

                  <h1>{slide.title}</h1>
                  <p className="text-white">{slide.desc}</p>

                  <PrimaryBtn
                    BtnText={slide.buttonText}
                    to={slide.buttonLink}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Bottom-Right Navigation Buttons */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2">
        {/* Prev Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all duration-300"
        >
          <ChevronRightIcon className="rotate-180 text-white transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all duration-300"
        >
          <ChevronRightIcon className=" text-white transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
