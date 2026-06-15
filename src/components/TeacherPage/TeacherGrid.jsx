import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeacherGrid.css';

import dummyImg from '../../assets/teacher page/Vector (19).png';
import dividerImg from '../../assets/teacher page/Rectangle 44.png';
import ornamentImg from '../../assets/Group 5.png';

const categories = [
  'All',
  'Yoga & Meditation',
  'Sound Healing',
  'Breathwork',
  'Dharma Talks',
  'Spiritual Teachings',
  'Music, Kirtan & Voice',
  'Dance & Conscious Movement',
  'Arts & Body Practices',
  'Community',
  'Social & Cultural Gatherings',
];

// Dummy teacher data – same image & name repeated 18 times as per the design
const teachers = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: 'Anna Vivadiya',
  category: 'Yoga & Meditation',
  location: 'India',
  image: dummyImg,
}));

const TeacherGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className="teacher-grid-section">
      {/* Title */}
      <div className="teacher-grid-title-area">
        <p className="teacher-grid-year">2026</p>
        <h2 className="teacher-grid-heading">Oneness Teacher</h2>
        <div className="teacher-grid-divider-row">
          <img src={ornamentImg} alt="" className="teacher-grid-ornament" />
        </div>
        <p className="teacher-grid-subtitle">
          Tap a category to explore the 2026 speakers &amp; sessions
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="teacher-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`teacher-filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="teacher-cards-grid">
        {teachers.map((t) => (
          <Link to="/teacher-inner" className="teacher-card-link" key={t.id}>
            <div className="teacher-card">
              <img src={t.image} alt={t.name} className="teacher-card-img" />
              <div className="teacher-card-overlay">
                <h3 className="teacher-card-name">{t.name}</h3>
                <p className="teacher-card-category">{t.category}</p>
                <p className="teacher-card-location">{t.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More */}
      <button className="teacher-view-more-btn">VIEW MORE</button>
    </section>
  );
};

export default TeacherGrid;
