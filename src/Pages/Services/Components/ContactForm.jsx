import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  return (
    <div className="mt-8 overflow-hidden">
      <h3 data-aos="fade-up" data-aos-duration="800" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-plusJakartaSans">
        Collaborate <span className="text-cyan-500">With Us?</span>
      </h3>
      <div className="flex flex-col gap-3">
        {[
          { key: "name", placeholder: "Your Name*", type: "text" },
          { key: "email", placeholder: "Your Email*", type: "email" },
          { key: "number", placeholder: "Your Number*", type: "tel" },
        ].map(({ key, placeholder, type }) => (
          <input
            data-aos="fade-left"
            data-aos-delay={key * 150} // 👈 stagger delay
            data-aos-duration="800"
            key={key}
            type={type}
            placeholder={placeholder}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:outline-none focus:border-cyan-400 focus:bg-white transition-all duration-200"
          />
        ))}
        <textarea
        data-aos="fade-left"
            data-aos-delay="200" // 👈 stagger delay
            data-aos-duration="800"
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
