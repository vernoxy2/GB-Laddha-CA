import React from "react";
import WeServeBg from "../../../assets/HomePageImg/WeServeBg.png";
import Titleline from "../../../Components/Titleline";
import Icon1 from "../../../assets/HomePageImg/IndustriesIcons/InIcon1.svg";
import Icon2 from "../../../assets/HomePageImg/IndustriesIcons/InIcon2.svg";
import Icon3 from "../../../assets/HomePageImg/IndustriesIcons/InIcon3.svg";
import Icon4 from "../../../assets/HomePageImg/IndustriesIcons/InIcon4.svg";
import Icon5 from "../../../assets/HomePageImg/IndustriesIcons/InIcon5.svg";
import Icon6 from "../../../assets/HomePageImg/IndustriesIcons/InIcon6.svg";
import Icon7 from "../../../assets/HomePageImg/IndustriesIcons/InIcon7.svg";
import Icon8 from "../../../assets/HomePageImg/IndustriesIcons/InIcon8.svg";
import Icon9 from "../../../assets/HomePageImg/IndustriesIcons/InIcon9.svg";

const IndustriesList = [
  {
    id: 1,
    icon: Icon1,
    Ind_name: "Construction",
  },
  {
    id: 2,
    icon: Icon2,
    Ind_name: "Manufacturing",
  },
  {
    id: 3,
    icon: Icon3,
    Ind_name: "Traders & Distributors",
  },
  {
    id: 4,
    icon: Icon4,
    Ind_name: "Real Estate",
  },
  {
    id: 5,
    icon: Icon5,
    Ind_name: "Education Industry",
  },
  {
    id: 6,
    icon: Icon6,
    Ind_name: "Engineering",
  },
  {
    id: 7,
    icon: Icon7,
    Ind_name: "Textiles & Garments",
  },
  {
    id: 8,
    icon: Icon8,
    Ind_name: "Chemicals",
  },
  {
    id: 9,
    icon: Icon9,
    Ind_name: "Pharmaceuticals",
  },
];

const WeServe = () => {
  return (
    <section style={{ backgroundImage: `url(${WeServeBg})` }} className="">
      <div className="container">
        <Titleline className="justify-center" Title={"Industries We serve"} />
        <div className="space-y-4">
          <h2 className="text-3xl  font-bold text-center">
            Expert Guidance,
            <span className="text-gradient-primary">
              Trusted Across Every
            </span>{" "}
            Industry
          </h2>
          <p className="max-w-3xl text-center mx-auto">
            We work closely with businesses across diverse sectors, offering
            industry-specific taxation, audit, compliance, and advisory
            solutions. Our practical understanding of regulatory frameworks and
            business operations enables us to support organizations with
            accuracy, efficiency, and confidence.
          </p>
        </div>
        <div>
          <div className=" flex gap-y-8 gap-x-10 flex-wrap justify-center mt-12 ">
            {IndustriesList.map((item) => (
              <div key={item.id} className="flex items-center group">
                <div className="bg-gradient-primary rounded-full p-3">
                  <img src={item.icon} alt="" className="w-7" />
                </div>
                <div className="bg-gradient-primary p-[2px] rounded-full inline-block group cursor-default">
                  <h3
                    className="font-bold text-xl text-textsecondary bg-white rounded-full py-2 px-6
                 group-hover:bg-gradient-primary group-hover:text-white
                 transition-all duration-300"
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
