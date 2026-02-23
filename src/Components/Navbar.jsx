import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import NavLogo from "../assets/NavLogo.svg";
import LazyImage from "./LazyImage";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  {
    name: "Services",
    path: "/services",
    Children: [
      { name: "Auditing", path: "/services/auditandassurance" },
      {
        name: "Taxation & Assessment",
        path: "/services/taxationandassessment",
      },
      {
        name: "GST",
        path: "/services/GST",
      },
      {
        name: "ROC",
        path: "/services/ROC",
      },
      {
        name: "Project Finance",
        path: "/services/ProjectFinance",
      },
      { name: "Subsidy", path: "/services/subsidy" },
      { name: "Internal Audit", path: "/services/InternalAudit" },
      { name: "HR Audit", path: "/services/hraudit" },
      { name: "FAR Verification", path: "/services/farverification" },
      { name: "Startup advice", path: "/services/startupadvice" },
    ],
  },
  { name: "Our Team", path: "/ourteam" },
  { name: "Contact Us", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between h-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-3 md:px-6">
          {/* Logo */}
          <Link to="/">
            <LazyImage src={NavLogo} alt="Logo" className="w-40 md:w-auto" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-8 h-full">
            {NavLinks.map((link) => (
              <li
                key={link.name}
                className="relative group h-full flex items-center"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive ? "text-primaryEnd" : "text-white"
                    }`
                  }
                >
                  <div className="flex items-center gap-1">
                    {link.name}
                    {link.Children && (
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </div>
                </NavLink>

                {link.Children && (
                  <div
                    className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300"
                  >
                    <ul className="py-3">
                      {link.Children.map((sublink) => (
                        <li key={sublink.name}>
                          <NavLink
                            to={sublink.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primaryEnd transition"
                          >
                            {sublink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
            isOpen ? "max-h-fit opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 space-y-6 text-center">
            {NavLinks.map((link, index) => (
              <div key={link.name}>
                {link.Children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="w-full flex items-center justify-center gap-2 text-lg font-medium text-white"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === index ? "max-h-96 mt-3" : "max-h-0"
                      }`}
                    >
                      <div className="space-y-3 mt-2">
                        {link.Children.map((sublink) => (
                          <NavLink
                            key={sublink.name}
                            to={sublink.path}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block text-base text-gray-300 hover:text-primaryEnd transition"
                          >
                            {sublink.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
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
                )}
              </div>
            ))}

            <PrimaryBtn BtnText="Get in Touch" to="/contactus" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
