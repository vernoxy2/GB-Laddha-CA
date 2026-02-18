import React from "react";
import Demoimg from "../../../assets/TeamImg/DemoImg.svg";

const Leadership = () => {
  return (
    <section className="container py-0">
      <h2 className="text-center">
        Our <span className="text-gradient-primary">Leadership</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2">
        <div className="border-r-2 py-4 pb-8 pr-6">
          <img src={Demoimg} alt="" className="float-left pr-7 pb-7" />
          <h3 className="text-2xl font-bold mb-6 ">
            GST, VAT &{" "}
            <span className="text-gradient-primary">
              Indirect <br /> Tax Litigation
            </span>
          </h3>
          <p>
            Founder PartnerWith decades of experience in Direct Taxation, CA
            Giriraj Laddha leads the firm’s practice in ITAT matters,
            assessments, SCN replies, appeals, and litigation before the High
            Court and Supreme Court. His depth of legal understanding and
            strategic approach to complex tax matters form the backbone of the
            firm’s professional strength.
          </p>
        </div>
        <div className=" py-4 pb-8 px-6 pr-12">
          <img src={Demoimg} alt="" className="float-left px-7 pb-7" />
          <h3 className="text-2xl font-bold mb-6 ">
            CA Seema Bohra,{" "}
            <span className="text-gradient-primary">
              B.Com., F.C.A.
            </span>
          </h3>
          <p>
            Founder PartnerCA Seema Bohra specializes in Direct Taxation, Management Audits, and Trust Audits. She plays a key role in strengthening audit quality and advisory services, ensuring accuracy, compliance, and practical insights for clients across sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
