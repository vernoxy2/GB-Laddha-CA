import { img } from "framer-motion/client";
import Management from "../../../assets/ServiceImg/Management.png";
import Taxation from "../../../assets/ServiceImg/Taxation.png";
import Regulatory from "../../../assets/ServiceImg/Regulatory.png";
import Finance from "../../../assets/ServiceImg/Finance.png";
import Accounting from "../../../assets/ServiceImg/Accounting.png";
import Company from "../../../assets/ServiceImg/Company.png";
import Audit from "../../../assets/ServiceImg/Audit.png";
import Certification from "../../../assets/ServiceImg/Certification.png";


const servicesData = {
  "Management Consultancy": {
    img: Management,
    title: "Management",
    highlight: "Consultancy",
    intro:
      "Our management consultancy services are designed to help organizations improve performance, address operational challenges, and plan sustainable growth. We work closely with management teams to analyse existing structures, identify gaps, and implement practical strategies aligned with business objectives.",
    detail:
      "Our integrated approach covers planning, execution, financial structuring, compliance, and process optimization—ensuring that recommendations are realistic, actionable, and measurable.",
    listTitle: "Our Management Consultancy services include:",
    items: [
      "Business Planning & Strategic Planning",
      "Accounting Outsourcing",
      "Business Plan Preparation",
      "Business Valuation",
      "Comparative Analysis of Financial Reports",
      "Compliance Outsourcing",
      "Due Diligence",
      "Feasibility Assessment",
      "Internal Restructuring Consultancy",
      "Organisation Assessment Survey",
      "SOP (Standard Operating Procedure) Development",
      "Strategic Consulting",
      "Transactional Services",
      "Mergers & Acquisitions"
    ],
  },
  Taxation: {
    img: Taxation,
    title: "Taxation",
    highlight: "Services",
    intro:
      "With frequent changes in tax laws and increasing regulatory complexity, effective tax planning and compliance have become critical for businesses. We provide practical, well-researched tax advisory services to help clients manage obligations efficiently while optimizing tax positions.",
    detail:
      "Our team keeps clients informed about changes in taxation regimes and assists them in navigating assessments, planning, and representations before authorities.",
    listTitle: "Our Taxation services include:",
    items: [
      "Direct Tax Advisory & Compliance",
      "GST Advisory & Compliance",
      "Income Tax Planning",
      "Consultancy regarding GST matters",
      "Tax Calculations & Strategic Tax Planning",
      "Representation before various authorities up to ITAT in Direct Taxes"
    ],
  },
  "Regulatory Services": {
    img: Regulatory,
    title: "Regulatory",
    highlight: "Services",
    intro:
      "We assist businesses in meeting regulatory requirements across multiple statutes and governing authorities. Our regulatory services focus on compliance accuracy, documentation clarity, and process efficiency.",
    detail:
      "",
    listTitle: "Our Regulatory services include:",
    items: [
      "Business Licensing Services",
      "Disputes & Litigation Matters",
      "Entity Incorporation",
      "Reporting Services relating to Portfolio Investment Scheme",
      "ROC Compliances",
      "Valuation & Verification of Fixed Assets",
      "Performance Transformation of Public Institutions",
      "Registration & Compliance under Industry-Specific Statutes",
      "Transition Management",
      "Process Automation and Establishment of e-Audit Trails",
      "Responsibility Allocation Frameworks",
      "IFRS Conversion",
      "Various Company Secretarial Practices"
    ],
  },
  "Public Finance Management (PFM)": {
    img: Finance,
    title: "Public Finance",
    highlight: "Management (PFM)",
    intro:
      "Our PFM services help institutions manage public funds responsibly while aligning financial practices with development goals.",
    detail:
      "",
    listTitle: "Our PFM services include:",
    items: [
      "Macroeconomic Stabilisation",
      "Monitoring & Evaluation",
      "Performance Budgeting",
      "Auditing & Accounting",
      "Local Government Reforms",
      "Public Procurement",
      "Corporate & Personal Financing",
      "Capital Restructuring & Project Financing",
      "Working Capital Assessments",
"Capital Restructuring and Issue-Related Advisory Services"
    ],
  },
  "Accounting & MIS": {
    img: Accounting,
    title: "Accounting",
    highlight: "& MIS",
    intro:
      "We deliver precise bookkeeping, financial reporting, and Management Information Systems that give you real-time visibility into your business performance.",
    detail:
      "From day-to-day accounting to advanced MIS dashboards, our solutions ensure accurate financial data flows seamlessly into strategic decision-making processes.",
    listTitle: "Our Accounting & MIS services include:",
    items: [
      "Understanding existing manual systems and designing computerized solutions",
      "Implementation of Accounting & MIS systems for",
      "Debtors Management",
      "Procurement",
      "Production",
      "Inventory",
      "Selling & Distribution"
    ],
  },
  "Company Affairs": {
    img: Company,
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
    img: Audit,
    title: "Audit",
    highlight: "& Assurance",
    intro:
      "Our audit and assurance services provide independent, objective assessments that build stakeholder trust and identify opportunities for operational improvement.",
    detail:
      "We conduct statutory, internal, and forensic audits with a thorough, risk-based approach — delivering insights that go beyond compliance to drive genuine business value.",
    listTitle: "Our Audit & Assurance services include:",
    items: [
      "Compliance Audit",
      "Concurrent Audit",
      "Department Audit",
      "Financial Statement Audit",
      "Internal Audit",
      "Inventory Audit",
      "Management Audit",
      "Statutory Audit",
      "Tax Audit",
      "System Audit",
      "Due Diligence Audit"
    ],
  },
  "Certification Services": {
    img: Certification,
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

export const serviceKeys = Object.keys(servicesData);

export default servicesData;