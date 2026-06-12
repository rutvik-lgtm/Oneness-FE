import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TeacherGrid.css';
import { API_URL } from '../../config';

import dummyImg from '../../assets/teacher page/Vector (19).png';
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

const TeacherGrid = () => {
  const [teachers, setTeachers] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch(`${API_URL}/teachers`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setTeachers(data.data);
        } else {
          // Fallback to static mock data
          setTeachers(Array.from({ length: 6 }, (_, i) => ({
            id: i + 1,
            name: 'Swami Dhyan Saraswati',
            category: 'Yoga & Meditation',
            title: 'Vedic Meditation Guru',
            image: dummyImg,
            location: 'India'
          })));
        }
      } catch (err) {
        console.error('Failed to fetch teachers', err);
      }
    };
    fetchTeachers();
  }, []);

  const filteredTeachers = activeFilter === 'All' 
    ? teachers 
    : teachers.filter(t => t.title?.toLowerCase().includes(activeFilter.toLowerCase()) || t.category === activeFilter);

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
        {filteredTeachers.map((t) => (
          <Link to={`/teacher-inner?id=${t._id || t.id}`} className="teacher-card-link" key={t._id || t.id}>
            <div className="teacher-card">
              <img src={t.image || dummyImg} alt={t.name} className="teacher-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="teacher-card-overlay">
                <h3 className="teacher-card-name">{t.name}</h3>
                <p className="teacher-card-category">{t.title || t.category || 'Teacher'}</p>
                <p className="teacher-card-location">{t.location || 'India'}</p>
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
