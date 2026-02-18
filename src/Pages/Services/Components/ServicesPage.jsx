import { useState } from "react";
import { serviceKeys } from "./Servicesdata.Js";
import ServiceMenuItem from "./ServiceMenuItem";
import ServiceContent from "./ServiceContent";
import ContactForm from "./ContactForm";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("Certification Services");

  return (
    <section className="container mb-12">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease forwards;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row ">
        {/* ── Left: Service Content ── */}
        <div className="flex-1 min-w-0 rounded-2xl mb-20">
          <ServiceContent service={activeService} />
        </div>

        {/* ── Right: Sidebar ── */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 py-11 sticky top-8">
            {/* Quick Services */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Quick <span className="text-gradient-primary">services</span>
            </h3>
            <div className="flex flex-col gap-2">
              {serviceKeys.map((key) => (
                <ServiceMenuItem
                  key={key}
                  label={key}
                  isActive={activeService === key}
                  onClick={() => setActiveService(key)}
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
    </section>
  );
}