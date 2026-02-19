import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import NavLogo from "../assets/NavLogo.svg";
import LazyImage from "./LazyImage";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Our Team", path: "/ourteam" },
  { name: "Contact Us", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-3">

          {/* Logo */}
          <Link to="/">
          <LazyImage src={NavLogo} alt="Logo" className="w-40 md:w-auto" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition duration-300 ${
                      isActive ? "text-primaryEnd" : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primaryStart to-primaryEnd transition-transform duration-300 origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <PrimaryBtn BtnText="Get in Touch" to="/contactus" />
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 space-y-6 text-center">
            {NavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium transition ${
                    isActive ? "text-primaryEnd" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <PrimaryBtn BtnText="Get in Touch" to="/contactus" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
