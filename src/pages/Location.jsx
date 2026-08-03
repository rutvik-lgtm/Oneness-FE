import React, { useState } from 'react';
import './Location.css';
import UnderDevelopment from '../components/UnderDevelopment/UnderDevelopment';
import heroBg from '../assets/loc/clarks-amer-jaipur-1_1 (1) 1.png';
import mapImg from '../assets/loc/Png.png';
import galleryImg1 from '../assets/loc/Group 215.png';
import galleryImg2 from '../assets/loc/Group 216.png';
import topEdge from '../assets/loc/Mask group (7).png';
import bottomEdge from '../assets/loc/Mask group (8).png';
import divider1 from '../assets/loc/Group 5 (3).png';
import divider2 from '../assets/loc/Group 5 (4).png';

// Set to true to show "Coming Soon" page, set to false to show original Location page
const SHOW_COMING_SOON = true;

const Location = () => {
  if (SHOW_COMING_SOON) {
    return <UnderDevelopment />;
  }

  const [searchValue, setSearchValue] = useState('Hotel Clarks Amer');

  const handleClear = () => {
    setSearchValue('');
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(searchValue)}`, '_blank');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="location-page">
      {/* Hero Section */}
      <section
        className="location-hero"
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <div className="location-hero-overlay"></div>
        <img src={topEdge} alt="" className="location-hero-edge location-top-edge" />

        <div className="location-hero-content-wrapper">
          <h1 className="location-hero-title">
            <span className="year">2026</span>
            <span className="main-title">ONENESS FESTIVAL</span>
            <span className="venue">VENUE</span>
          </h1>
          <img src={divider1} alt="divider" className="location-hero-divider" />
        </div>

        <img src={bottomEdge} alt="" className="location-hero-edge location-bottom-edge" />
      </section>


      {/* Details & Map Section */}
      <section className="location-details-section" id="map-section">
        <h2 className="section-heading">CLARKS AMER: WHERE THE SPIRIT OF JAIPUR COMES ALIVE</h2>
        <img src={divider2} alt="divider" className="section-divider" />

        <p className="description-text">
          Oneness Festival will be held at Clarks Amer, Jaipur's five-star haven, where gardens and grand halls blend luxury with local charm. The venue provides an elegant stage for celebrating art, culture, and heritage.
        </p>

        <div className="map-wrapper">
          <img src={mapImg} alt="Map of Clarks Amer" className="map-image" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227847953259!2d75.80164!3d26.850616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db611516e8851%3A0xc66579a321287d3a!2sHotel%20Clarks%20Amer!5e0!3m2!1sen!2sin!4v1716281723456!5m2!1sen!2sin"
            className="real-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Clarks Amer Location"
          ></iframe>
          {/* Google Maps style search box */}
          <div className="default-place-card-container">
            <input
              type="text"
              className="place-search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search a place..."
            />
            <button className="place-search-btn" onClick={handleSearch} title="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button className="place-close-btn" onClick={handleClear} title="Clear">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <p className="bottom-description-text">
          Its beauty and accessibility draw visitors from across India, making every moment special. At Clarks Amer, the festival will become a beautiful journey of wonder, community, and shared experience.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="location-gallery-section">
        <div className="loc-grid">
          <div className="gallery-item">
            <img src={galleryImg1} alt="Clarks Amer View 1" />
          </div>
          <div className="gallery-item">
            <img src={galleryImg2} alt="Clarks Amer View 2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
