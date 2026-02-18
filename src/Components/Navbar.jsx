import React from "react";
import { NavLink } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import NavLogo from "../assets/NavLogo.svg";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Our Team", path: "/ourteam" },
  { name: "Contact Us", path: "/contactus" },
];

const Navbar = () => {
  return (
    <div className="container -mb-36 py-6">
      <div className="flex justify-between items-center border rounded-lg py-2 bg-white/20 backdrop-blur-lg px-5">
        <img src={NavLogo} alt="Logo" />

        <ul className="flex justify-center items-center space-x-8">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative group font-medium transition duration-300 ${
                    isActive ? "text-primaryEnd" : "text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primaryStart to-primaryEnd transform transition-all duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } origin-left`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <PrimaryBtn BtnText="Get in Touch" to="/contactus" />
      </div>
    </div>
  );
};

export default Navbar;
