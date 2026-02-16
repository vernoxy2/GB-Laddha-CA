import React from 'react';

const MainHeading = ({BlackText, GradientText}) => {
  return (
    <h2 className='font-bold'>
        {BlackText} <span className='text-gradient-primary'>{GradientText}</span>
    </h2>
  );
}

export default MainHeading;
