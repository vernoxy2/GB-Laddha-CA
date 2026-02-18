import React from 'react';

const MainHeading = ({BlackText, GradientText, afterText}) => {
  return (
    <h2 className='font-bold'>
        {BlackText} <span className='text-gradient-primary'>{GradientText}</span>{afterText && <> {afterText}</>}

    </h2>
  );
}

export default MainHeading;
