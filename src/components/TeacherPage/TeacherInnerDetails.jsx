import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './TeacherInnerDetails.css';
import ornamentDivider from '../../assets/Group 5.png'; 
import { API_URL } from '../../config';

const TeacherInnerDetails = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const teacherId = searchParams.get('id');
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!teacherId) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`${API_URL}/teachers/${teacherId}`);
        const data = await res.json();
        if (data.success) {
          setTeacher(data.data);
        }
      } catch (err) {
        console.error('Failed to load teacher details', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [teacherId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: '#fff' }}>
        <h2>Loading Teacher Profile...</h2>
      </div>
    );
  }

  // Fallback to static mock data if no teacher is loaded or found
  const displayTeacher = teacher || {
    name: 'ANNA VIVADIYA',
    title: 'Fit Arts - Body Mobility & Mechanics',
    bio: 'Swami Ji has dedicated his life to teaching Vedic scriptures, mindfulness, and the ancient art of silence. She teaches yoga as a holistic path toward physical strength, mental clarity, and spiritual alignment.',
    details: 'Anna Vivadiya is a certified E-RYT 500 instructor. She will guide the daily flow sessions and alignment clinics. She focuses on breath-driven movements and customized pose adjustments for all practice levels.',
    socials: {
      youtube: '@annavivadiya',
      instagram: '@annavivadiya',
      facebook: 'https://facebook.com/annavivadiya'
    }
  };

  return (
    <div className="teacher-inner-details">
      <div className="tid-header">
        <h2 className="tid-title" style={{ textTransform: 'uppercase' }}>{displayTeacher.name}</h2>
        <p className="tid-subtitle">{displayTeacher.title}<br/>India</p>
        <img src={ornamentDivider} alt="divider" className="tid-divider" />
      </div>

      <div className="tid-content" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
        <p>{displayTeacher.bio}</p>
        {displayTeacher.details && (
          <p style={{ marginTop: '15px' }}>{displayTeacher.details}</p>
        )}
      </div>

      <div className="tid-video-section">
        <div className="tid-video-bg">
          {!isVideoOpen ? (
            <>
              <div className="tid-video-overlay"></div>
              <div className="tid-video-content">
                <div className="tid-video-left"></div>
                <div className="tid-video-right">
                    <p className="tid-vt-live">Live Music Festival</p>
                    <h1 className="tid-vt-night">NIGHT</h1>
                    <p className="tid-vt-rock">Rock Music Event</p>
                    
                    <div className="tid-play-area">
                      <div className="tid-play-btn" onClick={() => setIsVideoOpen(true)}>
                         <div className="play-triangle"></div>
                      </div>
                      <div>
                        <p className="tid-vt-special">Special Performer</p>
                        <p className="tid-vt-names">Robert jr. | kelly Bin | St. Khleed</p>
                      </div>
                    </div>

                    <p className="tid-vt-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis vitae nulla quis egestas. Mauris eros diam, rutrum posuere velit sit amet Fusce piscing. consectetur adipiscing ipsum dolor sit amet.</p>
                    
                    <div className="tid-vt-bottom">
                      <div className="tid-vt-book">
                        <p className="tid-book-text">Book your Tickets Now</p>
                        <p className="tid-book-url">www.websitename.com</p>
                      </div>
                      <a href="https://youtu.be/sxF9qHoXf2I" target="_blank" rel="noopener noreferrer" className="tid-youtube-btn" style={{ textDecoration: 'none' }}>
                        <span>Watch on </span>
                        <svg viewBox="0 0 24 24" className="yt-logo" fill="currentColor">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.5,15.5v-7L16,12L9.5,15.5z"/>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
              <div className="tid-vertical-text">
                <span>W: +0123 456 7890 <span className="tid-vert-sep">|</span> TICKETS: WWW.WEBSITENAME.COM</span>
              </div>
            </>
          ) : (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/sxF9qHoXf2I?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="tid-contact-bar">
        <p className="tid-contact-title">Contact Information:</p>
        <div className="tid-contact-links">
          {displayTeacher.socials?.youtube && (
            <>
              <span><strong className="tid-highlight-orange">Youtube:</strong> <a className='link' href={`https://www.youtube.com/${displayTeacher.socials.youtube}`}>{displayTeacher.socials.youtube}</a></span>
              <span className="tid-contact-separator">|</span>
            </>
          )}
          {displayTeacher.socials?.instagram && (
            <>
              <span><strong className="tid-highlight-orange">Instagram:</strong> <a className='link' href={`https://www.instagram.com/${displayTeacher.socials.instagram}`}>{displayTeacher.socials.instagram}</a></span>
              <span className="tid-contact-separator">|</span>
            </>
          )}
          <span><strong className="tid-highlight-orange">Facebook:</strong> <a className='link' href={displayTeacher.socials?.facebook || 'https://facebook.com'}>Profile Link</a></span>
        </div>
      </div>
    </div>
  );
};

export default TeacherInnerDetails;
