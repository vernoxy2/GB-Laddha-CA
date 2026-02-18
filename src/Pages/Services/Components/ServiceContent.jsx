import LazyImage from "../../../Components/LazyImage";
import Titleline from "../../../Components/Titleline";
import servicesData from "./Servicesdata.Js";

export default function ServiceContent({ service }) {
  const data = servicesData[service];

  return (
    <div key={service} className="animate-fadeIn lg:w-10/12">
      {/* Section Label */}
      <Titleline Title="Services" className="-mb-2" />

      <h2 className="text-3xl font-bold mb-4 leading-tight">
        Introduction <span className="text-gradient-primary">of services</span>
      </h2>

      <p className="mb-4">
        We offer a structured range of professional solutions that simplify
        statutory requirements and support informed business decisions. Our
        service portfolio covers compliance management, audits, regulatory
        filings, advisory, and dispute resolution—delivered through a
        disciplined and process-driven approach.
      </p>

      <p>
        With decades of hands-on exposure across industries, we assist
        businesses in managing obligations efficiently while aligning financial
        practices with long-term operational goals.
      </p>

      <hr className="border-gray-100 mb-6" />

      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
        <LazyImage
          src={data.img}
          alt={data.title}
          className="w-full object-cover"
        />
      </div>
      
      {/* Heading */}
      <h2 className=" font-bold text-gray-900 mb-4 leading-tight">
        {data.title} <span className="text-cyan-500">{data.highlight}</span>
      </h2>

      {/* Description */}
      <p className=" mb-3">{data.intro}</p>
      <p className=" mb-6">
        {data.detail}
      </p>

      {/* Sub-heading */}
      <h3 className="text-2xl font-bold mb-4">
        {data.listTitle}
      </h3>

      {/* Service items */}
      <ul className="flex flex-col gap-6">
        {data.items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-xl text-gray-600"
          >
            <span className="mt-1 text-cyan-400 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
