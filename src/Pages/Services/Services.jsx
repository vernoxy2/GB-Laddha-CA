import React from 'react';
import Header from '../../Components/Header';
import ServiceBg from "../../assets/ServiceImg/ServiceBg.png";
import ServicesPage from './Components/ServicesPage';
import ServicesPagee from './Components/ServicesPagee';


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
      <ServicesPage />
      {/* <ServicesPagee /> */}

    </>
  );
}

export default Services;
