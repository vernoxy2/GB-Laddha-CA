import React from "react";
import MainHeading from "../../../Components/MainHeading";
import Principless from "../../../assets/AboutUsImgs/Principles.png";
import Purpose from "../../../assets/AboutUsImgs/Purpose.png";
import { IoIosEye } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { FaHands } from "react-icons/fa";
import LazyImage from "../../../Components/LazyImage";

const List = [
  {
    id: 1,
    title: "Mission",
    icon: <GoGoal />,
    text: "To deliver reliable professional services with integrity, excellence, and confidentiality, while addressing each client’s unique business needs with care and precision.",
  },
  {
    id: 2,
    title: "Vision",
    icon: <IoIosEye />,
    text: "To build a one-roof professional platform offering comprehensive taxation, audit, and financial solutions—while strengthening the recognition of the Chartered Accountancy profession and contributing to nation-building.",
  },
  {
    id: 3,
    title: "Core Beliefs",
    icon: <FaHands />,
    text: "We believe in strong moral values and professional discipline. There are no shortcuts to quality, and true excellence comes only through knowledge, diligence, and ethical practice.",
  },
  {
    id: 4,
    title: "Professional Ethics",
    icon: <IoIosEye />,
    text: "We strictly adhere to the professional code of conduct and uphold the highest ethical standards. We consciously avoid any action that may compromise professional integrity or bring disrepute to the profession.",
  },
  {
    id: 5,
    title: "Responsibility Towards the Nation",
    icon: <IoIosEye />,
    text: "As India continues to attract global investment, professionals play a vital role in shaping trust and transparency. As responsible professionals and citizens, we remain committed to practices that uphold national values, protect India’s global image, and support sustainable economic growth.",
  },
];

const Principles = () => {
  return (
    <section className="container mx-auto py-12">
      <MainHeading BlackText="Our Purpose &" GradientText="Principles" AOS={'fade-up'} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Images (Sticky) */}
        <div className="flex gap-4 border border-black">
          {" "}
          <LazyImage
            src={Purpose}
            alt=""
            className="flex-shrink-0 w-fit max-h-fit hidden sm:block "
            AOS={'zoom-in'}
          />{" "}
          <LazyImage
            src={Principless}
            alt=""
            className="w-auto sm:w-fit"
            AOS={'zoom-in'}
          />{" "}
        </div>

        {/* Right - Scrollable list */}
        <div className="max-h-[500px] overflow-y-auto pr-4 scroll-hide">
          <ul className="space-y-4 md:space-y-7">
            {List.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 border-b border-textprimary/20 pb-5"
              >
                <div>
                  <div className="flex gap-3 items-center">
                    <span className="text-primaryStart text-5xl">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-2xl text-textsecondary">
                      Our{" "}
                      <span className="text-gradient-primary">
                        {item.title}
                      </span>
                    </h4>
                  </div>
                  <p className="mt-2 text-gray-700">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Principles;
