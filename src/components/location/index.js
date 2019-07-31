import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.297398655043!2d78.18723301431743!3d11.458446691860884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc20f6baea367%3A0x9c5040f9a547c0ac!2sMahaas+Ladies+Beauty+Parlour!5e0!3m2!1sen!2sin!4v1564582243286!5m2!1sen!2sin'
        width='100%'
        height='450'
        frameBorder='0'
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
