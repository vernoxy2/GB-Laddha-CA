import React from "react";
import Map from "./Components/Map";
import Form from "./Components/Form";
import Officesdir from "./Components/officesdir";
import Header from "../../Components/Header";
import ContactBg from "../../assets/ContactUsImg/ContactBg.png";

const ConatactUs = () => {
  return (
    <>
      <Header
        backgroundImage={ContactBg}
        title={"Contact"}
        color={"Us"}
        subtitle={
          "We’re here to assist you with taxation, audit, compliance, advisory, and regulatory requirements. Reach out to us for professional guidance or to schedule a consultation with our team."
        }
      />
      <Officesdir />
      <Form />
      <Map />
    </>
  );
};

export default ConatactUs;
