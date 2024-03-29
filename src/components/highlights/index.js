import React from 'react';
import Description from './description';
import Discount from './discount';

const Highlight = () => {
  return (
    <div className='highlight_wrapper'>
      <Description />
      <Discount />
    </div>
  );
};

export default Highlight;
