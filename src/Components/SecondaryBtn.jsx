import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SecondaryBtn = ({ Text, to, onClick, className }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group inline-flex items-center hover:font-semibold  text-white py-1.5 md:py-3 px-2 md:px-4 rounded-md bg-gradient-to-r from-primaryStart to-primaryEnd ease-in-out  transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden ${className}`}
    >
      {Text}

      <span className="ml-2 relative inline-flex items-center justify-center w-7 h-7 overflow-hidden border-2 rounded-full">
        {/* Default icon */}
        <FiChevronRight className="text-lg absolute transition-all duration-500 ease-in-out translate-x-0 opacity-100 group-hover:translate-x-full group-hover:opacity-0" />

        {/* Incoming icon */}
        <FiChevronRight className="text-lg absolute transition-all duration-500 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
};

export default SecondaryBtn;
