import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css';

import bgImage from '../../assets/homepage/home_page1.jpeg';
import logoImage from '../../assets/logo/logo_123.png';
import centerLotus from '../../assets/homepagelogoo.png';
import bottomDivider from '../../assets/homepage/Mask group (5).png';
import ornamentImg from '../../assets/homepage/Group 5 (5).png';
import tag1 from '../../assets/homepage/tag (1).png';
import tag2 from '../../assets/homepage/tag.png';

const HomeHero = () => {
  return (
    <section className="home-hero" style={{ backgroundImage: `url("${bgImage}")` }}>
      {/* Top Left Logo */}
      <div className="home-hero-logo">
        <img src={logoImage} alt="Jaipur Oneness Festival" />
      </div>

      <div className="home-hero-content">
        {/* Lotus Graphic */}
        <div className="home-hero-lotus-container">
          {/* <div className="lotus-title-section">
            <svg className="lotus-arrow left-arrow" viewBox="0 0 100 50" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 90 10 Q 50 -10 10 40" />
              <polyline points="25,35 10,40 15,25" />
            </svg>
            <h2 className="lotus-main-title">HOME</h2>
            <svg className="lotus-arrow right-arrow" viewBox="0 0 100 50" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 10 10 Q 50 -10 90 40" />
              <polyline points="75,35 90,40 85,25" />
            </svg>
          </div> */}

          <div className="lotus-graphic-wrapper">
            <img src={centerLotus} alt="Oneness Lotus" className="lotus-img" />

            <div className="lotus-label label-purple"><Link to="/blog">BLOG</Link></div>
            <div className="lotus-label label-yellow"><Link to="/experience">EXPERIENCE</Link></div>
            <div className="lotus-label label-light-blue"><Link to="/packages">PACKAGES</Link></div>
            <div className="lotus-label label-red"><Link to="/about">ABOUT</Link></div>
            <div className="lotus-label label-green"><Link to="/contact">CONTACT</Link></div>
            <div className="lotus-label label-dark-blue"><Link to="/get-involved">GET INVOLVED</Link></div>
            <div className="lotus-label label-orange"><Link to="/tickets">TICKETS</Link></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="home-hero-text">
          <h2 className="shift-text">India’s culture shifts every 300 kilometres,</h2>
          <p className="sub-shift-text">its languages, foods, prayers, music, and rituals, but beneath this diversity flows a single, unifying current.</p>

          <h1 className="oneness-title">ONENESS</h1>

          <div className="ornament">
            {/* <span className="ornament-line"></span> */}
            <span className="ornament-icon"><img src={ornamentImg} alt="Ornament" /></span>
            {/* <span className="ornament-line"></span> */}
          </div>

          <p className="homedescription-text">
            India shows the world that differences do not divide, but that diversity can move into one direction.<br />
            It is a country moving towards unity.
          </p>
          <p className="connection-text">
            We are connected to the divine, and through that connection, we are connected to one another.
          </p>
        </div>

        {/* Buttons */}
        <div className="home-hero-buttons">
          <button className="btn-belief">
            {/* <img src={tag1} alt="Tag 1" /> */}
            THIS IS NOT A BELIEF
          </button>
          <button className="btn-experience">
            {/* <img src={tag2} alt="Tag 2" /> */}
            IT IS AN EXPERIENCE
          </button>
        </div>
      </div>

      {/* Bottom Torn Divider */}
      <div className="home-hero-divider">
        <img src={bottomDivider} alt="divider" />
      </div>
    </section>
  );
};

export default HomeHero;
