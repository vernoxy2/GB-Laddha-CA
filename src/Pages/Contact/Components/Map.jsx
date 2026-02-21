import React from "react";

const Map = () => {
  return (
    <div data-aos="fade" data-aos-delay="100" className="h-[620px] w-full z-[-1]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19741.548018557816!2d72.90709282763322!3d20.369540169412083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cc3ad3def609%3A0x104254f525ea9be9!2sLaddha%20Advisors%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771232659395!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      
    </div>
  );
};

export default Map;
