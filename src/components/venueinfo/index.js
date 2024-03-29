import React from 'react';
import icon_calender from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';
const Venueinfo = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <Zoom duration={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_red' />
                  <div
                    className='vn_icon'
                    style={{ background: `url(${icon_calender})` }}
                  />
                  <div className='vn_title'>Event Date & Time</div>
                  <div className='vn_desc'>30 October 2019 @12.00 AM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_red' />
                  <div
                    className='vn_icon'
                    style={{ background: `url(${icon_location})` }}
                  />
                  <div className='vn_title'>Event location</div>
                  <div className='vn_desc'>5, Veeri st, Rasipuram</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Venueinfo;
