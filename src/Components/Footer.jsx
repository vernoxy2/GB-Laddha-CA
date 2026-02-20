import React from "react";
import FooterBg from "../assets/FooterBg.png";
import logo from "../assets/FooterLogo.svg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { PiMapPinLight, PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import Bullet from "./bullet";

const FooterLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Our Team", path: "/ourteam" },
  { name: "Contact Us", path: "/contactus" },
];

const ContactData = [
  {
    icon: <PiMapPinLight />,
    name: "Address",
    details: "1-2, Second Floor, Sahara Market, Silvassa Road, Vapi -396 191",
  },
  {
    icon: <PiPhoneCallLight />,
    name: "Mobile No",
    details: "+91 83477 44411",
  },
  { icon: <CiMail />, name: "Email", details: "audit@gbladdha.com" },
];

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${FooterBg})` }}
      className="bg-cover bg-center pt-16 pb-10 rounded-t-3xl text-white"
    >
      {/* Footer Container */}
      <div data-aos="fade-up" className="container grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left section */}
        <div className=" lg:col-span-5  space-y-5">
          <img src={logo} alt="" />
          <p className=" font-dmSans lg:max-w-[85%] text-white">
            <span className="text-gradient-primary font-bold text-xl ">
              M/s. G B laddha and Co. LLP
            </span>{" "}
            incorporated since 2000 by founder member CA Giriraj Baluram Laddha
            & Ramswaroop B. Laddha They started the firm with a vision to have
            all the Taxation, Audit and Financial services “under one roof”.
          </p>

          <p className="text-2xl font-bold font-plusJakartaSans pt-5 text-white">
            Stay Tuned
          </p>
          <div className="flex flex-wrap gap-4">
            <AiFillTwitterCircle className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaFacebook className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaSquareInstagram className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaSquareWhatsapp className="text-5xl text-primaryStart p-2 rounded-full border" />
          </div>
        </div>
        {/* Right section  */}
        <div className=" lg:col-span-7 space-y-4 md:space-y-8">
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="">
              <p className="font-bold text-2xl font-plusJakartaSans text-white">
                Quick Links
              </p>
              <ul className="space-y-3 pt-4 font-dmSans">
                {FooterLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 transition-all duration-200 text-xl ${
                          isActive
                            ? "text-primaryStart font-bold"
                            : "text-white hover:text-primaryStart"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && <Bullet />}
                          <span>{link.name}</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div className="col-span-2">
              <p className="font-bold text-2xl font-plusJakartaSans text-white">
                Contact Us
              </p>
              <ul className="space-y-3 pt-4 font-dmSans">
                {ContactData.map((link) => (
                  <li key={link.name} className="flex items-center gap-4">
                    <div className="text-4xl text-primaryEnd">{link.icon}</div>
                    <div>
                      <p className="font-bold text-gradient-primary text-xl">
                        {link.name}
                      </p>
                      <p className="text-white text-xl">{link.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          {/* Location */}
          <div className="md:flex gap-12 items-center space-y-4">
            <h6 className="text-3xl font-bold font-plusJakartaSans">
              Google <span className="text-gradient-primary">Location</span>
            </h6>
            <div className="border w-full h-28 rounded-2xl mr-16 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.0673994327733!2d72.9166002532068!3d20.369829754362424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cc3ad3def609%3A0x104254f525ea9be9!2sLaddha%20Advisors%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771225817032!5m2!1sen!2sin"
                className="w-full h-full "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laddha Advisors Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-sm text-white/70 hover:underline">
        © {new Date().getFullYear()} Developed by{" "}
        <a href="https://www.vernoxy.com/" target="_blank">
          @Vernoxy
        </a>
      </p>
    </div>
  );
};

export default Footer;
