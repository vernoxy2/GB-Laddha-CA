import React from "react";
import CountUp from "react-countup";
import ResourcesBg from "../../../assets/HomePageImg/ResourcesBg.png";
import Titleline from "../../../Components/Titleline";

const NumberList = [
  {
    id: 1,
    number: 74,
    suffix: "+",
    text: "Audit & Article Assistants",
  },
  {
    id: 2,
    number: 45,
    suffix: "+",
    text: "Full-Time Employees",
  },
  {
    id: 3,
    number: 28,
    suffix: "+",
    text: "Other Professionals",
  },
  {
    id: 4,
    number: 4,
    suffix: "+",
    text: "Executive Staff",
  },
];

const Resources = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${ResourcesBg})` }}
    >
      <div className="container relative xl:flex gap-12 items-center space-y-7">
        {/* Left Content */}
        <div className="xl:w-1/3 text-white">
          <div className="2xl:w-[82%]">
            <Titleline
              className="justify-start -my-2"
              className2="text-white"
              Title={"Resources"}
            />

            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Our Company{" "}
              <span className="text-gradient-primary">In Number</span>
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-white md:max-w-xl"
            >
              Our expertise is backed by a multidisciplinary team ensuring
              timely delivery, accuracy, and regulatory confidence.
            </p>
          </div>
        </div>

        {/* Right Circles */}
        <div className="xl:w-2/3 flex items-center justify-center">
          <div className="flex flex-col md:flex-row justify-center -space-y-5 md:-space-y-0 md:-space-x-10">
            {NumberList.map((item, index) => (
              <div
                data-aos="zoom-out"
                data-aos-delay={index * 150} // 👈 stagger delay
                data-aos-duration="800"
                key={item.id}
                className="w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full backdrop-blur-xl bg-white/20 border-2 border-white flex flex-col items-center justify-center text-center text-white hover:text-primaryStart transition-all duration-300 hover:bg-white space-y-3 group hover:shadow-xl hover:shadow-primaryStart hover:-translate-y-3"
              >
                <h3 className="text-4xl md:text-6xl font-bold">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyDelay={200}
                    scrollSpyOnce={true}
                  />
                  {item.suffix}
                </h3>
                <p className="md:text-xl px-6 text-white group-hover:text-textsecondary">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
