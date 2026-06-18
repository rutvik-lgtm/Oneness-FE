import React from 'react';
import './MusicSection.css';

import dividerImg2 from '../../assets/homepage/dvider_20 2.png';
import dividerImg20 from '../../assets/homepage/upg.png';
// import dividerImg20 from '../../assets/homepage/Mask group (5).png';

import frameRed from '../../assets/homepage/Vector (7).png';
import frameGreen from '../../assets/homepage/Vector (12).png';
import photoLeft from '../../assets/homepage/2 28.png';
import photoRight from '../../assets/homepage/2 28 (1).png';
import drummer from '../../assets/homepage/music (1) 1.png';
import guitarist from '../../assets/homepage/music (1) 2.png';
import grass from '../../assets/homepage/pngwing.com (1) 1.png';
import musicNotesLeft from '../../assets/homepage/mu 2.png';
import musicNotesRight from '../../assets/homepage/mu 3.png';
import dividerImg from '../../assets/Group 5.png';

const MusicSection = () => {
  return (
    <section className="music-section">

      <img src={dividerImg2} alt="brush-img" className="music-brush-top-img-music" />

      {/* Music notes on left and right edges */}
      <img src={musicNotesLeft} alt="" className="music-notes-left" />
      <img src={musicNotesRight} alt="" className="music-notes-right" />

      <div className="music-container">
        {/* Title area */}
        <div className="music-text-content">
          <h3 className="music-year">2026</h3>
          <h2 className="music-title">SACRED MUSIC & DEVOTIONAL ARTS</h2>
          <img src={dividerImg} alt="Divider" className="music-divider" />
          <p className="music-description">
            Soulful music, mantra, theatre, dance, storytelling, and rituals that<br />
            inspire devotion and inner peace
          </p>
        </div>

        {/* Gallery row: drummer - frame1 - frame2 - guitarist */}
        <div className="music-gallery-row">
          <div className="music-gallery-pair music-gallery-pair-left">
            <img src={drummer} alt="Drummer" className="music-drummer" />

            <div className="music-frame-wrapper">
              <div className="frame">
                <img src={photoLeft} alt="Devotional Arts" />
              </div>
              <img src={frameRed} alt="" className="music-frame-border" />
            </div>
          </div>

          <div className="music-gallery-pair music-gallery-pair-right">
            <div className="music-frame-wrapper">
              <div className="frame">
                <img src={photoRight} alt="Sacred Music" />
              </div>
              <img src={frameGreen} alt="" className="music-frame-border" />
            </div>

            <img src={guitarist} alt="Guitarist" className="music-guitarist" />
          </div>
        </div>

        <button className="music-explore-btn">EXPLORE ARTIST</button>
      </div>

      {/* Grass at very bottom */}
      <img src={grass} alt="" className="music-grass" />
      <img src={dividerImg20} alt="brush-img" className="music-brush-top-img-grassup" />
    </section>
  );
};

export default MusicSection;
