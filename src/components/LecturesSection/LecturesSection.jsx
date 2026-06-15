import React from 'react';
import './LecturesSection.css';
import { Link } from 'react-router-dom';
import bgIllustration from '../../assets/homepage/bg image.png';
import dividerImg from '../../assets/homepage/Group 5.png';
import topBrush from '../../assets/homepage/dvider_20 2.png';

const LecturesSection = () => {
  return (
    <section className="lectures-section">
      {/* <img src={topBrush} alt="" className="lectures-brush-top1" /> */}
      
      <div className="lectures-container">
        {/* Main Illustration covering bottom and right */}
        <img src={bgIllustration} alt="Lectures and Reflection" className="lectures-illustration" />
        
        {/* Text Content in top left */}
        <div className="lectures-text-content">
          <h3 className="lectures-year">2026</h3>
          <h2 className="lectures-title">LECTURES & REFLECTION</h2>
          
          <img src={dividerImg} alt="Divider" className="lectures-divider" />
          
          <p className="lectures-description">
            Teachings rooted in humility, service, compassion, and universal<br />
            values.
          </p>
          
          <Link className="lectures-explore-btn" to="/teacher">EXPLORE TEACHERS</Link>
        </div>
      </div>
      
      <img src={topBrush} alt="" className="lectures-brush-bottom" />
    </section>
  );
};

export default LecturesSection;
