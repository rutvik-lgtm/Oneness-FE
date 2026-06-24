import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/PACAKGE PAGE.png';
import maskGroup from '../../assets/Mask group.png';
import group5 from '../../assets/pkg-btn/Group 5.png';
import textureBg from '../../assets/pkg-btn/image 34 (2).png';

import './PackagesPage.css';

export default function PackagesPage() {
  return (
    <div className="packages-page">
      {/* ── HERO ── */}
      <section className="pkg-hero">
        <img src={bgImage} alt="Heritage and Cultural Traditions" className="pkg-hero-bg" />
        <div className="pkg-hero-overlay" />
        <img src={maskGroup} alt="" className="pkg-hero-mask" />
        <div className="pkg-hero-content">
          <p className="pkg-hero-subtitle">
            The Oneness Festival Packages 2026
          </p>
          <h1 className="pkg-hero-title">
            Heritage, Nature and Cultural Traditions.
          </h1>
        </div>
      </section>

      {/* ── PACKAGES SECTION ── */}
      <section className="pkg-section" style={{ backgroundImage: `url('${textureBg}')` }}>
        <p className="pkg-year">ONENESS 2026</p>
        <h2 className="pkg-main-title">ONENESS FESTIVAL PACKAGES</h2>

        <img src={group5} alt="Decorative Divider" className="pkg-divider-img" />

        <p className="pkg-desc">
          To support your journey into the Oneness Festival experience, we offer carefully curated packages designed to
          make your stay seamless and enriching. Whether you're looking for a comfortable place to land or a deeper, fully
          guided experience that extends beyond the festival itself, our packages bring everything together with ease and intention.
        </p>

        <p className="pkg-desc-sub">
          Choose the path that resonates with you, accommodation, curated tours, or a combination of both, and allow
          yourself to fully arrive, without distraction.
        </p>

        <div className="pkg-buttons">
          <Link to="/accommodation" className="pkg-btn-filled">
            BOOK YOUR ACCOMMODATION 
          </Link>

          <Link to="/tour-packages" className="pkg-btn-outline">
            BOOK YOUR TOUR PACKAGE 
          </Link> 
        </div>
      </section>
    </div>
  );
}
