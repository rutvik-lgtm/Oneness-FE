import React from 'react';
import { Link } from 'react-router-dom';
import './BazaarSection.css';

// Background & dividers
import topBrush from '../../assets/homepage/dvider_20 2 (6).png';
import titleDivider from '../../assets/homepage/Group 5 (7).png';
import bgMandala from '../../assets/homepage/om 1.png';
import bottomWaves from '../../assets/homepage/Rectangle 36.png';

// Card frames (arched frames)
import frameblue from '../../assets/homepage/Group 39.png';
import framePurple from '../../assets/homepage/Group 38 (2).png';
import frameCenter from '../../assets/homepage/Group 42.png';
import frameRed from '../../assets/homepage/Group 40.png';
import frameBrown from '../../assets/homepage/Group 41.png';

// Card circle images
import imgSpiritualArt from '../../assets/homepage/Group 122 (3).png';
import imgDevotionalItems from '../../assets/homepage/Group 122 (4).png';
import imgCenter from '../../assets/homepage/nicolas 1.png';
import imgHandcraftedTextiles from '../../assets/homepage/Group 122.png';
import imgJewellery from '../../assets/homepage/Group 122 (2).png';

// Bottom layered wavy mountain graphic
import bottomWavyGraphic from '../../assets/homepage/Group (12).png';

const BazaarSection = () => {
  return (
    <section className="bazaar-section">
      {/* Top brush transition divider */}
      <img src={topBrush} alt="" className="bazaar-brush-top" />

      {/* Background mandala subtle watermark */}
      <div className="bazaar-mandala-wrapper">
        <img src={bgMandala} alt="" className="bazaar-bg-mandala bazaar-mandala-left" />
        <img src={bgMandala} alt="" className="bazaar-bg-mandala bazaar-mandala-right" />
      </div>

      <div className="bazaar-container">
        {/* Header */}
        <div className="bazaar-header">
          <h2 className="bazaar-title">CURATED CONSCIOUS BAZAAR</h2>
          <img src={titleDivider} alt="" className="bazaar-title-divider" />
          <p className="bazaar-subtitle">
            All exhibitors are carefully selected to maintain the<br />
            integrity and spirit of the festival.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="bazaar-cards-layout">

          {/* LEFT COLUMN */}
          <div className="bazaar-col bazaar-col-left">
            {/* SPIRITUAL ART */}
            <div className="bazaar-card">
              <img src={framePurple} alt="" className="bazaar-frame" />
              <div className="bazaar-card-overlay">
                <h3 className="bazaar-card-title">SPIRITUAL<br />ART</h3>
                <Link to="/bazaar" style={{ textDecoration: 'none' }}>
                  <button className="bazaar-card-btn">Experience Oneness</button>
                </Link>
              </div>
              <img src={imgSpiritualArt} alt="Spiritual Art" className="bazaar-circle-img" />
            </div>

            {/* DEVOTIONAL ITEMS */}
            <div className="bazaar-card">
              <img src={frameblue} alt="" className="bazaar-frame" />
              <div className="bazaar-card-overlay">
                <h3 className="bazaar-card-title">DEVOTIONAL<br />ITEMS</h3>
                <Link to="/bazaar" style={{ textDecoration: 'none' }}>
                  <button className="bazaar-card-btn">Experience Oneness</button>
                </Link>
              </div>
              <img src={imgDevotionalItems} alt="Devotional Items" className="bazaar-circle-img" />
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="bazaar-col bazaar-col-center">
            <div className="bazaar-card bazaar-card-center">
              <img src={frameCenter} alt="" className="bazaar-frame" />
              <div className="bazaar-card-overlay center-overlay">
                <img src={imgCenter} alt="Nicolas" className="bazaar-nicolas-img" />
                <h3 className="bazaar-card-title title-center">NATURAL & WELLNESS<br />OFFERINGS</h3>
                <Link to="/bazaar" style={{ textDecoration: 'none' }}>
                  <button className="bazaar-card-btn btn-center">Experience Oneness</button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bazaar-col bazaar-col-right">
            {/* HANDCRAFTED TEXTILES */}
            <div className="bazaar-card">
              <img src={frameRed} alt="" className="bazaar-frame" />
              <div className="bazaar-card-overlay">
                <h3 className="bazaar-card-title">HANDCRAFTED<br />TEXTILES</h3>
                <Link to="/bazaar" style={{ textDecoration: 'none' }}>
                  <button className="bazaar-card-btn">Experience Oneness</button>
                </Link>
              </div>
              <img src={imgHandcraftedTextiles} alt="Handcrafted Textiles" className="bazaar-circle-img" />
            </div>

            {/* JEWELLERY ROOTED IN TRADITION */}
            <div className="bazaar-card">
              <img src={frameBrown} alt="" className="bazaar-frame" />
              <div className="bazaar-card-overlay">
                <h3 className="bazaar-card-title">JEWELLERY ROOTED<br />IN TRADITION</h3>
                <Link to="/bazaar" style={{ textDecoration: 'none' }}>
                  <button className="bazaar-card-btn">Experience Oneness</button>
                </Link>
              </div>
              <img src={imgJewellery} alt="Jewellery" className="bazaar-circle-img" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom layered waves/mountains graphic */}
      <img src={bottomWavyGraphic} alt="" className="bazaar-waves-graphic" />

      {/* Bottom transition wave */}
      {/* <img src={bottomWaves} alt="" className="bazaar-waves-bottom" /> */}
    </section>
  );
};

export default BazaarSection;
