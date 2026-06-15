import React, { useState, useEffect } from 'react';
import './AboutPage.css';

import bgImage from '../../assets/about us/image 32.png';
import topMask from '../../assets/about us/Mask group (27).png';
import bottomMask from '../../assets/about us/Mask group (26).png';
import flowerIcon from '../../assets/about us/Group 55.png';
import dividerIcon from '../../assets/about us/Group 5 (10).png';
import peacockFeather from '../../assets/about us/image 14 (1).png';
import frameImg from '../../assets/about us/Vector (21).png';

import turbanMan from '../../assets/about us/raj (1) 8.png';
import camels from '../../assets/about us/raj (1) 9.png';
import camels1 from '../../assets/about us/raj (2) 9.png';
import unityCircleImg from '../../assets/about us/bg (2).png';
import unityBg from '../../assets/about us/Group 84 (1).png';
import goldPalaceCutout from '../../assets/about us/raj (1) 2.png';
import approachDivider from '../../assets/about us/Group (14).png';

import yoga1 from '../../assets/about us/yoga pose.png';
import yoga2 from '../../assets/about us/yoga pose (1).png';
import yoga3 from '../../assets/about us/yoga pose (2).png';
import yoga4 from '../../assets/about us/yoga pose (3).png';

const AboutPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeCardIndex]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url("${bgImage}")` }}>
        <img src={topMask} alt="Top Torn Edge" className="about-mask-top mask-overlay" />
        
        <div className="about-hero-content">
          <h1>ABOUT<br />JAIPUR ONENESS<br />FESTIVAL</h1>
          <p className="about-hero-date">00 January - 00 January<br />2026</p>
          
          {/* Floating Flowers */}
          <img src={flowerIcon} alt="flower" className="about-flower about-flower-1" />
          <img src={flowerIcon} alt="flower" className="about-flower about-flower-2" />
        </div>
        
        <img src={bottomMask} alt="Bottom Torn Edge" className="about-mask-bottom mask-overlay" />
      </section>

      {/* Intro Text Section */}
      <section className="about-intro">
        <div className="about-text-wrapper">
          <p>
            Jaipur Oneness Festival is a cultural and spiritual gathering celebrating oneness and 
            connection in India. It is a space to reconnect with your own essence, experience 
            wholeness within yourself, and explore life from your true self. When we live 
            authentically, others can see us clearly, and we naturally attract people and 
            circumstances that resonate with our path.
          </p>
          <img src={flowerIcon} alt="flower" className="about-flower about-flower-3" />
          <p className="about-text-second">
            The festival brings together people who wish to live, move, and relate from their true 
            selves, sharing a sense of unity,<br />
            harmony, and purpose with others.
          </p>
          <img src={flowerIcon} alt="flower" className="about-flower about-flower-4" />
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="about-vision">
        <img src={topMask} alt="Top Torn Edge" className="about-vision-mask-top mask-overlay" />
        <img src={peacockFeather} alt="Peacock feather" className="peacock-feather-about" />
        
        <div className="vision-content">
          <div className="vision-text">
            <h2>OUR VISION</h2>
            <p>
              Our goal is to create events that awaken participants to oneness, both within themselves and with each other. We offer a space for people who wish to journey through life together with an audience that resonates at this moment, fostering connection, reflection, and inner fulfilment.
            </p>
          </div>
          <div className="vision-frame-wrapper">
            {/* <div className="vision-frame"> */}
              {/* <img src={aboutVisionImg} alt="Group discussion" /> */}
            {/* </div> */}
            <img src={frameImg} alt="" className="vision-frame-border" />
          </div>
        </div>

        <div className="yoga-poses">
          <img src={yoga1} alt="Yoga pose" className="yoga-icon yoga-1" />
          <img src={yoga2} alt="Yoga pose" className="yoga-icon yoga-2" />
          <img src={yoga3} alt="Yoga pose" className="yoga-icon yoga-3" />
          <img src={yoga4} alt="Yoga pose" className="yoga-icon yoga-4" />
        </div>
        <img src={bottomMask} alt="Bottom Torn Edge" className="about-vision-mask-bottom mask-overlay" />
      </section>

      {/* Living in Alignment Section */}
      <section className="about-alignment">
        <div className="alignment-header">
          <h2>LIVING IN ALIGNMENT</h2>
          <img src={dividerIcon} alt="Divider" className="section-divider" />
        </div>
        
        <div className="alignment-content">
          <img src={turbanMan} alt="Man" className="alignment-character-left" />
          
          <div className="alignment-boxes">
            <div className="alignment-box">
              Each of us leads our own lives, often focused on our families or personal goals. At the festival, we explore what it means to live, move, and be in alignment with ourselves, each other, and the larger community.
            </div>
            <div className="alignment-box">
              Living from your true self allows you to naturally align with the whole, with nature, the universe, and those around you. This alignment forms the foundation for community, harmony, and inner fulfilment.
            </div>
          </div>

        </div>
      </section>

      {/* Carried in Unity Section */}
      <section className="about-unity" style={{ backgroundImage: `url("${unityBg}")` }}>
        <div className="unity-content">
          <div className="unity-image">
             <img src={unityCircleImg} alt="People at Hawa Mahal" />
          </div>
          <div className="unity-text">
            <h2>CARRIED IN UNITY AND WHOLENESS</h2>
            <div className="unity-divider-wrapper">
              <img src={dividerIcon} alt="Divider" className="section-divider" />
            </div>
            <p>
              At Jaipur Oneness Festival, we invite you to carry yourself in wholeness. Our workshops, facilitators, artists, organisers, and supporting crew create a field of support for each participant. Together, we co-create a shared journey, a sustained field of unity, wholeness, and flow.
            </p>
            <p>
              When you participate in our larger gatherings, you contribute not only for yourself but as part of a larger, harmonious community, taking your place within the collective experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="about-approach">
        <div className="approach-header">
          <span className="approach-year">2026</span>
          <h2>OUR APPROACH</h2>
          <img src={dividerIcon} alt="Divider" className="section-divider approach-section-divider" />
          <p className="approach-intro-desc">
            At Jaipur Oneness Festival, every participant is both seeker and contributor, joining a collective journey toward self-discovery, connection, and oneness.
          </p>
        </div>

        <div className="approach-grid">
          <div className={`approach-card card-workshops ${activeCardIndex === 0 ? 'active' : ''}`}>
            <h3>WORKSHOPS<br />AND<br />EXPERIENCES</h3>
            <p>
              Guided sessions that support self-exploration, inner alignment, and authentic expression.
            </p>
          </div>
          <div className={`approach-card card-community ${activeCardIndex === 1 ? 'active' : ''}`}>
            <h3>COMMUNITY<br />AND<br />CO-CREATION</h3>
            <p>
              Each participant actively contributes to the shared field of unity and harmony.
            </p>
          </div>

          <div className={`approach-card card-art ${activeCardIndex === 2 ? 'active' : ''}`}>
            <h3>ART<br />AND<br />EXPRESSION</h3>
            <p>
              Artists and performers cultivate an environment of inspiration and reflection.
            </p>
          </div>

          <div className={`approach-card card-facilitators ${activeCardIndex === 3 ? 'active' : ''}`}>
            <h3>FACILITATORS<br />AND<br />GUIDES</h3>
            <p>
              Experienced facilitators hold space for deep engagement, learning, and transformation.
            </p>
          </div>
        </div>

        {/* Carousel indicators/dots for mobile only */}
        <div className="approach-carousel-dots">
          {[0, 1, 2, 3].map((index) => (
            <span 
              key={index} 
              className={`carousel-dot ${activeCardIndex === index ? 'active' : ''}`}
              onClick={() => setActiveCardIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="approach-toggle-btn"
          onClick={() => setActiveCardIndex((prev) => (prev + 1) % 4)}
          aria-label="Next Card"
        >
          <svg 
            width="10" 
            height="16" 
            viewBox="0 0 10 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1.5 1.5L8 8L1.5 14.5" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Landscape hills overlay at bottom */}
        <img src={approachDivider} alt="" className="approach-landscape" />

        {/* Overlapping characters */}
        <img src={goldPalaceCutout} alt="Palace Right" className="approach-palace-right" />
      </section>
    </div>
  );
};

export default AboutPage;
