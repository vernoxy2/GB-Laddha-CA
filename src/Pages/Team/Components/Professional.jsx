import React, { useState } from "react";
import Titleline from "../../../Components/Titleline";
import ProfessionalBg from "../../../assets/TeamImg/ProfessionalBg.svg";
import Proson from "../../../assets/TeamImg/Person.svg";
import Slider from "react-slick";
// Don't forget to import these CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyImage from "../../../Components/LazyImage";

const ProfessionalTeamList = [
  // {
  //   id: 1,
  //   name: "CA Shravan Kumar Sonthalia",
  //   qualification: "F.C.A.",
  //   text: "",
  // },
  {
    id: 2,
    name: "CA Chhaya M. Kothari",
    qualification: "B.Com., F.C.A., DISA, FAFD",
    text: "Miss Chhaya Kothari, Partner, was enrolled as a Member of ICAI in year 2010 and qualified as DISA in the year 2012. She has experience in the fields of Statutory Audit, Internal Audit, System Audit, Drafting representation for income tax appellate proceedings, Income tax demand issues, refund issues, rectification &amp; other related matters and Tax-planning of business entities.",
  },
  {
    id: 3,
    name: "CA Rahul Modi",
    qualification: "B.Com., F.C.A.",
    text: "Mr. Rahul Modi, Partner, in charge of Silvassa Branch was enrolled as a Member of ICAI in year 2016 and has vast experience in handling the fields of Tax Audits, Statutory Audit, Internal Audit, Stock Audit &amp; GST Audits and related compliances.",
  },
  {
    id: 4,
    name: "CA Khushbu Bohra",
    qualification: "B.Com., A.C.A.",
    text: "Mrs Khushbu Bohra, Partner, was enrolled as a Member of ICAI in year 2019 and possesses strong practical expertise in Direct Taxation and Statutory Audit. She provides  comprehensive advisory and compliance support, assisting clients with tax planning, assessments, and audit requirements while ensuring adherence to regulatory standards.",
  },
  {
    id: 5,
    name: "CA Devanshi Doshi,",
    qualification: "B.Com., F.C.A.",
    text: "Miss Devanshi Doshi, Partner, was enrolled as a Member of ICAI in year 2019 and specialized expertise in Project Finance. She assists clients in financial structuring, loan syndication, documentation, and liaisoning with financial institutions, ensuring efficient funding solutions and timely execution of projects.",
  },
  {
    id: 5,
    name: "CA Lokesh Khadaria,",
    qualification: "B.Com., F.C.A.",
    text: "Mr. Lokesh Khadaria, Partner, was enrolled as a Member of ICAI in year 2010 and qualified as DISA. He brings extensive experience in Concurrent Audit, Indirect Taxation, and GST litigation matters. He provides strategic advisory and representation services, ensuring regulatory compliance and effective resolution of tax disputes.",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-16 left-1/2 ml-2 z-10 w-12 h-12 flex items-center justify-center bg-textsecondary border-2 border-gray-300 rounded-full hover:bg-textprimary hover:border-primaryEnd transition-all duration-300 shadow-md"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-16 left-1/2 -ml-14 z-10 w-12 h-12 flex items-center justify-center bg-textsecondary hover:bg-textprimary border-2 border-gray-300 rounded-full hover:border-primaryEnd transition-all duration-300 shadow-md group-hover:scale-105"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6 text-white "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const Professional = () => {
  const [activeId, setActiveId] = useState(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="py-16 md:py-24 bg-cover"
      style={{ backgroundImage: `url(${ProfessionalBg})` }}
    >
      <div className="container">
        <Titleline className="justify-center" Title={"Our professional team"} />
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-center">
          Experienced Professionals.{" "}
          <span className="text-gradient-primary">Trusted Advisors</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="max-w-4xl text-center mx-auto pt-4">
          Our firm is supported by a strong team of experienced professionals
          who bring specialized expertise across taxation, audit, compliance,
          and advisory services.
        </p>

        <div className="mt-12">
          <Slider {...settings}>
  {ProfessionalTeamList.map((item) => {
    const isExpanded = activeId === item.id;

    return (
      <div key={item.id} className="px-3 h-full">
        <div className="h-full flex-col">
          <LazyImage
            src={Proson}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="p-6 md:p-8 border border-[#D8D8D8] rounded-lg bg-white flex flex-col justify-between w-full">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.qualification}</p>

              <p
                className={`text-gray-700 transition-all duration-300 ${
                  isExpanded ? "" : "line-clamp-4"
                }`}
              >
                {item.text}
              </p>

              {item.text.length > 120 && (
                <button
                  onClick={() =>
                    setActiveId(isExpanded ? null : item.id)
                  }
                  className="text-gradient-primary font-semibold text-sm"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</Slider>
        </div>
      </div>
    </section>
  );
};

export default Professional;
