import React, { useRef } from "react";
import AboutUss from "../../../assets/AboutUsImgs/AboutUs.png";
import MainHeading from "../../../Components/MainHeading";
import { motion, useInView } from "framer-motion";

const About = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start space-y-0">
      {/* Left side - image */}
      <div className="w-fit overflow-hidden rounded-3xl" ref={ref}>
      <motion.img
        src={AboutUss}
        alt="About Us illustration"
        className="w-full"
        animate={{ scale: isInView ? 1.25 : 1 }}
        transition={{ duration: 1 }}
      />
    </div>

      {/* Right side - text */}
      <div className="flex flex-col space-y-6 ">
        <MainHeading BlackText="About G.B." GradientText="Laddha & Co. LLP" />
        <p className="text-gray-600">
          G. B. Laddha & Co. LLP is a trusted Chartered Accountant firm
          established in 2000 in Vapi, Gujarat, founded by CA Giriraj Baluram
          Laddha and Ramswaroop B. Laddha with a clear vision of providing
          taxation, audit, and financial services under one roof.
        </p>
        <p className="text-gray-600">
          With 25+ years of experience, the firm has become a reliable partner
          for SMEs, manufacturers, corporates, and entrepreneurs, delivering
          services across GST and income tax compliance, statutory and tax
          audits, assessments and litigations, ROC and RERA filings, project
          finance, and government subsidy assistance.
        </p>
        <div className="border-t-2 grid grid-cols-2">
          <div className="py-8 space-y-4">
            <h6 className="text-2xl font-bold font-plusJakartaSans text-textsecondary">
              Our focus goes{" "}
              <span className="text-gradient-primary">beyond compliance</span>
            </h6>
            <ul className="space-y-4">
              <li className="text-xl font-dmSans">
                Helping clients reduce risk
              </li>
              <li className="text-xl font-dmSans">Unlock incentives</li>
              <li className="text-xl font-dmSans">Grow with confidence</li>
            </ul>
          </div>
          <div className="border-l-2 py-8 pl-10">
            <p>
              Backed by a strong team of CAs, CS, MBAs, Cost Accountants, and
              trained professionals, we combine regulatory expertise with a
              practical, business-focused approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
