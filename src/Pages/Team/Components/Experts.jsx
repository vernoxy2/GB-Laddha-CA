import React from "react";
import Bg from "../../../assets/TeamImg/Ex/WorldMap.svg";
import Titleline from "../../../Components/Titleline";
import Person from "../../../assets/TeamImg/Ex/Person.svg";

const ExpertsList = [
  {
    id: 1,
    name: "Ramswaroop Laddha",
    text: "Specialized in structuring and facilitating project finance solutions, including arrangement of unsecured loans and comprehensive assistance in securing eligible government subsidies. Provides end-to-end advisory support from documentation to disbursement, ensuring compliance and timely execution for businesses across sectors.",
  },
  {
    id: 2,
    name: "Satendra Sharma",
    text: "Expert in designing customized project finance strategies and assisting corporates in availing state and central government subsidy schemes. Strong experience in financial feasibility assessment, documentation, liaisoning, and successful subsidy claim processing.",
  },
  {
    id: 3,
    name: "Ketan Suchak",
    text: "Dedicated consultant for project subsidy advisory across Gujarat, Daman, and Silvassa. Extensive knowledge of regional industrial policies, incentive schemes, and regulatory procedures. Supports businesses in maximizing financial benefits through structured subsidy planning and compliance management.",
  },
  {
    id: 4,
    name: "CS Jayant Suthar",
    text: "Company Secretary with comprehensive expertise in ROC compliances, IEC & DGFT registrations, trademark, copyright, and patent services. Advises on new business formations, corporate restructuring, and entity conversions while ensuring full statutory compliance under applicable corporate laws.",
  },
  {
    id: 5,
    name: "CA Bharat Jain",
    text: "Chartered Accountant with expertise in internal and management audits, risk assessment, and process optimization. Provides comprehensive GST assessment support, appellate representation, and strategic tax advisory services to ensure regulatory compliance and financial efficiency.",
  },
  {
    id: 6,
    name: "Adv. Mitesh Mahayavanshi",
    text: "Experienced in direct tax advisory, statutory audits, and financial compliance matters. Assists clients with tax planning, return filing, assessments, and representation before tax authorities, ensuring adherence to applicable laws and regulations.",
  },
  {
    id: 7,
    name: "ITP. Priyesh Ghetia",
    text: "Specializes in income tax assessments, scrutiny handling, and compliance advisory. Provides structured guidance on tax filings, notices, and regulatory documentation to ensure smooth assessment proceedings.",
  },
  {
    id: 8,
    name: "Chetan Talekar",
    text: "Professional expertise in direct tax compliance, statutory audits, and financial reporting. Supports businesses in tax planning, regulatory adherence, and audit execution to strengthen financial governance.",
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
            Our firm is supported by a network of experienced associate experts who bring
specialized knowledge in finance, subsidies, and regulatory compliances. Their
domain expertise strengthens our ability to deliver focused and effective solutions
across complex and niche requirements.
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
