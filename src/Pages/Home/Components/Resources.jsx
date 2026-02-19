import React from "react";
import CountUp from "react-countup";
import ResourcesBg from "../../../assets/HomePageImg/ResourcesBg.png";
import Titleline from "../../../Components/Titleline";

const NumberList = [
  {
    id: 1,
    number: 75,
    suffix: "+",
    text: "Audit & Article Assistants",
  },
  {
    id: 2,
    number: 23,
    suffix: "+",
    text: "Full-Time Employees",
  },
  {
    id: 3,
    number: 14,
    suffix: "+",
    text: "Other Professionals",
  },
  {
    id: 4,
    number: 25,
    suffix: "",
    text: "Executive Staff",
  },
];

const Resources = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${ResourcesBg})` }}
    >
      <div className="container relative flex gap-12 items-center">
        {/* Left Content */}
        <div className="w-1/3 text-white">
          <div className="2xl:w-[82%]">
            <Titleline
              className="justify-start -my-2"
              className2="text-white"
              Title={"Resources"}
            />

            <h2 className="text-3xl font-bold mb-4">
              Our Company{" "}
              <span className="text-gradient-primary">In Number</span>
            </h2>

            <p className="text-white">
              Our expertise is backed by a multidisciplinary team ensuring timely
              delivery, accuracy, and regulatory confidence.
            </p>
          </div>
        </div>

        {/* Right Circles */}
        <div className="w-2/3 flex items-center justify-center">
          <div className="flex -space-x-10">
            {NumberList.map((item) => (
              <div
                key={item.id}
                className="w-56 h-56 rounded-full backdrop-blur-xl bg-white/20 border-2 border-white flex flex-col items-center justify-center text-center text-white hover:text-primaryStart transition duration-300 hover:bg-white space-y-3 group hover:shadow-xl hover:shadow-primaryStart hover:-translate-y-3"
              >
                <h3 className="text-6xl font-bold">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyDelay={200}
                  />
                  {item.suffix}
                </h3>
                <p className="text-xl px-6 text-white group-hover:text-textsecondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
