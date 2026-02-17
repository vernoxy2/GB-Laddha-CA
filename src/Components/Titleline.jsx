import React from "react";

const Bug = ({ reverse }) => {
  return (
    <div className={`flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="h-[3px] w-10 bg-primaryStart rounded-full"></div>
      <div
        className={`w-3 h-3 bg-primaryStart rounded-full ${
          reverse ? "-mr-1" : "-ml-1"
        }`}
      ></div>
    </div>
  );
};

const Titleline = ({ Title, className = "", className2 = "" }) => {
  return (
    <div
      className={`flex items-center gap-3 py-5 ${className}`}
    >
      <Bug />
      
      <p
        className={`text-textprimary font-bold uppercase font-dmSans ${className2}`}
      >
        {Title}
      </p>

      <Bug reverse />
    </div>
  );
};


export default Titleline;
