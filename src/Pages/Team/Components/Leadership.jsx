import React from "react";
import Demoimg from "../../../assets/TeamImg/DemoImg.svg";

const Leadership = () => {
  return (
    <section className="container py-0">
      <h2 className="text-center">
        Our <span className="text-gradient-primary">Leadership</span>
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 border-b-2">
        <div className="xl:border-r-2 py-4 xl:pb-8 xl:pr-6 border-b-2">
          <img data-aos="fade" data-aos-delay="200" src={Demoimg} alt="" className="w-full sm:w-auto sm:float-left sm:pr-7 pb-7" />
          <h3 data-aos="fade" data-aos-delay="100" className="text-2xl font-bold mb-6 ">
            CA Giriraj Laddha, <br />
            <span className="text-gradient-primary">B.Com., F.C.A.</span>
          </h3>
          <p data-aos="fade-down" data-aos-delay="100">
            <strong>Founder Partner</strong> <br />
            Mr. Giriraj B Laddha, Founder Partner of M/s G B Laddha &amp; Co.LLP
            was enrolled as a Member of ICAI in year 2000 and has an experience
            in the fields of accounting, auditing, risk management and
            consulting profession. He is well in Accounting and Auditing
            Standards, Management Consultancy, Information System Audit,
            Information System Consulting, Risk Management etc.
          </p>
        </div>
        <div className=" py-4 xl:pb-8 xl:px-6">
          <img data-aos="fade" data-aos-delay="200" src={Demoimg} alt="" className="w-full sm:w-auto sm:float-left xl:px-7 sm:pr-7 pb-7" />
          <h3 data-aos="fade" data-aos-delay="100" className="text-2xl font-bold mb-6 ">
            CA Seema Bohra,{" "} <br />
            <span className="text-gradient-primary">B.Com., F.C.A.</span>
          </h3>
          <p data-aos="fade-down" data-aos-delay="100">
            <strong>Founder Partner</strong> <br />
            Mrs. Seema Bohra, founder Partner, was enrolled as a Member of ICAI
            in year 2000 and brings over two decades of professional experience
            in corporate compliance and advisory. She specializes in ROC
            compliances, Secretarial Audit, and corporate legal services. With
            strong expertise in regulatory frameworks, she provides strategic
            guidance to ensure statutory compliance and sound corporate
            governance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
