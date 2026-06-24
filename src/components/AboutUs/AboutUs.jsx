import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

import dividerImg from '../../assets/homepage/Group 5.png';
import redFortSketch from '../../assets/homepage/Group 92.png';
import colorfulArt from '../../assets/homepage/Group 121.png';
import bottomOutline from '../../assets/homepage/Group 93 (4).png';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-bg-text">
        <span className="about">ABOUT</span>
        <span className="us">US</span>
      </div>

      <div className="about-us-container">
        {/* Left Column */}
        <div className="about-us-left">
          <h2 className="about-us-heading">
            A SPIRITUAL GATHERING FOR PEACE,<br />WISDOM & HUMANITY
          </h2>

          <div className="about-us-divider">
            <img src={dividerImg} alt="Divider" />
          </div>

          <p className="about-us-desc">
            The Oneness Festival is a cultural gathering dedicated to awakening to peace and unity, within ourselves, between people, and across cultures. <strong className="about-us-strong">Hosted in the royal city of Jaipur,</strong> the festival invites seekers, teachers, artists, and humanitarian leaders to come together in reflection, wisdom, meditation, culture, music, and shared humanity.
          </p>

          <p className="about-us-desc">
            This is a space to connect with your own essence, experience wholeness, and align with others, rooted in India's enduring spiritual heritage and timeless wisdom.
          </p>

          <div className="about-us-actions">
            <Link className="btn-stay-informed" to="/get-involved" >
              STAY INFORMED
            </Link>
            <Link className="btn-contact-us" to="/contact">CONTACT US</Link>
          </div> 

          <div className="about-us-sketch-container">
            <img src={colorfulArt} alt="Fort Sketch" className="about-us-sketch" />
            <img src={bottomOutline} alt="Buildings Outline" className="buildings-outline" />
          </div>
        </div>

        {/* Right Column */}
        <div className="about-us-right">
          <div className="about-us-illustration-container">
            <img src={redFortSketch} alt="India Traditional Art" className="colorful-art-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
