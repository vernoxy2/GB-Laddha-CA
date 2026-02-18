import React from "react";
import Bg from "../../../assets/TeamImg/Ex/WorldMap.svg";
import Titleline from "../../../Components/Titleline";
import Person from "../../../assets/TeamImg/Ex/Person.svg";

const ExpertsList = [
  {
    id: 1,
    name: "Ramswaroop Laddha",
    text: "Consultancy in Project Finance, Unsecured Loans & Subsidy Assistance",
  },
  {
    id: 2,
    name: "Satendra Sharma",
    text: "Project Finance Consultancy & Corporate Subsidies",
  },
  {
    id: 3,
    name: "Ketan Suchak",
    text: "Project Subsidies for Gujarat, Daman & Silvassa Region",
  },
  {
    id: 4,
    name: "CS Jayant Suthar",
    text: "ROC Compliances, IEC & DGFT Registrations, Trademark, Copyright & Patent Services, New Business Formations & Conversions",
  },
];

const Experts = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className=" md:col-span-2 bg-cover"
        >
          <Titleline className="justify-start" Title={"Associate Experts"} />
          <h2>
            Specialized Associate{" "}
            <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="max-w-lg pt-8">
            Our firm is supported by a network of experienced associate experts
            who bring specialized knowledge in finance, subsidies, and
            regulatory compliances. Their domain expertise strengthens our
            ability to deliver focused and effective solutions across complex
            and niche requirements.
          </p>
        </div>
        {ExpertsList.map((item) => (
          <div
            key={item.id}
            className="relative border border-primaryStart rounded-xl overflow-hidden space-y-3 hover:bg-gradient-primary group duration-500 hover:shadow-lg hover:scale-105"
          >
            {/* Image wrapper */}
            <div className="relative">
              <img src={Person} alt="" className="w-full " />

              {/* Name overlay */}
              <h2 className="absolute bottom-4 left-4 text-white font-bold">
                {item.name}
              </h2>
            </div>

            <div className="pt-7 pb-10 px-12">
              <p className="group-hover:text-white transition-colors duration-300">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
