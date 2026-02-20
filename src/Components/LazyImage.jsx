import React from "react";

const LazyImage = ({ src, alt, className, AOS, ...rest }) => {
  return (
    <img
    data-aos={AOS}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
};

export default LazyImage;
