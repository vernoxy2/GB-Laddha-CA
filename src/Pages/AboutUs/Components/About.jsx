import React, { useRef } from "react";
import AboutUss from "../../../assets/AboutUsImgs/AboutUs.png";
import MainHeading from "../../../Components/MainHeading";
import { motion, useInView } from "framer-motion";
import Bullet from "../../../Components/bullet";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const points = [
    "Helping clients reduce risk",
    "Unlock incentives",
    "Grow with confidence",
  ];

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start space-y-0">
      
      {/* Image */}
      <div
        className="w-full lg:w-fit overflow-hidden rounded-3xl mx-auto"
        ref={ref}
      >
        <motion.img
          src={AboutUss}
          alt="About Us illustration"
          className="w-full mx-auto"
          animate={{ scale: isInView ? 1.25 : 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-6">
        <MainHeading
          AOS="fade-up"
          BlackText="About G.B."
          GradientText="Laddha & Co. LLP"
        />

        {[
          `G. B. Laddha & Co. LLP is a trusted Chartered Accountant firm established in 2000 in Vapi, Gujarat, founded by CA Giriraj Baluram Laddha and Ramswaroop B. Laddha with a clear vision of providing taxation, audit, and financial services under one roof.`,
          `With 25+ years of experience, the firm has become a reliable partner for SMEs, manufacturers, corporates, and entrepreneurs, delivering services across GST and income tax compliance, statutory and tax audits, assessments and litigations, ROC and RERA filings, project finance, and government subsidy assistance.`,
        ].map((text, i) => (
          <p
            key={i}
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600"
          >
            {text}
          </p>
        ))}

        <div className="border-t-2 grid md:grid-cols-2">
          
          <div className="py-8 space-y-4">
            <h6
              data-aos="fade-up"
              className="text-2xl font-bold font-plusJakartaSans text-textsecondary"
            >
              Our focus goes{" "}
              <span className="text-gradient-primary">
                beyond compliance
              </span>
            </h6>

            <ul className="space-y-3 md:space-y-4">
              {points.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="text-xl font-dmSans flex items-center gap-4"
                >
                  <span>
                    <Bullet />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l-2 md:py-8 md:pl-10">
            <p data-aos="fade-up" className="text-gray-600">
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