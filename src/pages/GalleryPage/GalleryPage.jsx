import React, { useEffect, useState } from 'react';
import './GalleryPage.css';

// Images
import heroBg from '../../assets/gallry/gallery hero.png';
import dividerImg from '../../assets/gallry/Group 5 (9).png';
import topDivider from '../../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../../assets/blog/dvider_20 4 (2).png';

// Gallery page images
import gImg1 from '../../assets/gallery page img/1.jpeg';
import gImg2 from '../../assets/gallery page img/2.jpeg';
import gImg3 from '../../assets/gallery page img/3.jpeg';
import gImg4 from '../../assets/gallery page img/4.jpg';
import gImg5 from '../../assets/gallery page img/5.jpg';
import gImg6 from '../../assets/gallery page img/6.jpg';
import gImg7 from '../../assets/gallery page img/7.jpg';
import gImg8 from '../../assets/gallery page img/8.jpg';
import gImg9 from '../../assets/gallery page img/9.jpg';
import gImg10 from '../../assets/gallery page img/10.jpg';
import gImg11 from '../../assets/gallery page img/11.jpg';
import gImg12 from '../../assets/gallery page img/12.jpeg';
import gImg13 from '../../assets/gallery page img/13.jpg';
import gImg14 from '../../assets/gallery page img/14.jpg';
import gImg15 from '../../assets/gallery page img/15.jpg';
import gImg16 from '../../assets/gallery page img/16.jpg';
import gImg17 from '../../assets/gallery page img/17.jpeg';
import gImg18 from '../../assets/gallery page img/18.png';
import gImg19 from '../../assets/gallery page img/19.jpg';
import gImg20 from '../../assets/gallery page img/20.jpg';
import gImg21 from '../../assets/gallery page img/21.jpeg';
import gImg22 from '../../assets/gallery page img/22.png';
import gImg23 from '../../assets/gallery page img/23.png';
import gImg24 from '../../assets/gallery page img/24.jpg';
import gImg25 from '../../assets/gallery page img/25.jpeg';
import gImg26 from '../../assets/gallery page img/26.jpg';
import gImg27 from '../../assets/gallery page img/27.jpeg';
import gImg28 from '../../assets/gallery page img/28.png';
import gImg29 from '../../assets/gallery page img/29.jpg';
import gImg30 from '../../assets/gallery page img/30.jpeg';

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

const mediaFilters = ['Both', 'Photos', 'Videos'];

// Gallery items - pattern per page: img, img, VIDEO, img, img, img, VIDEO, img, img, img, img, img
const galleryItems = [

  // ── Page 1 (1–12) ──────────────────────────────────────
  { id: 1,  type: 'photo', category: 'Yoga & Meditation',            img: gImg1  },
  { id: 2,  type: 'photo', category: 'Sound Healing',                img: gImg2  },
  { id: 3,  type: 'video', category: 'Music, Kirtan & Voice',        img: null   }, // dummy video
  { id: 4,  type: 'photo', category: 'Spiritual Teachings',          img: gImg3  },
  { id: 5,  type: 'photo', category: 'Dance & Conscious Movement',   img: gImg4  },
  { id: 6,  type: 'video', category: 'Dharma Talks',                 img: null   }, // dummy video
  { id: 7,  type: 'photo', category: 'Yoga & Meditation',            img: gImg5  },
  { id: 8,  type: 'photo', category: 'Arts & Body Practices',        img: gImg6  },
  { id: 9,  type: 'photo', category: 'Community',                    img: gImg7  },
  { id: 10, type: 'photo', category: 'Social & Cultural Gatherings', img: gImg8  },
  { id: 11, type: 'photo', category: 'Breathwork',                   img: gImg9  },
  { id: 12, type: 'photo', category: 'Spiritual Teachings',          img: gImg10 },

  // ── Page 2 (13–24) ─────────────────────────────────────
  { id: 13, type: 'photo', category: 'Yoga & Meditation',            img: gImg11 },
  { id: 14, type: 'photo', category: 'Sound Healing',                img: gImg12 },
  { id: 15, type: 'video', category: 'Community',                    img: null   }, // dummy video
  { id: 16, type: 'photo', category: 'Music, Kirtan & Voice',        img: gImg13 },
  { id: 17, type: 'photo', category: 'Breathwork',                   img: gImg14 },
  { id: 18, type: 'photo', category: 'Dance & Conscious Movement',   img: gImg15 },
  { id: 19, type: 'video', category: 'Sound Healing',                img: null   }, // dummy video
  { id: 20, type: 'photo', category: 'Arts & Body Practices',        img: gImg16 },
  { id: 21, type: 'photo', category: 'Social & Cultural Gatherings', img: gImg17 },
  { id: 22, type: 'photo', category: 'Dharma Talks',                 img: gImg18 },
  { id: 23, type: 'photo', category: 'Spiritual Teachings',          img: gImg19 },
  { id: 24, type: 'photo', category: 'Yoga & Meditation',            img: gImg20 },

  // ── Page 3 (25–36) ─────────────────────────────────────
  { id: 25, type: 'photo', category: 'Music, Kirtan & Voice',        img: gImg21 },
  { id: 26, type: 'photo', category: 'Dance & Conscious Movement',   img: gImg22 },
  { id: 27, type: 'video', category: 'Yoga & Meditation',            img: null   }, // dummy video
  { id: 28, type: 'photo', category: 'Breathwork',                   img: gImg23 },
  { id: 29, type: 'photo', category: 'Arts & Body Practices',        img: gImg24 },
  { id: 30, type: 'photo', category: 'Community',                    img: gImg25 },
  { id: 31, type: 'video', category: 'Dance & Conscious Movement',   img: null   }, // dummy video
  { id: 32, type: 'photo', category: 'Sound Healing',                img: gImg26 },
  { id: 33, type: 'photo', category: 'Spiritual Teachings',          img: gImg27 },
  { id: 34, type: 'photo', category: 'Social & Cultural Gatherings', img: gImg28 },
  { id: 35, type: 'photo', category: 'Community',                    img: gImg29 },
  { id: 36, type: 'photo', category: 'Yoga & Meditation',            img: gImg30 },
];

const GalleryPage = () => {
  const [activeMediaFilter, setActiveMediaFilter] = useState('Both');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    const matchesMedia =
      activeMediaFilter === 'Both' ||
      (activeMediaFilter === 'Photos' && item.type === 'photo') ||
      (activeMediaFilter === 'Videos' && item.type === 'video');

    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    return matchesMedia && matchesCategory;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset to page 1 when filters change
  const handleMediaFilter = (filter) => {
    setActiveMediaFilter(filter);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-top-divider">
          <img src={topDivider} alt="divider" />
        </div>
        <img src={heroBg} alt="True balance unites inner and outer worlds" className="gallery-hero-img" />
        <div className="gallery-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* Title & Filters Section */}
      <section className="gallery-filters-section">
        <div className="gallery-title-block">
          <h4>2026</h4>
          <h2>FESTIVAL GALLERY</h2>
          <img src={dividerImg} alt="divider" className="gallery-divider" />
          <p className="gallery-subtitle">Explore all categories of our oneness festival</p>
        </div>

        {/* Media Filter: Both / Photos / Videos */}
        <div className="gallery-media-filters">
          {mediaFilters.map((filter) => (
            <button
              key={filter}
              className={`media-filter-btn ${activeMediaFilter === filter ? 'active' : ''}`}
              onClick={() => handleMediaFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Category Tags */}
        <div className="gallery-category-tags">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tag ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {currentItems.map((item) => (
            <div className="gallery-grid-item" key={item.id}>
              {item.img ? (
                <>
                  <img src={item.img} alt={`Gallery ${item.id}`} />
                  {item.type === 'video' && (
                    <div className="gallery-play-btn">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.85)" />
                        <polygon points="16,12 30,20 16,28" fill="#333" />
                      </svg>
                    </div>
                  )}
                </>
              ) : (
                <div className="gallery-placeholder">
                  {item.type === 'video' && (
                    <div className="gallery-play-btn placeholder-play">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.15)" />
                        <polygon points="16,12 30,20 16,28" fill="rgba(255,255,255,0.3)" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="gallery-pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`gallery-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="gallery-page-btn gallery-next-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ▶
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;
