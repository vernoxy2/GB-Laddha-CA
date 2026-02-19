import React from "react";
import Titleline from "../../../Components/Titleline";
import SerIcon1 from "../../../assets/HomePageImg/ServiceIcon/SerIcon1.svg";
import SerIcon2 from "../../../assets/HomePageImg/ServiceIcon/SerIcon2.svg";
import SerIcon3 from "../../../assets/HomePageImg/ServiceIcon/SerIcon3.svg";
import SerIcon4 from "../../../assets/HomePageImg/ServiceIcon/SerIcon4.svg";
import SerIcon5 from "../../../assets/HomePageImg/ServiceIcon/SerIcon5.svg";
import SerIcon6 from "../../../assets/HomePageImg/ServiceIcon/SerIcon6.svg";

const ServicesList = [
  {
    id: 1,
    icon: SerIcon1,
    title: "Audit & Assurance  Services",
    subtext:
      "We provide independent and reliable audit services to ensure accuracy, transparency, and statutory compliance. Our audit approach strengthens financial credibility and builds long-term stakeholder confidence.",
    link: "",
  },
  {
    id: 2,
    icon: SerIcon2,
    title: "Taxation & Regulatory Compliance",
    subtext:
      "We handle end-to-end taxation and regulatory compliance, helping businesses meet their statutory obligations seamlessly. Our proactive approach minimizes risk while ensuring timely and accurate filings.",
    link: "",
  },
  {
    id: 3,
    icon: SerIcon3,
    title: "GST, VAT & Indirect Tax Litigation",
    subtext:
      "We represent clients in complex indirect tax matters, including assessments, appeals, and litigation. Our expertise ensures strong compliance defense and effective resolution of disputes.",
    link: "",
  },
  {
    id: 4,
    icon: SerIcon4,
    title: "Corporate, ROC & Legal Compliance",
    subtext:
      "We support companies and LLPs with comprehensive corporate and legal compliance services. From statutory filings to regulatory representations, we help businesses stay compliant and well-governed.",
    link: "",
  },
  {
    id: 5,
    icon: SerIcon5,
    title: "Business Advisory, Finance & Subsidy Assistance",
    subtext:
      "We assist businesses with financial planning, project finance, and government subsidy support. Our advisory services are designed to improve financial efficiency and enable sustainable growth.",
    link: "",
  },
  {
    id: 6,
    icon: SerIcon6,
    title: "Specialised Registrations & Certifications",
    subtext:
      "We offer specialized registration and certification services tailored to specific regulatory and business needs. Our structured process ensures accuracy, compliance, and hassle-free approvals.",
    link: "",
  },
];

const OurServices = () => {
  return (
    <section className="container">
      <div>
        <Titleline Title={"Our Services"} className="justify-center -mb-2" />
        <h2 className="text-center">
          Professional <span className="text-gradient-primary">Accounting</span>{" "}
          Services
        </h2>
        <p className="text-center max-w-4xl mx-auto mt-3">
          <strong>With over 25 years</strong> of professional experience, we
          offer a comprehensive range of audit, taxation, compliance,
          litigation, and advisory services under one roof. Our
          multidisciplinary team brings deep regulatory knowledge and practical
          insight to support businesses, institutions, and individuals across
          diverse legal and financial requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {ServicesList.map((item) => (
          <div
            key={item.id}
            className="space-y-3 group hover:bg-gradient-primary duration-300 rounded-2xl h-full px-6 py-9 border-2 border-primaryStart flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex gap-8">
                <img
                  src={item.icon}
                  alt=""
                  className="transition duration-200 group-hover:brightness-0 group-hover:invert flex items-center justify-center"
                />
                <h3 className="font-bold text-2xl group-hover:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="group-hover:text-white">{item.subtext}</p>
            </div>
            <button
              className="bg-gradient-primary 
             group-hover:bg-none 
             group-hover:bg-white 
             group-hover:text-primaryStart 
             text-white 
             py-3 px-4 
             rounded-lg 
             transition-all duration-300 w-fit"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
