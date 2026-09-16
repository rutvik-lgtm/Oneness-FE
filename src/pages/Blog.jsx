import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { API_URL } from '../config';

// Images
import heroBg from '../assets/blog/image 46.png';
import topDivider from '../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../assets/blog/dvider_20 4 (2).png';
import flourishImg from '../assets/blog/Group 79 (2).png';
import cardImg from '../assets/blog/Rectangle 37 (2).png';
import did from '../assets/blog/Group 5 (7).png';

import { DEFAULT_BLOGS } from '../data/blogData';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(DEFAULT_BLOGS);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/blogs`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          const hasBurnout = data.data.some(b => b.slug === DEFAULT_BLOGS[0].slug);
          setBlogPosts(hasBurnout ? data.data : [DEFAULT_BLOGS[0], ...data.data]);
        } else {
          setBlogPosts(DEFAULT_BLOGS);
        }
      } catch (err) {
        console.error('Failed to fetch blogs, using default posts', err);
        setBlogPosts(DEFAULT_BLOGS);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <section className="blog-hero" style={{ backgroundImage: `url("${heroBg}")` }}>
        <div className="blog-hero-top-divider-white">
          <img src={topDivider} alt="divider" />
        </div>
        <div className="blog-hero-top-divider-yellow">
          <img src={topDivider} alt="divider" />
        </div>
        
        <div className="blog-hero-content">
          <h2>The Oneness Festival<br/>2026</h2>
          <h1>BLOG</h1>
        </div>

        <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* UPDATES AND BLOGS SECTION */}
      <section className="blog-updates-section">
         <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
        <div className="section-header">
          <h3>2026</h3>
          <h2>ONENESS UPDATES AND<br/>BLOGS</h2>
          <img src={did} alt="flourish" className="did-icon" />
        </div>

        <div className="blog-grid">
          {blogPosts.slice(0, visibleCount).map((post, index) => (
            <div className="blog-card" key={post._id || index}>
              <div className="blog-card-img">
                <img src={post.coverImage || cardImg} alt="Blog Cover" />
              </div>
              <div className="blog-card-content">
                <div className="blog-source">
                  <span className="source-icon"><img src={flourishImg} alt="icon" style={{ width: '26px', height: '23px', objectFit: 'contain' }} /></span>
                  <span className="source-name">{post.author || 'The Times of India'}</span>
                </div>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog-inner/${post.slug}`} className="read-more">READ MORE &rarr;</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button 
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            LOAD MORE BLOGS
          </button>
        </div>
         <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="blog-media-section">
        <div className="section-header2">
          <h3 >2026</h3>
          <h2 >ONENESS FESTIVAL MEDIA</h2>
          <img src={did} alt="flourish" className="did-icon" />
        </div>

        <div className="media-grid">
          <div className="media-grid-top">
            <Link to="/gallery" className="media-video large" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
            <Link to="/gallery" className="media-video large" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
          </div>
          <div className="media-grid-bottom">
            <Link to="/gallery" className="media-video small" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
            <Link to="/gallery" className="media-video small" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
            <Link to="/gallery" className="media-video small" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
            <Link to="/gallery" className="media-video small" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="play-button"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
