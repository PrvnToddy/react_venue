import React from 'react';
import Carrousel from './Carrousel';
import TimeUntill from './TimeUntill';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className='artist_name'>
        <div className='wrapper'>AR Rahman</div>
      </div>
      <TimeUntill />
    </div>
  );
};

export default Featured;
