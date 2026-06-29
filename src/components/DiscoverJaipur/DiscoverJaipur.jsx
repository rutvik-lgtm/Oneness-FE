import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscoverJaipur.css';
import { Link } from 'react-router-dom';

// Assets
import palaceImg from '../../assets/homepage/Group 89.png';
import rickshawIcon from '../../assets/homepage/i1.png';
import dividerImg from '../../assets/homepage/Group 5.png';
import btnBg from '../../assets/homepage/button/Group 232.png';
import djTop from '../../assets/homepage/apati.png';

const DiscoverJaipur = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="discover-jaipur-section" id="discover-jaipur">

      <img src={djTop} alt="" className="dj-top" />
      {/* Top paint brush transition divider */}
      {/* <div className="dj-brush-top"></div> */}

      <div className="dj-container">
        {/* Left Side: Palace Illustration */}
        <div className="dj-left">
          <img src={palaceImg} alt="Jaipur Palace Illustration" className="dj-palace-img" />
        </div>

        {/* Right Side: Text & Details */}
        <div className="dj-right">
          {/* Rickshaw Icon */}
          <img src={rickshawIcon} alt="Rickshaw Icon" className="dj-rickshaw-icon" />

          {/* Title */}
          <h2 className="dj-title">DISCOVER JAIPUR</h2>

          {/* Divider */}
          <img src={dividerImg} alt="Divider" className="dj-divider" />

          {/* Descriptions */}
          <p className="dj-subtitle">
            Jaipur, the Pink City of India, is a treasure trove of heritage, culture, and vibrant markets.
          </p>

          <p className="dj-description">
            While attending the Oneness Festival, take the opportunity to explore the city's majestic palaces, historic forts, and bustling bazaars.
          </p>

          <p className="dj-description">
            Soon, we will offer guided festival tour packages that combine sightseeing, cultural experiences, and spiritual reflection.
          </p>

          {/* CTA Button */}
          <div className="dj-btn-container">
            <Link
              className="dj-explore-btn"
              to="/tour"
              style={{ backgroundImage: `url(${btnBg})` }}
            >
              LEARN MORE ABOUT OUR TOUR PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverJaipur;
