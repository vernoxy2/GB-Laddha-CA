import React from "react";
import Icon1 from "../../../assets/HomePageImg/ScrollIcons/Scroll1.svg";
import Icon2 from "../../../assets/HomePageImg/ScrollIcons/Scroll2.svg";
import Icon3 from "../../../assets/HomePageImg/ScrollIcons/Scroll3.svg";
import Icon4 from "../../../assets/HomePageImg/ScrollIcons/Scroll4.svg";
import LazyImage from "../../../Components/LazyImage";

const ScrollData = [
  {
    id: 1,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Local Gujarat Mastery",
    text: "Specialized in Gujarat Schemes & Subsidies",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Proven Reliability",
    text: "25+ Years of Trusted Service in Vapi",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Business Growth Focus",
    text: "Unlock Funding, Refunds & Sustainable Growth",
  },
];

const Scroll = () => {
  return (
    <div className="overflow-hidden container md:px-0 py-6">
      <div className="flex animate-scroll w-max">
        {[...ScrollData, ...ScrollData].map((item, index) => (
          <div
            key={item.id + "-" + index}
            className="mx-4 flex-shrink-0 w-80 lg:w-96"
          >
            <div className="flex items-center gap-4">
              <LazyImage
                src={item.icon}
                alt={item.title}
                className="h-12 w-auto"
              />
              <div>
                <p className="text-primaryStart text-lg md:text-2xl font-plusJakartaSans">
                  {item.title}
                </p>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
