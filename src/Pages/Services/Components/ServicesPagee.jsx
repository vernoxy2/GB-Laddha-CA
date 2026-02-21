import { useRef, useState } from "react";
import Titleline from "../../../Components/Titleline";

// ─── Data ────────────────────────────────────────────────────────────────────

const servicesData = {
  "Management Consultancy": {
    title: "Management",
    highlight: "Consultancy",
    intro:
      "We offer strategic management consulting that empowers organizations to achieve operational excellence and sustainable growth. Our approach combines analytical rigor with practical business wisdom.",
    detail:
      "With decades of cross-industry experience, we guide leadership teams through complex transformations, restructuring, and performance optimization — building resilient organizations for the future.",
    listTitle: "Our Management Consultancy services include:",
    items: [
      "Business strategy development & execution planning",
      "Organizational restructuring and change management",
      "Performance benchmarking and KPI frameworks",
      "Risk management and corporate governance advisory",
    ],
  },
  Taxation: {
    title: "Taxation",
    highlight: "Services",
    intro:
      "We provide comprehensive tax planning and compliance services that minimize liability while ensuring full statutory adherence. Our tax professionals stay ahead of evolving regulations.",
    detail:
      "From corporate tax structuring to international tax planning, we deliver solutions tailored to your business model — helping you make informed decisions with complete tax transparency.",
    listTitle: "Our Taxation services include:",
    items: [
      "Direct and indirect tax compliance & filings",
      "GST registration, returns, and advisory",
      "Transfer pricing documentation and compliance",
      "Tax due diligence for mergers & acquisitions",
    ],
  },
  "Regulatory Services": {
    title: "Regulatory",
    highlight: "Services",
    intro:
      "We offer structured regulatory compliance solutions that simplify statutory requirements and support informed business decisions across industries.",
    detail:
      "Our regulatory experts monitor policy changes and translate complex requirements into actionable compliance frameworks — keeping your business audit-ready at all times.",
    listTitle: "Our Regulatory services include:",
    items: [
      "SEBI, RBI, and sectoral regulatory compliance",
      "License applications and renewals",
      "Compliance audits and gap analysis",
      "Liaison with regulatory authorities",
    ],
  },
  "Public Finance Management (PFM)": {
    title: "Public Finance",
    highlight: "Management (PFM)",
    intro:
      "We support government bodies and public sector organizations with robust financial management frameworks that promote accountability and fiscal discipline.",
    detail:
      "Our PFM specialists bring deep expertise in budget management, public expenditure tracking, and financial reporting — strengthening institutional capacity at every level.",
    listTitle: "Our PFM services include:",
    items: [
      "Budget formulation and expenditure management",
      "Public sector financial reporting and audits",
      "Treasury management and cash flow planning",
      "Capacity building for finance departments",
    ],
  },
  "Accounting & MIS": {
    title: "Accounting",
    highlight: "& MIS",
    intro:
      "We deliver precise bookkeeping, financial reporting, and Management Information Systems that give you real-time visibility into your business performance.",
    detail:
      "From day-to-day accounting to advanced MIS dashboards, our solutions ensure accurate financial data flows seamlessly into strategic decision-making processes.",
    listTitle: "Our Accounting & MIS services include:",
    items: [
      "Full-service bookkeeping and ledger management",
      "Monthly MIS reports and financial dashboards",
      "Accounts payable and receivable management",
      "Financial statement preparation (IND AS / IFRS)",
    ],
  },
  "Company Affairs": {
    title: "Company",
    highlight: "Affairs",
    intro:
      "We manage all aspects of corporate governance and secretarial compliance, ensuring your company meets its statutory obligations with precision and timeliness.",
    detail:
      "Our company affairs team handles everything from incorporation to ongoing MCA filings — freeing your leadership to focus on core business operations.",
    listTitle: "Our Company Affairs services include:",
    items: [
      "Company incorporation and registration",
      "ROC filings and annual compliance",
      "Board meeting management and minutes",
      "FEMA / FDI compliance and reporting",
    ],
  },
  "Audit & Assurance": {
    title: "Audit",
    highlight: "& Assurance",
    intro:
      "Our audit and assurance services provide independent, objective assessments that build stakeholder trust and identify opportunities for operational improvement.",
    detail:
      "We conduct statutory, internal, and forensic audits with a thorough, risk-based approach — delivering insights that go beyond compliance to drive genuine business value.",
    listTitle: "Our Audit & Assurance services include:",
    items: [
      "Statutory and tax audit under Companies Act",
      "Internal audit and process review",
      "Forensic audit and fraud investigation",
      "Due diligence and special purpose audits",
    ],
  },
  "Certification Services": {
    title: "Certification",
    highlight: "Services",
    intro:
      "We provide certifications as required under various statutory provisions, ensuring accuracy and compliance with applicable laws.",
    detail:
      "With decades of hands-on exposure across industries, we assist businesses in managing obligations efficiently while aligning financial practices with long-term operational goals.",
    listTitle: "Our Certification services include:",
    items: [
      "Certifications under the Income Tax Act",
      "Certifications under GST laws",
      "Certifications under other applicable laws and regulations",
    ],
  },
};

const serviceKeys = Object.keys(servicesData);

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceMenuItem({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border
        ${
          isActive
            ? "bg-cyan-400 text-white border-cyan-400 shadow-md shadow-cyan-100"
            : "bg-white text-gray-600 border-gray-200 hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50"
        }`}
    >
      {label}
    </button>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Collaborate <span className="text-cyan-500">With Us?</span>
      </h3>
      <div className="flex flex-col gap-3">
        {[
          { key: "name", placeholder: "Your Name*", type: "text" },
          { key: "email", placeholder: "Your Email*", type: "email" },
          { key: "number", placeholder: "Your Number*", type: "tel" },
        ].map(({ key, placeholder, type }) => (
          <input
            key={key}
            type={type}
            placeholder={placeholder}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:outline-none focus:border-cyan-400 focus:bg-white transition-all duration-200"
          />
        ))}
        <textarea
          placeholder="Message*"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:outline-none focus:border-cyan-400 focus:bg-white transition-all duration-200 resize-none"
        />
        <button className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200 w-fit shadow-md shadow-cyan-100">
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ServiceContent({ service }) {
  const data = servicesData[service];

  return (
    <div key={service} className="animate-fadeIn lg:w-10/12">
      {/* Section Label */}
      
      <Titleline Title="Services" />

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
        {data.title} <span className="text-cyan-500">{data.highlight}</span>
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-3">{data.intro}</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {data.detail}
      </p>

      <hr className="border-gray-100 mb-6" />

      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-6 border-2 border-cyan-200 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80"
          alt="Professional financial services"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Sub-heading */}
      <h3 className="text-lg font-extrabold text-gray-800 mb-4">
        {data.listTitle}
      </h3>

      {/* Service items */}
      <ul className="flex flex-col gap-3">
        {data.items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-gray-600"
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesPagee() {
  const [activeService, setActiveService] = useState("Certification Services");
  const contentRef = useRef(null);

  const handleServiceChange = (key) => {
  setActiveService(key);
  contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  return (
    <div className="container py-12">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease forwards;
        }
      `}</style>

      <div className=" flex flex-col lg:flex-row gap-8">
        {/* ── Left: Service Content ── */}
        <div ref={contentRef} className="flex-1 min-w-0 rounded-2xl">
          <ServiceContent service={activeService} />
        </div>

        {/* ── Right: Sidebar ── */}
        <div className="w-full lg:w-4/12 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
            {/* Quick Services */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick <span className="text-cyan-500">services</span>
            </h3>
            <div className="flex flex-col gap-2">
              {serviceKeys.map((key) => (
                <ServiceMenuItem
                
                  key={key}
                  label={key}
                  isActive={activeService === key}
                  onClick={() => handleServiceChange(key)}
                />
              ))}
            </div>

            {/* Divider */}
            <hr className="border-gray-100 my-6" />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
