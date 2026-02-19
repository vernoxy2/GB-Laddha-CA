import React from "react";
import WhychooseBg from "../../../assets/HomePageImg/WhychooseBg.png";
import Titleline from "../../../Components/Titleline";
import Icon1 from "../../../assets/HomePageImg/WhyChoose/Icon1.svg";
import Icon2 from "../../../assets/HomePageImg/WhyChoose/Icon2.svg";
import Icon3 from "../../../assets/HomePageImg/WhyChoose/Icon3.svg";
import Icon4 from "../../../assets/HomePageImg/WhyChoose/Icon4.svg";
import Icon5 from "../../../assets/HomePageImg/WhyChoose/Icon5.svg";
import Icon6 from "../../../assets/HomePageImg/WhyChoose/Icon6.svg";

const StrengthList = [
  {
    id: 1,
    icon: Icon1,
    title: "Legacy of Trust Since 2000",
    text: "Over 25 years of consistent professional service, built on integrity, accuracy, and long-term client relationships.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Large & Experienced Professional Team",
    text: "Backed by Chartered Accountants, CS, MBAs, Cost Accountants, and trained staff ensuring timely and dependable execution.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "One-Roof Solution for All Compliance Needs",
    text: "Complete taxation, audit, regulatory, litigation, and advisory services handled seamlessly under one roof.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Strong SME & Industrial Expertise",
    text: "Deep understanding of manufacturing, industrial units, and growing businesses across Gujarat’s key commercial hubs.",
  },
  {
    id: 5,
    icon: Icon5,
    title: "Expertise Beyond Routine Filings",
    text: "Specialized handling of assessments, appeals, litigations, and complex regulatory matters before authorities and courts.",
  },
  {
    id: 6,
    icon: Icon6,
    title: "Compliance with a Growth Mindset",
    text: "We go beyond compliance—helping clients optimize tax positions, unlock subsidies, and plan sustainable growth.",
  },
];

const WhyChooseus = () => {
  return (
    <section
      style={{ backgroundImage: `url(${WhychooseBg})` }}
      className="mb-16 bg-cover bg-right-bottom lg:bg-center"
    >
      <div className="container">
        <div className="ml-auto xl:w-2/3 ">
          <Titleline className="justify-start" Title={"why choose us"} />
          <h2 className="text-3xl mb-14 font-bold max-w-[45%]">
            Professional{" "}
            <span className="text-gradient-primary">
              Strength You Can Depend
            </span>{" "}
            On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {StrengthList.map((item) => (
              <div key={item.id} className="space-y-3">
                <img src={item.icon} alt="" className="w-10" />
                  <h3 className="font-bold text-2xl 2xl:max-w-[70%]">{item.title}</h3>
                  <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
