import React from "react";
import Bullet from "./bullet";

// const Bullet  = ({ reverse }) => {
//   return (
//     <div className={`flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
//       <div className="h-[3px] w-10 bg-primaryStart rounded-full"></div>
//       <div
//         className={`w-3 h-3 bg-primaryStart rounded-full ${
//           reverse ? "-mr-1" : "-ml-1"
//         }`}
//       ></div>
//     </div>
//   );
// };

const Titleline = ({ Title, className = "", className2 = "" }) => {
  return (
    <div data-aos="fade"
      className={`flex flex-wrap items-center gap-3 py-5 ${className}`}
    >
      <Bullet />
      
      <p
        className={`text-textprimary font-bold uppercase font-dmSans text-center ${className2}`}
      >
        {Title}
      </p>

      <Bullet reverse />
    </div>
  );
};


export default Titleline;
