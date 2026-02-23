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
  "Auditing": {
    img: Management,
    title: "Auditing",
    highlight: "Services",
    intro:
      "Our Auditing services are designed to help organizations improve performance, address operational challenges, and plan sustainable growth. We work closely with management teams to analyse existing structures, identify gaps, and implement practical strategies aligned with business objectives.",
    detail:
      "Our integrated approach covers planning, execution, financial structuring, compliance, and process optimization—ensuring that recommendations are realistic, actionable, and measurable.",
    listTitle: "Our Auditing services include:",
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
  "GST": {
    img: Taxation,
    title: "GST",
    highlight: "Services",
    intro:
      "With frequent changes in tax laws and increasing regulatory complexity, effective tax planning and compliance have become critical for businesses. We provide practical, well-researched tax advisory services to help clients manage obligations efficiently while optimizing tax positions.",
    detail:
      "Our team keeps clients informed about changes in taxation regimes and assists them in navigating assessments, planning, and representations before authorities.",
    listTitle: "Our GST services include:",
    items: [
      "Direct Tax Advisory & Compliance",
      "GST Advisory & Compliance",
      "Income Tax Planning",
      "Consultancy regarding GST matters",
      "Tax Calculations & Strategic Tax Planning",
      "Representation before various authorities up to ITAT in Direct Taxes"
    ],
  },
  "ROC": {
    img: Regulatory,
    title: "ROC",
    highlight: "Services",
    intro:
      "We assist businesses in meeting regulatory requirements across multiple statutes and governing authorities. Our regulatory services focus on compliance accuracy, documentation clarity, and process efficiency.",
    detail:
      "",
    listTitle: "Our ROC services include:",
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
  "Project Finance": {
    img: Finance,
    title: "Project ",
    highlight: "Finance",
    intro:
      "Our Project Finance services help institutions manage public funds responsibly while aligning financial practices with development goals.",
    detail:
      "",
    listTitle: "Our Project Finance services include:",
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
  "Subsidy": {
    img: Accounting,
    title: "Subsidy",
    highlight: "Services",
    intro:
      "We help organizations transition from manual systems to efficient, technology-driven accounting and MIS frameworks. Our solutions are designed to enhance control, reporting accuracy, and decision-making.",
    detail:
      "",
    listTitle: "Our Subsidy services include:",
    items: [
      "Understanding existing manual systems and designing computerized solutions",
      "Implementation of Accounting & MIS systems for",
      "Debtors Management",
      "Procurement",
      "Production",
      "Inventory",
      "Selling & Distribution"
    ],
    listTitle2: "Industry-specific solutions for:",
    items2: [
      "Manufacturing",
      "Processing",
      "Trading",
      "Construction Contracts",
      "Software & Service Industries",
    ],
  },
  "Internal Audit": {
    img: Company,
    title: "Internal ",
    highlight: "Audit",
    intro:
      "We provide complete support for corporate legal and secretarial matters, ensuring statutory compliance and smooth coordination with regulatory authorities.",
    detail:
      "",
    listTitle: "Our Internal Audit services include:",
    items: [
      "Formation of Private & Public Limited Companies",
      "Conducting Board Meetings, EGMs & AGMs",
      "Change of Registered Office (within state or interstate)",
      "Increase of Authorized Capital",
      "Allotment of Shares",
      "Charge Creation & Modification",
      "Maintenance of Secretarial Registers",
      "Formation of LLPs"
    ],
    listTitle2: "Conversion of:",
    items2: [
      "Private Limited Company to LLP",
      "Partnership Firm to LLP",
      "Proprietary Concern to LLP / Company",
    ],
    listTitle3: "Liaison with:",
    items3: [
      "Registrar of Companies (ROC)",
      "Central Government",
      "Reserve Bank of India (RBI)",
    ],
  },
  "HR Audit": {
    img: Audit,
    title: "HR ",
    highlight: "Audit",
    intro:
      "Our HR audit services provide independent, objective assessments that build stakeholder trust and identify opportunities for operational improvement.",
    detail:
      "We conduct statutory, internal, and forensic audits with a thorough, risk-based approach — delivering insights that go beyond compliance to drive genuine business value.",
    listTitle: "Our HR Audit services include:",
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
  "FAR Verification": {
    img: Certification,
    title: "FAR",
    highlight: "Verification",
    intro:
      "We provide certifications as required under various statutory provisions, ensuring accuracy and compliance with applicable laws.",
    detail:
      "With decades of hands-on exposure across industries, we assist businesses in managing obligations efficiently while aligning financial practices with long-term operational goals.",
    listTitle: "Our FAR Verification services include:",
    items: [
      "Certifications under the Income Tax Act",
      "Certifications under GST laws",
      "Certifications under other applicable laws and regulations",
    ],
  },
  "Startup advice": {
    img: Certification,
    title: "Startup",
    highlight: "Advice",
    intro:
      "We provide certifications as required under various statutory provisions, ensuring accuracy and compliance with applicable laws.",
    detail:
      "With decades of hands-on exposure across industries, we assist businesses in managing obligations efficiently while aligning financial practices with long-term operational goals.",
    listTitle: "Our Startup advice services include:",
    items: [
      "Certifications under the Income Tax Act",
      "Certifications under GST laws",
      "Certifications under other applicable laws and regulations",
    ],
  },
};

export const serviceKeys = Object.keys(servicesData);

export default servicesData;