import React from "react";

const Header = ({ title, color, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center space-y-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="relative container 
                   min-h-[300px] xl:min-h-[520px]
                   flex flex-col justify-center
                   space-y-4 md:space-y-6 text-white pt-12 md:pt-20"
      >
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
        >
          {title}
          <span className="text-gradient-primary"> {color}</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-md text-sm sm:text-base md:text-lg text-gray-200"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Header;