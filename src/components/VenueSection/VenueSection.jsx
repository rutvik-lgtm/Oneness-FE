import React from 'react';
import './VenueSection.css';

import venueImage from '../../assets/homepage/Group 123.png';
import dividerImg from '../../assets/homepage/Group 5.png';

const VenueSection = () => {
  return (
    <section className="venue-section" id="venue">
      <div className="venue-container">
        {/* Left Content */}
        <div className="venue-left">
          <h3 className="venue-year">2026</h3>
          <h2 className="venue-title">OENESS FESTIVAL VENUE</h2>
          <img src={dividerImg} alt="" className="venue-divider" />
          <p className="venue-description">
            The festival will be hosted in Jaipur, Rajasthan.<br />
            Full venue details will be shared with registered participants
          </p>
          <button className="venue-explore-btn">
            {/* <span className="corner top-left"></span> */}
            {/* <span className="corner bottom-left"></span> */}
            EXPLORE VENUE
          </button>
        </div>

        {/* Right Image */}
        <div className="venue-right">
          <img src={venueImage} alt="Oneness Festival Venue" className="venue-image" />
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
