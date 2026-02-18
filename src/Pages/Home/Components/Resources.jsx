import React from "react";
import ResourcesBg from "../../../assets/HomePageImg/ResourcesBg.png";
import Titleline from "../../../Components/Titleline";

const Resources = () => {
  return (
    <section className="bg-cover" style={{ backgroundImage: `url(${ResourcesBg})` }}>
      <div className="container flex gap-8">
        <div className="w-1/3 ">
          <Titleline
            className="justify-start -my-2"
            className2="text-white"
            Title={"Resources"}
          />
          <h2 className="text-3xl text-white font-bold mb-4">
            Our Company
            <span className="text-gradient-primary">In Number</span>
          </h2>
          <p className="text-white">
            Our expertise is backed by a multidisciplinary team ensuring timely
            delivery, accuracy, and regulatory confidence.
          </p>
        </div>
        <div className="border w-full"></div>
      </div>
    </section>
  );
};

export default Resources;
