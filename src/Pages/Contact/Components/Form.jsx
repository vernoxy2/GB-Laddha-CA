import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import MapBg from "../../../assets/ContactUsImg/MapBg.png";

const Ids = [
  {
    name: "Audit & Assurance: ",
    email: "audit@gbladdha.com",
  },
  {
    name: "Loans & Project Finance: ",
    email: "loan@gbladdha.com",
  },
  {
    name: "ROC & Corporate Compliance: ",
    email: "roc@gbladdha.com",
  },
  {
    name: "Income Tax & Direct Taxation: ",
    email: "itd@gbladdha.com",
  },
  {
    name: "GST & Indirect Taxation: ",
    email: "gst@gbladdha.com",
  },
  {
    name: "Silvassa Branch: ",
    email: "silvassa@gbladdha.com",
  },
];

const Form = () => {
  return (
    <section style={{backgroundImage: `url(${MapBg})`}} className="container md:flex gap-8 space-y-8 md:space-y-0 bg-contain bg-no-repeat">
      <div className="md:w-4/12 space-y-3">
        <h6 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-semibold text-textprimary">
          Department-wise <br />
          <span className="text-gradient-primary">Email IDs</span>
        </h6>
        <p data-aos="fade-up" data-aos-delay="100" className="sm:max-w-[80%]">
          For faster assistance, you may contact us directly based on your
          requirement:
        </p>
        <div className="space-y-3 ">
          {Ids.map((id, index) => (
            <div key={index} className=" ">
              <p data-aos="fade-up" data-aos-delay="100" className="text-textprimary font-semibold">{id.name}</p>
              <p data-aos="fade-up" data-aos-delay="100" className="text-textsecondary">{id.email}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-8/12 space-y-4 sm:space-y-8">
        <h6 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-semibold text-textprimary">
          Conatact <span className="text-gradient-primary">Us</span>
        </h6>
        <form className="space-y-4 md:space-y-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <input
            data-aos="fade-up" data-aos-delay="100"
              type="text"
              placeholder="Name"
              className="w-full border border-[#D8D8D8] rounded-md p-3"
            />
            <input
            data-aos="fade-up" data-aos-delay="100"
              type="email"
              placeholder="Email"
              className="w-full border border-[#D8D8D8] rounded-md p-3"
            />
            <input
            data-aos="fade-up" data-aos-delay="100"
              type="number"
              placeholder="Phone"
              className="w-full border border-[#D8D8D8] rounded-md p-3"
            />
            <input
            data-aos="fade-up" data-aos-delay="100"
              type="text"
              placeholder="Subject"
              className="w-full border border-[#D8D8D8] rounded-md p-3"
            />
          </div>
          <textarea
          data-aos="fade-up" data-aos-delay="100"
            placeholder="Message"
            className="w-full border border-[#D8D8D8] rounded-md p-3"
            rows={5}
          ></textarea>
          <PrimaryBtn BtnText="Send Message" />
        </form>
      </div>
    </section>
  );
};

export default Form;
