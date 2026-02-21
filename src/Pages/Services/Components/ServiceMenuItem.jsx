export default function ServiceMenuItem({ label, isActive, onClick, key }) {
  return (
    <button
      data-aos="fade-up"
      data-aos-delay={key * 150} // 👈 stagger delay
      data-aos-duration="800"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg md:text-xl  font-dmSans transition-all duration-200 border
        ${
          isActive
            ? "bg-gradient-primary text-white border-primaryStart shadow-md shadow-primaryEnd/50 font-bold"
            : "bg-[#EFEFEF] text-textsecondary border-PrimaryEnd hover:border-cyan-300 hover:text-textprimary hover:bg-primaryStart/10"
        }`}
    >
      {label}
    </button>
  );
}
