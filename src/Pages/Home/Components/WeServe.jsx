import React from "react";
import WeServeBg from "../../../assets/HomePageImg/WeServeBg.png";
import Titleline from "../../../Components/Titleline";
import Construction from "../../../assets/HomePageImg/IndustriesIcons/Construction.svg";
import Manufacturing from "../../../assets/HomePageImg/IndustriesIcons/Manufacturing.svg";
import Distributors from "../../../assets/HomePageImg/IndustriesIcons/Distributors.svg";
import RealEstate from "../../../assets/HomePageImg/IndustriesIcons/RealEstate.svg";
import Chemicals from "../../../assets/HomePageImg/IndustriesIcons/Chemicals.svg";
import Pharmaceuticals from "../../../assets/HomePageImg/IndustriesIcons/Pharmaceuticals.svg";
import Transportation from "../../../assets/HomePageImg/IndustriesIcons/Transportation.svg";
import Entertainment from "../../../assets/HomePageImg/IndustriesIcons/Entertainment.svg";
import Education from "../../../assets/HomePageImg/IndustriesIcons/Education.svg";
import Engineering from "../../../assets/HomePageImg/IndustriesIcons/Engineering.svg";
import Textiles from "../../../assets/HomePageImg/IndustriesIcons/Textiles.svg";
import Paperindustries from "../../../assets/HomePageImg/IndustriesIcons/Paperindustries.svg";

const IndustriesList = [
  {
    id: 1,
    icon: Construction,
    Ind_name: "Construction",
  },
  {
    id: 2,
    icon: Manufacturing,
    Ind_name: "Manufacturing",
  },
  {
    id: 3,
    icon: Distributors,
    Ind_name: "Traders & Distributors",
  },
  {
    id: 4,
    icon: RealEstate,
    Ind_name: "Real Estate",
  },
  {
    id: 5,
    icon: Chemicals,
    Ind_name: "Chemicals",
  },
  {
    id: 6,
    icon: Pharmaceuticals,
    Ind_name: "Pharmaceuticals",
  },
  {
    id: 7,
    icon: Transportation,
    Ind_name: "Transportation Industry ",
  },
  {
    id: 8,
    icon: Entertainment,
    Ind_name: "Entertainment  Industry ",
  },
  {
    id: 9,
    icon: Education,
    Ind_name: "Education Industry",
  },
  {
    id: 10,
    icon: Engineering,
    Ind_name: "Engineering",
  },
  {
    id: 11,
    icon: Textiles,
    Ind_name: "Textiles & Garments",
  },
  {
    id: 12,
    icon: Paperindustries,
    Ind_name: "Paper industries",
  },
];

const WeServe = () => {
  return (
    <section style={{ backgroundImage: `url(${WeServeBg})` }} className="">
      <div className="container">
        <Titleline className="justify-center" Title={"Industries We serve"} />
        <div className="space-y-4">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Expert Guidance,{" "}
            <span className="text-gradient-primary">Trusted Across Every</span>{" "}
            Industry
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-3xl text-center mx-auto"
          >
            We work closely with businesses across diverse sectors, offering
            industry-specific taxation, audit, compliance, and advisory
            solutions. Our practical understanding of regulatory frameworks and
            business operations enables us to support organizations with
            accuracy, efficiency, and confidence.
          </p>
        </div>
        <div>
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center pt-12 lg:w-11/12 mx-auto">
            {IndustriesList.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 150} // 👈 stagger delay
                data-aos-duration="800"
                key={item.id}
                className="flex items-center group"
              >
                <div className="bg-gradient-primary rounded-full p-3">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 md:w-7 group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="bg-gradient-primary p-[2px] rounded-full inline-block group cursor-default">
                  <h3
                    className="font-bold  md:text-xl text-textsecondary bg-white rounded-full py-2 px-6
                 group-hover:bg-gradient-primary group-hover:text-white
                 transition-all duration-300 inset-0"
                  >
                    {item.Ind_name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServe;
