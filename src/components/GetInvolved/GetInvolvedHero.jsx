import React, { useState, useEffect } from 'react';
import './GetInvolvedHero.css';
import slide1 from '../../assets/Get involved (1).png';
import slide2 from '../../assets/Get involved (2).png';
import slide3 from '../../assets/Get involved (3).png';
import slide4 from '../../assets/Get involved (4).png';

const GetInvolvedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="gi-hero-section">
      <div className="gi-slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`gi-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url("${slide}")` }}
          />
        ))}
      </div>

      <div className="gi-hero-overlay" />

      <div className="gi-brush-edge gi-top-brush-edge" />
      {/* <div className="gi-brush-edge gi-bottom-brush-edge" /> */}

      <div className="gi-hero-content">
        <h2 className="gi-hero-subtitle">The Oneness Festival <br /> 2026</h2>
        <h1 className="gi-hero-title">EXPRESS YOUR INTEREST</h1>
      </div>

      <div className="gi-slider-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`gi-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setCurrentSlide(index);
              }
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GetInvolvedHero;


