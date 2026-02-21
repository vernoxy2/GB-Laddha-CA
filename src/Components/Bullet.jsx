import React from "react";

const Bullet = ({ reverse }) => {
  return (
    <div className={`flex items-center sm:my-auto ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="h-[3px] w-7 bg-primaryStart rounded-full"></div>
      <div
        className={`w-2.5 h-2.5 bg-primaryStart rounded-full ${
          reverse ? "-mr-1" : "-ml-1"
        }`}
      ></div>
    </div>
  );
};

export default Bullet;
