import React from "react";
import Icon1 from "../../../assets/HomePageImg/ScrollIcons/Scrool1.svg";
import LazyImage from "../../../Components/LazyImage";

const ScrollData =  [
  {
    id: 1,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
  {
    id: 2,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
  {
    id: 3,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
  {
    id: 4,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
  {
    id: 5,
    icon: Icon1,
    title: "Full-Service Expertise",
    text: "All Taxation, Audit & Compliance Under One Roof",
  },
];

const Scroll = () => {
  return (
    <div className="overflow-hidden container md:px-0 py-6">
  <div className="flex animate-Scroll w-max">
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
