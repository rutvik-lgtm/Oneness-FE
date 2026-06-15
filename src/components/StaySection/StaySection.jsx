import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StaySection.css';

// Assets
import bgImg from '../../assets/homepage/bg1.png';
import dividerImg from '../../assets/homepage/Group 5.png';
import apati1Img from '../../assets/homepage/apati1.png';

// Images
import hotel1Img from '../../assets/homepage/image 25.png';
import hotel2Img from '../../assets/homepage/image 26.png';
import hotel3Img from '../../assets/homepage/image 27.png';

// Frames
import frame1Img from '../../assets/homepage/Vector (13).png';
import frame2Img from '../../assets/homepage/Vector (13).png';
import frame3Img from '../../assets/homepage/Vector (13).png';

// Masks
import mask1Img from '../../assets/homepage/Mask group (13).png';
import mask2Img from '../../assets/homepage/Mask group (14).png';
import mask3Img from '../../assets/homepage/Mask group (5).png';


const StaySection = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const hotels = [
    {
      id: 1,
      image: hotel1Img,
      frame: frame1Img,
      mask: mask1Img,
      name: "CLARKS AMER",
      rating: 5,
      description: "Festival Venue - 5 Star Luxury Hotel in Jaipur featuring high-end amenities and premier comfort."
    },
    {
      id: 2,
      image: hotel2Img,
      frame: frame2Img,
      mask: mask2Img,
      name: "ROYAL HERITAGE PALACE",
      rating: 5,
      description: "Live like royalty in heritage luxury suites with traditional architecture and personalized service."
    },
    {
      id: 3,
      image: hotel3Img,
      frame: frame3Img,
      mask: mask3Img,
      name: "OASIS BOUTIQUE HOTEL",
      rating: 4,
      description: "Boutique oasis of calm and elegant comfort surrounded by lush green gardens and tranquility."
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % hotels.length);
  };

  const handleExploreStays = () => {
    navigate('/accommodation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine which 2 hotels are visible on mobile
  const firstVisibleIndex = activeSlide;
  const secondVisibleIndex = (activeSlide + 1) % hotels.length;

  return (
    <section
      className="stay-section"
      id="stay-accommodation"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="stay-container">
        {/* Header Block */}
        <div className="stay-header">
          <p className="stay-year">2026</p>
          <h2 className="stay-title">STAY CLOSE TO THE FESTIVAL</h2>
          <img src={dividerImg} alt="Divider" className="stay-title-divider" />
          <p className="stay-subtitle">
            We have curated select partner hotels close to the festival grounds for a premium, hassle-free stay experience.
          </p>
        </div>

        {/* Hotels Grid / Carousel */}
        <div className="stay-hotels-grid">
          {/* Left Arrow Button */}
          <button
            className="stay-carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous Hotel"
          >
            ‹
          </button>

          {hotels.map((hotel, index) => {
            const isFirst = index === firstVisibleIndex;
            const isSecond = index === secondVisibleIndex;
            const isVisible = isFirst || isSecond;

            return (
              <div
                key={hotel.id}
                className={`stay-hotel-card ${isVisible ? 'mobile-visible' : ''} ${isFirst ? 'mobile-first' : ''} ${isSecond ? 'mobile-second' : ''}`}
              >
                <div className="stay-hotel-frame-wrap">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="stay-hotel-img"
                    style={{
                      WebkitMaskImage: `url(${hotel.mask})`,
                      maskImage: `url(${hotel.mask})`
                    }}
                  />
                  <img src={hotel.frame} alt="Frame" className="stay-hotel-frame" />
                </div>
                <h3 className="stay-hotel-name">{hotel.name}</h3>

                {/* Star Rating */}
                <div className="stay-hotel-stars">
                  {Array.from({ length: hotel.rating }).map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>

                <p className="stay-hotel-desc">{hotel.description}</p>
              </div>
            );
          })}

          {/* Right Arrow Button */}
          <button
            className="stay-carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Next Hotel"
          >
            ›
          </button>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="stay-carousel-indicators">
          {hotels.map((_, index) => (
            <button
              key={index}
              className={`stay-indicator-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="stay-cta-container">
          <button className="stay-explore-btn" onClick={handleExploreStays}>
            Explore Accommodation Options
          </button>
        </div>

        {/* Bottom registration info note */}
        <p className="stay-bottom-note">
          Details regarding entry and registration will be shared soon. Those wishing to attend may subscribe for updates.
        </p>
      </div>
      {/* Bottom paint brush transition image */}
      <img src={apati1Img} alt="" className="stay-bottom-brush" />
    </section>
  );
};

export default StaySection;
