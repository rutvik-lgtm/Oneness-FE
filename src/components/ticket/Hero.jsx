import React from 'react';
import './Hero.css';

// Importing the background image. The user uploaded this specific image for the hero section.
import heroBg from '../../assets/656fd55f3adb3f02dea92b12ef0c38cb109ad874.png';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Purple Tint Overlay */}
      <div className="hero-overlay"></div>

      {/* Torn Edge Brush Borders */}
      <div className="brush-edge top-brush-edge"></div>
      <div className="brush-edge bottom-brush-edge"></div>

      {/* Main Content */}
      <div className="hero-content">
        <h1>The Oneness Festival</h1>
        <h2>2026</h2>
      </div>
    </section>
  );
};

export default Hero;
