import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hero Background Images
import expHero1 from '../../assets/exp.png';
import expHero2 from '../../assets/Expereince (2).png';
import expHero3 from '../../assets/exp3.png';
import expHero4 from '../../assets/exp4.png';
import maskGroup from '../../assets/Mask group.png';
import peacockFeather from '../../assets/exp page img/image 13.png';
import group5 from '../../assets/exp page img/Group 5.png';
import textureBg from '../../assets/exp page img/image 34 (1).png';

// Images for the cards section
import group218 from '../../assets/exp2 page img/Group 218.png';
import group219 from '../../assets/exp2 page img/Group 219.png';
import group220 from '../../assets/exp2 page img/Group 220.png';
import group221 from '../../assets/exp2 page img/Group 221.png';

import './ExperiencePage.css';

const heroSlides = [
  { src: expHero1, position: 'center 68%' },
  { src: expHero2, position: 'center 42%' },
  { src: expHero3, position: 'center 50%' },
  { src: expHero4, position: 'center 40%' }
];

export default function ExperiencePage() {
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto-rotate hero slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      img: group221,
      title: 'LIFETIME ACHIEVEMENT AWARD',
      description: 'Recognizing enduring impact and devotion',
      link: '/achievement',
      btnText: 'EXPLORE AWARD'
    },
    {
      img: group218,
      title: 'SCHEDULE',
      description: 'Workshops, performances, and immersive experiences',
      link: '/explore',
      btnText: 'EXPLORE PROGRAM'
    },
    {
      img: group219,
      title: 'TEACHERS & ARTISTS',
      description: 'Facilitators, performers, and inspiring voices',
      link: '/teacher',
      btnText: 'EXPLORE TEACHERS & ARTISTS'
    },
    {
      img: group220,
      title: 'BAZAAR',
      description: 'Marketplace of soulful, conscious creations',
      link: '/bazaar',
      btnText: 'EXPLORE BAZAAR'
    }
  ];

  const getVisibleCount = () => {
    if (windowWidth <= 768) return 2;
    if (windowWidth <= 1200) return 3;
    return 4;
  };

  const visibleCount = getVisibleCount();

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((startIndex + i) % cards.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="jharokha-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.01 C0.4,0.01, 0.35,0.05, 0.3,0.1 C0.25,0.05, 0.15,0.05, 0.1,0.14 C0.05,0.23, 0.02,0.28, 0.02,0.41 L0.02,0.99 L0.98,0.99 L0.98,0.41 C0.98,0.28, 0.95,0.23, 0.9,0.14 C0.85,0.05, 0.75,0.05, 0.7,0.1 C0.65,0.05, 0.6,0.01, 0.5,0.01 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── HERO SECTION ── */}
      <section className="exp-hero">
        <div className="exp-slider-container">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`exp-slide ${index === currentHeroSlide ? 'active' : ''}`}
            >
              <img
                src={slide.src}
                alt={`Experience ${index + 1}`}
                className="exp-slide-img"
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
        </div>
        <div className="exp-hero-overlay" />
        <img src={maskGroup} alt="Header Brush" className="exp-hero-mask" />
        <div className="exp-hero-content">
          <h2 className="exp-hero-subtitle">
            Teachers, Artists, Humanitarian leaders, Wisdom, Meditation,<br />
            Culture, Music, and Shared Humanity
          </h2>
          <h1 className="exp-hero-title">
            Step into Oneness, with Everything
          </h1>
          <div className="exp-btn-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/explore" className="exp-btn-white">
              EXPLORE PROGRAM
            </Link>
            <Link to="/achievement" className="exp-btn-outline">
              ACHIEVEMENT AWARD
            </Link>
          </div>
        </div>

        <div className="exp-slider-indicators">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className={`exp-indicator ${index === currentHeroSlide ? 'active' : ''}`}
              onClick={() => setCurrentHeroSlide(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentHeroSlide(index);
                }
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── STEP INTO SECTION ── */}
      <section className="step-into-section" style={{ backgroundImage: `url('${textureBg}')` }}>
        <img src={peacockFeather} alt="" className="peacock-feather" />
        <div className="step-into-content">
          <h2 className="step-into-heading">
            STEP INTO ONENESS WITH EVERYTHING HERE.
          </h2>
          <img src={group5} alt="Decorative Divider" className="divider-img-exp" />
          <p className="step-into-para">
            Over the course of the festival, you are invited into a carefully curated journey of movement, music, stillness, and connection. From immersive workshops and ceremonies to vibrant performances and shared moments in nature, each element is designed to bring you closer to yourself and those around you. This is a space where expression is free, presence is felt, and connection becomes real. Whether you come to explore, to release, or to simply be, the experience meets you where you are, and gently invites you deeper.
          </p>
        </div>
      </section>

      {/* ── CARDS SECTION ── */}
      <section className="cards-section">
        <div className="cards-slider-outer">
          <button
            type="button"
            className="carousel-side-arrow arrow-left"
            onClick={handlePrev}
            aria-label="Previous cards"
          >
            <span>‹</span>
          </button>

          <div className="cards-container">
            {visibleIndices.map((cardIdx) => {
              const card = cards[cardIdx];
              return (
                <div
                  key={cardIdx}
                  className="card-item"
                >
                  <img className="direct-card-img" src={card.img} alt={card.title} />
                  <h3 className="card-item-title">{card.title}</h3>
                  <p className="card-item-desc">{card.description}</p>
                  <div className="card-item-btn-wrap">
                    <Link
                      to={card.link}
                      className="card-explore-btn"
                    >
                      {card.btnText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="carousel-side-arrow arrow-right"
            onClick={handleNext}
            aria-label="Next cards"
          >
            <span>›</span>
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="cards-carousel-dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`cards-dot ${startIndex === index ? 'active' : ''}`}
              onClick={() => setStartIndex(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.02 C0.35,0.02, 0.3,0.08, 0.25,0.12 C0.2,0.08, 0.12,0.08, 0.12,0.18 L0.12,0.25 C0.05,0.25, 0.05,0.32, 0.12,0.32 C0.05,0.32, 0.05,0.4, 0.12,0.4 C0.05,0.4, 0.05,0.48, 0.12,0.48 C0.05,0.48, 0.05,0.56, 0.12,0.56 C0.05,0.56, 0.05,0.64, 0.12,0.64 L0.12,0.98 L0.88,0.98 L0.88,0.64 C0.95,0.64, 0.95,0.56, 0.88,0.56 C0.95,0.56, 0.95,0.48, 0.88,0.48 C0.95,0.48, 0.95,0.4, 0.88,0.4 C0.95,0.4, 0.95,0.32, 0.88,0.32 C0.95,0.32, 0.95,0.25, 0.88,0.25 L0.88,0.18 C0.88,0.08, 0.8,0.08, 0.75,0.12 C0.7,0.08, 0.65,0.02, 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
