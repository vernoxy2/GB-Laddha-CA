import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ BtnText, to, className }) => {
  return (
    <Link
    data-aos="zoom-in-up"
      to={to}
      className={`group inline-flex items-center font-bold text-white py-3 px-4 rounded-md bg-gradient-to-r from-primaryStart to-primaryEnd transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden ${className}`}
    >
      {BtnText}

      <span className="ml-2 relative inline-flex w-6 h-6 overflow-hidden">
        {/* Default icon — flies out to top-right on hover */}
        <FaTelegramPlane className="text-2xl absolute transition-all duration-500 ease-in-out translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:-translate-y-full opacity-100 group-hover:opacity-0" />

        {/* Incoming icon — enters from bottom-left on hover */}
        <FaTelegramPlane className="text-2xl absolute transition-all duration-500 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
};

export default PrimaryBtn;
