import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogInner.css';
import { API_URL } from '../config';

// Images
import heroBg from '../assets/blog/image 46.png';
import heroBg2 from '../assets/blog/bgimg.png';
import topDivider from '../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../assets/blog/dvider_20 4 (2).png';
import flourishImg from '../assets/blog/Group 79 (2).png';
import flourishImg1 from '../assets/blog/Group 5.png';
import cardImg from '../assets/blog/Rectangle 37 (2).png';

const BlogInner = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Comment Form State
  const [commentForm, setCommentForm] = useState({ name: '', email: '', comment: '' });
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentError, setCommentError] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  console.log("BlogInner rendering: slug =", slug, "loading =", loading, "blog =", blog);

  useEffect(() => {
    console.log('BlogInner: slug =', slug);
    window.scrollTo(0, 0);

    const fetchBlogData = async () => {
      setLoading(true);
      try {
        // Fetch specific blog by slug
        const res = await fetch(`${API_URL}/blogs/${slug}`);
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
        } else {
          // Fallback static blog post if slug not found
          setBlog({
            _id: 'mock123',
            title: 'GRAVIDA POSUERE SUSCIPIT ELEMENTUM DONEC EGET INTEGER.',
            excerpt: 'Discover the simple yet powerful ways introducing a daily meditation practice can reduce stress and increase clarity.',
            content: 'Meditation is not about stopping thoughts; it is about recognizing that you are more than your thoughts. In this article, we outline five practical techniques to incorporate meditation into a busy workday, from morning breathwork to evening gratitude logs. Learn how just 10 minutes a day can restructure neural pathways and reduce high cortisol levels. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel. Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur.',
            author: 'Swami Dhyan Saraswati',
            comments: []
          });
        }
      } catch (err) {
        console.error('Error fetching blog post', err);
        setBlog({
          _id: 'mock123',
          title: 'GRAVIDA POSUERE SUSCIPIT ELEMENTUM DONEC EGET INTEGER.',
          excerpt: 'Discover the simple yet powerful ways introducing a daily meditation practice can reduce stress and increase clarity.',
          content: 'Meditation is not about stopping thoughts; it is about recognizing that you are more than your thoughts. In this article, we outline five practical techniques to incorporate meditation into a busy workday, from morning breathwork to evening gratitude logs. Learn how just 10 minutes a day can restructure neural pathways and reduce high cortisol levels. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel. Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur.',
          author: 'Swami Dhyan Saraswati',
          comments: []
        });
      } finally {
        setLoading(false);
      }
    };

    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/blogs`);
        const data = await res.json();
        if (data.success) {
          setLatestPosts(data.data.slice(0, 5));
        } else {
          setLatestPosts(Array(3).fill({
            author: 'The Times of India',
            title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में...',
            excerpt: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत...',
            slug: 'meditation-transform-daily-routine',
            createdAt: new Date().toLocaleDateString()
          }));
        }
      } catch (err) {
        console.error('Error fetching latest blogs', err);
      }
    };

    if (slug) {
      fetchBlogData();
    } else {
      // If no slug is in params (accessed via /blog-inner directly), show default mock details
      setBlog({
        _id: 'mock123',
        title: 'GRAVIDA POSUERE SUSCIPIT ELEMENTUM DONEC EGET INTEGER.',
        excerpt: 'Discover the simple yet powerful ways introducing a daily meditation practice can reduce stress and increase clarity.',
        content: 'Meditation is not about stopping thoughts; it is about recognizing that you are more than your thoughts. In this article, we outline five practical techniques to incorporate meditation into a busy workday, from morning breathwork to evening gratitude logs. Learn how just 10 minutes a day can restructure neural pathways and reduce high cortisol levels. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel. Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur.',
        author: 'Swami Dhyan Saraswati',
        comments: []
      });
      setLoading(false);
    }
    fetchLatestBlogs();
  }, [slug]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setCommentLoading(true);
    setCommentError('');
    setCommentSuccess(false);

    try {
      const res = await fetch(`${API_URL}/blogs/${blog._id}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentForm)
      });
      const data = await res.json();
      if (data.success) {
        setBlog(data.data); // Update blog details with new comments list
        setCommentForm({ name: '', email: '', comment: '' });
        setCommentSuccess(true);
      } else {
        setCommentError(data.message || 'Failed to submit comment.');
      }
    } catch (err) {
      setCommentError('Failed to connect to server.');
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: '#fff' }}>
        <h2>Loading Blog Details...</h2>
      </div>
    );
  }

  return (
    <div className="blog-inner-page">
      {/* HERO SECTION */}
      <section className="blog-inner-hero" style={{ backgroundImage: `url("${heroBg}")` }}>
        <div className="blog-hero-top-divider-white">
          <img src={topDivider} alt="divider" />
        </div>
        
        <div className="blog-inner-hero-content">
          <h2>The Oneness Festival<br/>2026</h2>
          <h1 style={{ textTransform: 'uppercase' }}>{blog?.title ? (blog.title.length > 25 ? `${blog.title.substring(0, 25)}...` : blog.title) : 'BLOG'}</h1>
        </div>

        <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      <div className="blog-inner-top-divider-white">
        <img src={topDivider} alt="divider" />
      </div>
      
      {/* CONTENT SECTION */}
      <section className="blog-inner-content-section">
        <div className="blog-inner-container">
          {/* Left Column - Main Content */}
          <div className="blog-inner-left">
            <h1 className="blog-inner-title" style={{ textTransform: 'uppercase' }}>{blog?.title}</h1>
            <div className="blog-inner-flourish1">
              <img className='flourish1' src={flourishImg1} alt="flourish" />
            </div>
            
            <p style={{ fontStyle: 'italic', color: '#5cb1b9', fontSize: '1.1rem' }}>Written by: {blog?.author || 'Oneness Team'}</p>
            <p>{blog?.excerpt}</p>
            
            <div className="blog-inner-banner">
              <img className="heroBg2" src={blog?.coverImage || heroBg2} alt="Blog Cover" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }} />
            </div>
            
            <div className="blog-body-text-content" style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#444' }}>
              {blog?.content && blog.content.split('\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '15px' }}>{para}</p>
              ))}
            </div>

            {/* Comments Section */}
            <div className="blog-comments-section" style={{ marginTop: '50px', borderTop: '1px dashed rgba(0,0,0,0.15)', paddingTop: '30px' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#5cb1b9', marginBottom: '20px' }}>Comments ({blog?.comments?.length || 0})</h3>
              
              {blog?.comments && blog.comments.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
                  {blog.comments.map((comm, idx) => (
                    <div key={idx} style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', padding: '15px', borderRadius: '8px' }}>
                      <p style={{ fontWeight: 'bold', color: '#5cb1b9', fontSize: '0.95rem' }}>{comm.name}</p>
                      <p style={{ margin: '5px 0 0 0', fontSize: '0.95rem', color: '#555' }}>{comm.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ fontStyle: 'italic', opacity: 0.7, marginBottom: '40px' }}>No comments yet. Be the first to share your thoughts!</p>
              )}

              {/* Add Comment Form */}
              <div style={{ background: 'rgba(0,0,0,0.015)', padding: '25px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#5cb1b9', marginBottom: '15px' }}>Add a Comment</h4>
                {commentSuccess && <div style={{ color: '#5cb1b9', fontWeight: 'bold', marginBottom: '15px' }}>Comment posted successfully!</div>}
                {commentError && <div style={{ color: '#ff4d4d', fontWeight: 'bold', marginBottom: '15px' }}>{commentError}</div>}
                
                <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Your Name" 
                      value={commentForm.name} 
                      onChange={handleCommentChange} 
                      required 
                      style={{ flex: 1, padding: '12px 16px', background: '#fff', border: '1px solid #c8c2b5', color: '#333', borderRadius: '8px', outline: 'none', fontFamily: 'Roboto, sans-serif', fontSize: '0.95rem' }}
                    />
                    <input 
                      name="email"
                      type="email" 
                      placeholder="Your Email" 
                      value={commentForm.email} 
                      onChange={handleCommentChange} 
                      required 
                      style={{ flex: 1, padding: '12px 16px', background: '#fff', border: '1px solid #c8c2b5', color: '#333', borderRadius: '8px', outline: 'none', fontFamily: 'Roboto, sans-serif', fontSize: '0.95rem' }}
                    />
                  </div>
                  <textarea 
                    name="comment"
                    rows="4" 
                    placeholder="Type your comment here..." 
                    value={commentForm.comment} 
                    onChange={handleCommentChange} 
                    required 
                    style={{ padding: '12px 16px', background: '#fff', border: '1px solid #c8c2b5', color: '#333', borderRadius: '8px', outline: 'none', fontFamily: 'Roboto, sans-serif', fontSize: '0.95rem', resize: 'vertical' }}
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={commentLoading}
                    style={{ padding: '12px 25px', backgroundColor: '#5cb1b9', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start', transition: 'background-color 0.2s' }}
                  >
                    {commentLoading ? 'POSTING...' : 'POST COMMENT'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="blog-inner-right">
            <div className="blog-search-widget">
              <h3>Search Blogs</h3>
              <div className="search-input-group">
                <input type="text" placeholder="Enter Detail" />
                <button>Search</button>
              </div>
            </div>
            
            <div className="blog-latest-widget">
              <h3>LATEST BLOGS</h3>
              <div className="latest-blogs-list">
                {latestPosts.map((post, index) => (
                  <Link to={`/blog/${post.slug}`} className="latest-blog-item" key={post._id || index} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                    <div className="latest-blog-img">
                      <img src={post.coverImage || cardImg} alt="Blog Cover" />
                    </div>
                    <div className="latest-blog-info">
                      <div className="latest-blog-meta">
                        <span className="source-icon-small"><img src={flourishImg} alt="icon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
                        <span className="source-name-small">{post.author || 'Oneness Team'}</span>
                      </div>
                      <h4 className="latest-blog-title">{post.title ? (post.title.length > 45 ? `${post.title.substring(0, 45)}...` : post.title) : 'Blog Post'}</h4>
                      <p className="latest-blog-excerpt">{post.excerpt ? (post.excerpt.length > 60 ? `${post.excerpt.substring(0, 60)}...` : post.excerpt) : ''}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogInner;
