import React from "react";
import Titleline from "../../../Components/Titleline";
import { PiMapPinLight, PiPhoneCallLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const officesdirectly = [
  {
    heading: "Head Office",
    city: "Vapi",
    address:
      "G. B. Laddha & Co. LLP 1–2, Second Floor, Sahara Market,Silvassa Road, Vapi – 396191, Gujarat",
    phone: "+91 83477 44411",
    email: "audit@gbladdha.com",
    manager: "CA Giriraj Laddha:",
    managerPhone: "+91 83477 44411",
  },
  {
    heading: "Branch Office",
    city: "Silvassa",
    address: "Office No. 214, Landmark Silvassa - 396230",
    phone: "+91 85610 43853",
    email: "silvassa@gbladdha.com",
    manager: "CA Rahul Modi",
  },
];

// Reusable row component
const InfoRow = ({ Icon, children }) => (
  <p className="flex gap-4">
    <Icon className="text-primaryStart text-3xl shrink-0" />
    {children}
  </p>
);

const OfficesDirect = () => {
  return (
    <section className="container">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <Titleline className="justify-center" Title={"contact us"} />
        <h2 data-aos="fade-up" className="text-3xl font-bold">
          Get in touch with us through the form below or contact our{" "}
          <span className="text-gradient-primary">offices directly</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {officesdirectly.map((office, index) => (
          <div
          data-aos="zoom-in"
            data-aos-delay={index * 300} // 👈 stagger delay
            data-aos-duration="800"
            key={index}
            className="p-8 border border-[#D8D8D8] rounded-lg space-y-5"
          >
            <h2 className="mb-8">
              {office.heading} -{" "}
              <span className="text-gradient-primary">
                {office.city}
              </span>
            </h2>

            <InfoRow Icon={PiMapPinLight}>{office.address}</InfoRow>
            <InfoRow Icon={PiPhoneCallLight}>{office.phone}</InfoRow>

            <InfoRow Icon={GoPerson}>
              {office.manager}
              {office.managerPhone && ` (${office.managerPhone})`}
            </InfoRow>

            <InfoRow Icon={AiOutlineMail}>{office.email}</InfoRow>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficesDirect;