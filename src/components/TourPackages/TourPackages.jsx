import React, { useState } from 'react';
import bgImage from '../../assets/tour page 2/image 51.png';
import topMask from '../../assets/tour page 2/Mask group (27).png';
import bottomMask from '../../assets/tour page 2/Mask group (26).png';
import palaceBg from '../../assets/tour page 2/Group 186.png';
import dividerImg from '../../assets/tour page 2/Group 5 (8).png';
import tipConnectivity from '../../assets/tour page 2/image (3).png';
import tipClothing from '../../assets/tour page 2/image (2).png';
import tipCurrency from '../../assets/tour page 2/image (4).png';
import tipCustoms from '../../assets/tour page 2/image (5).png';
import elephantRight from '../../assets/tour page 2/elephant png (1).png';
import elephantLeft from '../../assets/tour page 2/elephant png.png';
import mapFrame from '../../assets/loc/Png.png';
import locTopEdge from '../../assets/loc/Mask group (7).png';
import locBottomEdge from '../../assets/loc/Mask group (8).png';
import contactBg from '../../assets/tour page 2/Group 145.png';
import reserveBg from '../../assets/tour page 2/Group 58 (2).png';
import './TourPackages.css';

export default function TourPackages() {
  const [searchValue, setSearchValue] = useState('Hotel Clarks Amer');

  const handleClear = () => setSearchValue('');
  const handleSearch = () => {
    if (searchValue.trim()) {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(searchValue)}`, '_blank');
    }
  };
  const handleKeyDown = (e) => { if (e.key === 'Enter') handleSearch(); };

  return (
    <div className="tour-packages-page">
      {/* ── HERO ── */}
      <section className="tp-hero">
        <img src={bgImage} alt="Heritage and Cultural Traditions" className="tp-hero-bg" />
        <div className="tp-hero-overlay" />
        
        <img src={topMask} alt="Top Mask" className="tp-hero-mask-top mask-overlay" />
        <img src={bottomMask} alt="Bottom Mask" className="tp-hero-mask-bottom mask-overlay" />

        <div className="tp-hero-content">
          <p className="tp-hero-subtitle">The Oneness Festival</p>
          <h2 className="tp-hero-title-small">Upcoming Tour Packages 2026</h2>
          <h1 className="tp-hero-title">
            HERITAGE, PALACES, MARKETS, AND CULTURAL TRADITIONS.
          </h1>
          <button className="tp-hero-btn">
            {/* <span className="btn-icon">❁</span> */}
            RESERVE YOUR TOUR SPOT
            {/* <span className="btn-icon">❁</span> */}
          </button>
        </div>
      </section>

      {/* ── FESTIVAL TOUR PACKAGES SECTION ── */}
      <section className="tp-festival">
        {/* <img src={palaceBg} alt="" className="tp-festival-palace" /> */}

        <div className="tp-festival-content">
          <p className="tp-section-year">2026</p>
          <h2 className="tp-section-title">FESTIVAL TOUR PACKAGES</h2>
          <img src={dividerImg} alt="" className="tp-divider" />

          <p className="tp-section-text">
            Jaipur, the Pink City of India, is renowned for its rich heritage, majestic palaces, vibrant markets, and cultural traditions.
          </p>

          <p className="tp-section-text">
            While attending the Oneness Festival, we encourage you to explore the beauty and history of this extraordinary
            city. From historic forts and palaces to tranquil gardens and bustling bazaars, Jaipur offers a unique experience
            for every visitor.
          </p>
        </div>
      </section>

      {/* ── UPCOMING TOUR PACKAGES SECTION ── */}
      <section className="tp-upcoming">
        <img src={palaceBg} alt="" className="tp-upcoming-palace" />

        <div className="tp-upcoming-content">
          <p className="tp-section-year">2026</p>
          <h2 className="tp-section-title">UPCOMING TOUR PACKAGES</h2>
          <img src={dividerImg} alt="" className="tp-divider" />

          <p className="tp-section-text">
            We will soon offer guided tour packages designed for festival
            attendees. These packages will combine sightseeing, cultural
            experiences, and opportunities for spiritual reflection.
          </p>

          <div className="tp-package-list">
            <a href="#" className="tp-package-link">
              <span className="tp-link-highlight orange">Royal Rajasthan Oneness</span> Tour Package
            </a>
            <a href="#" className="tp-package-link">
              <span className="tp-link-highlight red">Jaipur Heritage</span> Tour Package
            </a>
            <a href="#" className="tp-package-link">
              <span className="tp-link-highlight orange">Oneness in Tradition</span> Tour Package
            </a>
            <a href="#" className="tp-package-link">
              <span className="tp-link-highlight red">Inner Oneness Journey Conscious</span> Tour Package
            </a>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="tp-cta-banner">
          <div className="tp-cta-content">
            <h3 className="tp-cta-title">INTERESTED IN RECEIVING MORE INFORMATION?</h3>
            <p className="tp-cta-text">Sign up below to be notified when new packages are available.</p>
            <button className="tp-cta-btn">SIGN UP FOR FESTIVAL TOUR PACKAGES HERE.</button>
          </div>
        </div>
      </section>

      {/* ── TRAVEL TIPS FOR JAIPUR SECTION ── */}
      <section className="tp-travel-tips">
        <img src={elephantRight} alt="" className="tp-elephant left" />
        <img src={elephantLeft} alt="" className="tp-elephant right" />
        <div className="tp-tips-header">
          <h2 className="tp-tips-title">TRAVEL TIPS FOR JAIPUR</h2>
          <img src={dividerImg} alt="Divider" className="tp-divider" />
        </div>

        <div className="tp-tips-container">
          {/* Tip 1 */}
          <div className="tp-tip-row">
            <div className="tp-tip-image-wrapper">
              <img src={tipConnectivity} alt="Connectivity" className="tp-tip-img" />
            </div>
            <div className="tp-tip-card">
              Jaipur is well-connected by road, rail, and air — the airport is 13 km from the city centre.
            </div>
          </div>

          {/* Tip 2 */}
          <div className="tp-tip-row">
            <div className="tp-tip-image-wrapper">
              <img src={tipClothing} alt="Clothing and Footwear" className="tp-tip-img" />
            </div>
            <div className="tp-tip-card">
              Comfortable clothing and footwear are recommended for exploring forts, palaces, and bazaars.
            </div>
          </div>

          {/* Tip 3 */}
          <div className="tp-tip-row">
            <div className="tp-tip-image-wrapper">
              <img src={tipCurrency} alt="Currency and Payments" className="tp-tip-img" />
            </div>
            <div className="tp-tip-card">
              Keep local currency handy for small purchases; although many places accept cards, cash is still commonly accepted.
            </div>
          </div>

          {/* Tip 4 */}
          <div className="tp-tip-row">
            <div className="tp-tip-image-wrapper">
              <img src={tipCustoms} alt="Local Customs" className="tp-tip-img" />
            </div>
            <div className="tp-tip-card">
              Respect local customs and cultural traditions, especially when visiting religious or heritage sites.
            </div>
          </div>
        </div>
      </section>

      {/* ── FESTIVAL VENUE & MAP SECTION ── */}
      <section className="tp-venue-map">
        <img src={locTopEdge} alt="" className="tp-venue-edge tp-venue-top-edge" />

        {/* Decorative mandalas */}
        <span className="tp-venue-mandala top-left">❁</span>
        <span className="tp-venue-mandala top-right">❁</span>
        <span className="tp-venue-mandala bottom-left">❁</span>
        <span className="tp-venue-mandala bottom-right">❁</span>

        <h2 className="tp-venue-title">
          FESTIVAL VENUE AND MAJOR TOURIST SITES AROUND JAIPUR
        </h2>

        <div className="tp-venue-map-wrapper">
          <img src={mapFrame} alt="" className="tp-venue-frame" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227847953259!2d75.80164!3d26.850616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db611516e8851%3A0xc66579a321287d3a!2sHotel%20Clarks%20Amer!5e0!3m2!1sen!2sin!4v1716281723456!5m2!1sen!2sin"
            className="tp-venue-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Festival Venue Map"
          />
          <div className="tp-venue-search">
            <input
              type="text"
              className="tp-venue-search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search a place..."
            />
            <button className="tp-venue-search-btn" onClick={handleSearch} title="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button className="tp-venue-close-btn" onClick={handleClear} title="Clear">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <p className="tp-venue-tip">
          Tip: Interactive pins for attractions or suggested tour routes can be helpful.
        </p>

        <img src={locBottomEdge} alt="" className="tp-venue-edge tp-venue-bottom-edge" />
      </section>

      {/* ── CONTACT & RESERVE SECTION ── */}
      <section className="tp-contact-reserve">
        <div className="tp-contact-container" style={{ backgroundImage: `url(${contactBg})` }}>
          <h2 className="tp-contact-title">CONTACT FOR TOURISM & TOUR PACKAGES</h2>
          
          <p className="tp-contact-description">
            Reach out for more information about festival tours, sightseeing suggestions, or travel assistance in Jaipur.
          </p>
          
          <div className="tp-contact-info-row">
            <a href="mailto:contact@onenessfestival.in" className="tp-contact-pill">
              <span className="pill-label">Mail:</span>
              <span className="pill-value">contact@onenessfestival.in</span>
            </a>
            <a href="tel:+91-XXXXXXXXXX" className="tp-contact-pill">
              <span className="pill-label">Contact Number:</span>
              <span className="pill-value">+91-XXXXXXXXXX</span>
            </a>
          </div>

          <p className="tp-contact-footer-text">
            Discover Jaipur, deepen your festival experience, and immerse yourself in the city's rich culture and spiritual heritage.
          </p>
        </div>

        <a href="#reserve" className="tp-reserve-btn" style={{ backgroundImage: `url(${reserveBg})` }}>
          RESERVE YOUR TOUR SPOT
        </a>
      </section>
    </div>
  );
}
