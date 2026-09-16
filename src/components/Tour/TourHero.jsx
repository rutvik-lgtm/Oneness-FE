import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TourHero.css';
import image53 from '../../assets/image 53.png';
import maskImg from '../../assets/Mask group.png';

const TourHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const formElem = document.querySelector('.tour-reg-section');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/toursregistration');
      setTimeout(() => {
        const el = document.querySelector('.tour-reg-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <section className="tour-hero">
      {/* Background Image */}
      <div className="tour-hero-bg" style={{ backgroundImage: `url("${image53}")` }}>
        {/* Dark Overlay */}
        <div className="tour-hero-overlay" />

        {/* Top Brush Stroke (Near Header) */}
        <div
          className="tour-brush-top"
          style={{ WebkitMaskImage: `url("${maskImg}")`, maskImage: `url("${maskImg}")` }}
        />

        {/* Content */}
        <div className="tour-hero-content">
          <p className="tour-year">2026</p>
          <h2 className="tour-pkg-title">The Oneness Festival Packages</h2>
          <h1 className="tour-main-title">TOURS REGISTRATION</h1>

          <div className="tour-btn-wrapper">
            <button className="tour-reserve-btn" onClick={handleBookNow}>BOOK YOUR TOUR NOW</button>
          </div>
        </div>

        {/* Bottom Brush Stroke */}
        <div
          className="tour-brush-bottom"
          style={{ WebkitMaskImage: `url(${maskImg})`, maskImage: `url(${maskImg})` }}
        />
      </div>
    </section>
  );
};

export default TourHero;
