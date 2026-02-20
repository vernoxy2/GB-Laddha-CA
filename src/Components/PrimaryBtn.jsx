import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ BtnText, to }) => {
  return (
    <Link
      to={to}
      className="inline-block font-bold text-white py-1.5 md:py-3 px-2 md:px-4 rounded-md bg-gradient-to-r from-primaryStart to-primaryEnd transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      {BtnText}
    </Link>
  );
};

export default PrimaryBtn;
