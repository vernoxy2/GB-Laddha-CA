import React from "react";
import FooterBg from "../assets/FooterBg.png";
import logo from "../assets/FooterLogo.svg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiMapPinLight, PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

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
      className="bg-cover py-20 rounded-t-3xl  text-white"
    >
      <div className="container lg:flex justify-center items-center gap-8">
        {/* Left section */}
        <div className=" lg:w-5/12  space-y-4">
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
          <div className="flex gap-4">
            <AiFillTwitterCircle className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaFacebook className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaSquareInstagram className="text-5xl text-primaryStart p-2 rounded-full border" />
            <FaSquareWhatsapp className="text-5xl text-primaryStart p-2 rounded-full border" />
          </div>
        </div>
        <div className=" lg:w-7/12 space-y-8">
          <div className="md:flex gap-14">
            <div >
              <p className="font-bold text-2xl font-plusJakartaSans text-white ">
                Quick Links
              </p>
              <ul className="space-y-3 pt-4 font-dmSans">
                {FooterLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
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
                      <p className="text-white">{link.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex gap-12 items-center ">
            <h6 className="text-3xl font-bold font-plusJakartaSans">
              Google <span className="text-gradient-primary">Location</span>
            </h6>
            <div className="border w-full h-28 rounded-3xl mr-16 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.0673994327733!2d72.9166002532068!3d20.369829754362424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cc3ad3def609%3A0x104254f525ea9be9!2sLaddha%20Advisors%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771225817032!5m2!1sen!2sin"
                className="w-full h-full rounded-3xl"
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
    </div>
  );
};

export default Footer;
