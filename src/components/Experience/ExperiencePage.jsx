import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/exp page img/Screenshot 2026-04-11 at 10.43.51AM 1.png';
import maskGroup from '../../assets/Mask group.png';
import peacockFeather from '../../assets/exp page img/image 13.png';
import group5 from '../../assets/exp page img/Group 5.png';
import textureBg from '../../assets/exp page img/image 34 (1).png';

// New images for the cards section
import group218 from '../../assets/exp2 page img/Group 218.png';
import group219 from '../../assets/exp2 page img/Group 219.png';
import group220 from '../../assets/exp2 page img/Group 220.png';
import group221 from '../../assets/exp2 page img/Group 221.png';


import './ExperiencePage.css';

export default function ExperiencePage() {
  const [startIndex, setStartIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    { 
      img: group218, 
      title: 'PROGRAM', 
      description: 'Workshops, performances, and immersive experiences', 
      link: '/explore' 
    },
    { 
      img: group219, 
      title: 'TEACHERS & ARTISTS', 
      description: 'Facilitators, performers, and inspiring voices', 
      link: '/teacher' 
    },
    { 
      img: group220, 
      title: 'BAZAAR', 
      description: 'Marketplace of soulful, conscious creations', 
      link: '/bazaar' 
    },
    { 
      img: group221, 
      title: 'LIFETIME ACHIEVEMENT AWARD', 
      description: 'Recognizing enduring impact and devotion', 
      link: '/achievement' 
    }
  ];

  const getVisibleCount = () => {
    if (windowWidth <= 768) return 2;
    if (windowWidth <= 1200) return 2;
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

  React.useEffect(() => {
    if (visibleCount >= cards.length) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // rotate every 4 seconds
    return () => clearInterval(timer);
  }, [cards.length, visibleCount]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Roboto, sans-serif' }}>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="jharokha-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.01 C0.4,0.01, 0.35,0.05, 0.3,0.1 C0.25,0.05, 0.15,0.05, 0.1,0.14 C0.05,0.23, 0.02,0.28, 0.02,0.41 L0.02,0.99 L0.98,0.99 L0.98,0.41 C0.98,0.28, 0.95,0.23, 0.9,0.14 C0.85,0.05, 0.75,0.05, 0.7,0.1 C0.65,0.05, 0.6,0.01, 0.5,0.01 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── HERO SECTION ── */}
      <section className="exp-hero">
        <img src={bgImage} alt="Background" className="exp-hero-bg" />
        <div className="exp-hero-overlay" />
        <img src={maskGroup} alt="Mask" className="exp-hero-mask" />
        <div className="exp-hero-content">
          <h2 className="exp-hero-text-small">
            Teachers, Artists, Humanitarian leaders, Wisdom, Meditation,<br />
            Culture, Music, and Shared Humanity
          </h2>
          <h1 className="exp-hero-text-large">
            More information will be revealed soon here.
          </h1>
          <div className="exp-btn-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* <Link to="/explore" className="exp-btn-white"> */}
            <Link to="/explore" className="exp-btn-white">

              EXPLORE PROGRAM
            </Link>
            <Link to="/achievement" className="exp-btn-outline">
              ACHIEVEMENT AWARD
            </Link>
          </div>
        </div>
      </section>

      {/* ── STEP INTO SECTION ── */}
      <section className="step-into-section" style={{ backgroundImage: `url('${textureBg}')` }}>
        <img src={peacockFeather} alt="" className="peacock-feather" />
        <div className="step-into-content">
          <h2 className="step-into-heading">
            ONENESS FESTIVAL IS NOT SOMETHING YOU SIMPLY ATTEND, IT'S <br />
            SOMETHING YOU STEP INTO.
          </h2>
          {/* New Decorative Divider Image (Group 5.png) */}
          <img src={group5} alt="Decorative Divider" className="divider-img-exp" />
          <p className="step-into-para">
            Over the course of the festival, you are invited into a carefully curated journey of movement, music, stillness, and connection. From immersive workshops and ceremonies to vibrant performances and shared moments in nature, each element is designed to bring you closer to yourself and those around you. This is a space where expression is free, presence is felt, and connection becomes real. Whether you come to explore, to release, or to simply be, the experience meets you where you are, and gently invites you deeper.
          </p>
        </div>
      </section>

      {/* ── CARDS SECTION ── */}
      <section className="cards-section">
        <div className="cards-container">
          {visibleIndices.map((cardIdx) => {
            const card = cards[cardIdx];
            const isFirst = cardIdx === startIndex;
            const isSecond = cardIdx === (startIndex + 1) % cards.length;

            return (
              <div 
                key={cardIdx} 
                className={`card-item mobile-visible ${isFirst ? 'mobile-first' : ''} ${isSecond ? 'mobile-second' : ''}`}
              >
                <img className="direct-card-img" src={card.img} alt={card.title} />
                <h3 className="card-item-title">{card.title}</h3>
                <p className="card-item-desc">{card.description}</p>
                <div className="card-item-btn-wrap">
                  <Link 
                    to={card.link} 
                    className="card-explore-btn"
                  >
                    EXPLORE PROGRAM
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
 
        {cards.length > 1 && (
          <div className="nav-arrows">
            <div className="nav-arrow arrow-left" onClick={handlePrev}><span>‹</span></div>
            <div className="nav-arrow arrow-right" onClick={handleNext}><span>›</span></div>
          </div>
        )}
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
