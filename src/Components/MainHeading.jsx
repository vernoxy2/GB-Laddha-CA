import React from 'react';

const MainHeading = ({BlackText, GradientText, afterText, AOS}) => {
  return (
    <h2 data-aos={AOS} data-aos-delay="100" className='font-bold'>
        {BlackText} <span className='text-gradient-primary'>{GradientText}</span>{afterText && <> {afterText}</>}

    </h2>
  );
}

export default MainHeading;
