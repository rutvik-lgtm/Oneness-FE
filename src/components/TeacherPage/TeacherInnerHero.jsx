import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherInnerHero.css';

// Assets from teacher inner page folder
import heroBg from '../../assets/teacher inner page/brick-wall-decor-background 1.png';
import teacherPhoto from '../../assets/teacher inner page/Vector (19).png';
import buttonDecor from '../../assets/teacher inner page/Group 60 (6).png';

// Divider ornament from teacher page (Group 5.png is at src/assets/)
import ornamentDivider from '../../assets/Group 5.png';

const TeacherInnerHero = () => {
  return (
    <section className="teacher-inner-hero">
      {/* Background Image with Brick Wall, Vines and Lights */}
      <img src={heroBg} alt="" className="teacher-inner-bg" />
      <div className="teacher-inner-overlay"></div>

      {/* Brush / torn edges top & bottom */}
      <div className="teacher-inner-brush teacher-inner-brush-top"></div>
      <div className="teacher-inner-brush teacher-inner-brush-bottom"></div>

      <div className="teacher-inner-container">
        {/* Left Side: Teacher Photo in Scalloped Border */}
        <div className="teacher-inner-photo-side">
          <div className="teacher-inner-photo-frame">
            <img src={teacherPhoto} alt="Anna Vivadiya" className="teacher-inner-photo" />
          </div>
        </div>

        {/* Right Side: Content & Action */}
        <div className="teacher-inner-content-side">
          <p className="teacher-inner-pretitle">The Oneness Festival Teachers</p>
          <p className="teacher-inner-year">2026</p>

          {/* Book Ticket Button with Ornaments */}
          <div className="teacher-inner-btn-wrapper">
            <Link to="/tickets">
              <button className="teacher-inner-btn">
                BOOK TICKET NOW
                {/* <img src={buttonDecor} alt="" className="btn-decor-tl" />
                <img src={buttonDecor} alt="" className="btn-decor-br" /> */}
              </button>
            </Link>
          </div>

          {/* Teacher Name */}
          <h1 className="teacher-inner-name">ANNA VIVADIYA</h1>

          {/* Teacher Subtitles / Bio Summary */}
          <div className="teacher-inner-desc">
            <p className="desc-highlight">Festival Music &amp; Dance Teachers</p>
            <p className="desc-sub">From Jaipur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherInnerHero;
