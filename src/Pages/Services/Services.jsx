import React from 'react';
import Header from '../../Components/Header';
import ServiceBg from "../../assets/AboutUsImgs/AboutBg.png"


const Services = () => {
  return (
    <>
      <Header
        backgroundImage={ServiceBg}
        title={"Our"}
        color={"Services"}
        subtitle={
          "Combining regulatory precision with business insight to provide clear direction and responsible financial stewardship."
        }
      />
    </>
  );
}

export default Services;
