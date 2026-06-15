import React from 'react';
import './Accommodations.css';

// Assets
import bgImage from '../../assets/Accommodationpage/image 48.png';
import topMask from '../../assets/Accommodationpage/Mask group.png';
import bottomMask from '../../assets/Accommodationpage/Mask group (1).png';
import dividerImg from '../../assets/Accommodationpage/Group 5.png';

// Hotels & Banner Assets
import clarksBannerImg from '../../assets/Accommodationpage/Upscale Image.png';
import skylineImg from '../../assets/Accommodationpage/design.png';
import domeFrame from '../../assets/Accommodationpage/Vector.png';
import hotel1Img from '../../assets/Accommodationpage/img10.png';
import hotel2Img from '../../assets/Accommodationpage/img11.png';
import hotel3Img from '../../assets/Accommodationpage/img12.png';
import domeMask from '../../assets/homepage/Mask group (14).png';
import starburstImg from '../../assets/Accommodationpage/Group 173.png';
import archImg from '../../assets/Accommodationpage/pngwing.com (4) 1.png';
import archMask from '../../assets/Accommodationpage/pngwing.com (4) 3.png';
import archBaseImg from '../../assets/Accommodationpage/pngwing.com (4) 2.png';

const FlowerIcon = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={`accomm-btn-flower-icon ${className || ''}`}>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 1.5C12.5 1.5 13 3 13 5.5C13 8 12.5 9 12 9C11.5 9 11 8 11 5.5C11 3 11.5 1.5 12 1.5Z" />
    <path d="M12 22.5C11.5 22.5 11 21 11 18.5C11 16 11.5 15 12 15C12.5 15 13 16 13 18.5C13 21 12.5 22.5 12 22.5Z" />
    <path d="M1.5 12C1.5 11.5 3 11 5.5 11C8 11 9 11.5 9 12C9 12.5 8 13 5.5 13C3 13 1.5 12.5 1.5 12Z" />
    <path d="M22.5 12C22.5 12.5 21 13 18.5 13C16 13 15 12.5 15 12C15 11.5 16 11 18.5 11C21 11 22.5 11.5 22.5 12Z" />
    <path d="M4.58 4.58C4.93 4.22 6.1 5.05 7.87 6.81C9.64 8.58 9.94 9.24 9.59 9.59C9.24 9.94 8.58 9.64 6.81 7.87C5.05 6.1 4.22 4.93 4.58 4.58Z" />
    <path d="M19.42 19.42C19.07 19.78 17.9 18.95 16.13 17.19C14.36 15.42 14.06 14.76 14.41 14.41C14.76 14.06 15.42 14.36 17.19 16.13C18.95 17.9 19.78 19.07 19.42 19.42Z" />
    <path d="M4.58 19.42C4.22 19.07 5.05 17.9 6.81 16.13C8.58 14.36 9.24 14.06 9.59 14.41C9.94 14.76 9.64 15.42 7.87 17.19C6.1 18.95 4.93 19.78 4.58 19.42Z" />
    <path d="M19.42 4.58C19.78 4.93 18.95 6.1 17.19 7.87C15.42 9.64 14.76 9.94 14.41 9.59C14.06 9.24 14.36 8.58 16.13 6.81C17.9 5.05 19.07 4.22 19.42 4.58Z" />
  </svg>
);

const Accommodations = () => {
  const handleScrollToStays = () => {
    const staysSection = document.getElementById('stay-hotels-list');
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hotelData = [
    {
      id: 1,
      name: "Clarks Amer, Jaipur",
      image: hotel1Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 2,
      name: "The Lalit",
      image: hotel2Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 3,
      name: "Marriott",
      image: hotel3Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 4,
      name: "Hotel Name 4",
      image: hotel1Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 5,
      name: "Hotel Name 5",
      image: hotel2Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 6,
      name: "Hotel Name 6",
      image: hotel3Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 7,
      name: "Hotel Name 7",
      image: hotel1Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 8,
      name: "Hotel Name 8",
      image: hotel2Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 9,
      name: "Hotel Name 9",
      image: hotel3Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 10,
      name: "Hotel Name 10",
      image: hotel1Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 11,
      name: "Hotel Name 11",
      image: hotel2Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 12,
      name: "Hotel Name 12",
      image: hotel3Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 13,
      name: "Hotel Name 13",
      image: hotel1Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 14,
      name: "Hotel Name 14",
      image: hotel2Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    },
    {
      id: 15,
      name: "Hotel Name 15",
      image: hotel3Img,
      distance: "10 mins drive (2-3 km)",
      desc: "Lorem ipsum dolor sit amet, consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum, sit tempor auctor nulla ipsum erat."
    }
  ];

  return (
    <div className="accomm-page-wrapper">
      {/* Hero Section */}
      <section className="accomm-hero-section" style={{ backgroundImage: `url("${bgImage}")` }}>
        <div className="accomm-hero-overlay" />

        {/* Top Mask */}
        <img src={topMask} alt="" className="accomm-mask-top" />

        <div className="accomm-hero-content">
          <p className="accomm-hero-subtitle">The Oneness Festival Packages</p>
          <p className="accomm-hero-year">2026</p>
          <h1 className="accomm-hero-title">GET YOUR ACCOMMODATION</h1>

          <div className="accomm-btn-wrapper">
            <button className="accomm-reserve-btn" onClick={handleScrollToStays}>
              <div className="accomm-btn-inner">
                {/* <FlowerIcon className="flower-left-bottom" /> */}
                <span className="accomm-btn-text">RESERVE YOUR ACCOMMODATION</span>
                {/* <FlowerIcon className="flower-right-top" /> */}
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Mask */}
        <img src={bottomMask} alt="" className="accomm-mask-bottom" />
      </section>

      {/* Intro Description Section */}
      <section className="accomm-intro-section">
        <div className="accomm-intro-container">
          <p className="accomm-intro-year">2026</p>
          <h2 className="accomm-intro-title">ACCOMMODATION</h2>

          <img src={dividerImg} alt="Teal Divider" className="accomm-intro-divider" />

          <p className="accomm-intro-text">
            Jaipur is a city of heritage, culture, and hospitality.
            <br />
            We have gathered options for accommodation near the festival venue to make your stay comfortable, peaceful, and convenient.
            <br />
            Here you will find something that suits your needs.
          </p>
        </div>

      </section>

      {/* Clarks Amer Hotel Banner Section */}
      <section className="accomm-hotel-banner" style={{ backgroundImage: `url("${clarksBannerImg}")` }}>
        <div className="accomm-banner-overlay" />

        {/* Top mask overlaying the banner image */}
        <img src={topMask} alt="" className="accomm-banner-mask-top" />
      </section>

      {/* Stay Close to the Festival Hotels Section */}
      <section className="accomm-hotels-section" id="stay-hotels-list">
        {/* Skyline Silhouette overlapping the banner above */}
        <img src={skylineImg} alt="" className="accomm-hotels-silhouette" />

        <div className="accomm-hotels-container">
          {/* Header Block */}
          <div className="accomm-hotels-header">
            <p className="accomm-hotels-year">2026</p>

            <div className="accomm-hotels-title-wrapper">
              <img src={starburstImg} alt="" className="accomm-starburst-left" />
              <h2 className="accomm-hotels-title">STAY CLOSE TO THE FESTIVAL</h2>
              <img src={starburstImg} alt="" className="accomm-starburst-right" />
            </div>

            <img src={dividerImg} alt="Teal Divider" className="accomm-hotels-divider" />

            <p className="accomm-hotels-subtitle">
              “We've curated a selection of hotels and guesthouses near the festival venue to make your stay comfortable, peaceful, and convenient.”
            </p>
          </div>

          {/* Grid of 15 Hotel Cards */}
          <div className="accomm-hotels-grid">
            {hotelData.map((hotel) => (
              <div key={hotel.id} className="accomm-hotel-card">
                <div className="accomm-hotel-frame-wrap">
                  {hotel.image ? (
                    <div
                      className="accomm-hotel-img"
                      style={{
                        backgroundImage: `url(${hotel.image})`,
                        WebkitMaskImage: `url(${domeMask})`,
                        maskImage: `url(${domeMask})`
                      }}
                    />
                  ) : (
                    <div
                      className="accomm-hotel-img-placeholder"
                      style={{
                        WebkitMaskImage: `url(${domeMask})`,
                        maskImage: `url(${domeMask})`
                      }}
                    />
                  )}
                  <img src={domeFrame} alt="Dome Frame" className="accomm-hotel-frame" />
                </div>

                <h3 className="accomm-hotel-name">{hotel.name}</h3>

                <p className="accomm-hotel-distance">
                  <span className="distance-label">Distance : </span>
                  <span className="distance-value">{hotel.distance}</span>
                </p>

                <p className="accomm-hotel-desc">{hotel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Archway CTA Section */}
      <section className="accomm-arch-section">
        <div className="accomm-arch-container">
          <div className="accomm-arch-image-wrap">
            <img src={archImg} alt="Archway" className="accomm-arch-image" />
            <div className="accomm-arch-image-overlay" />
          </div>
          <div className="accomm-arch-base-wrap">
            <img src={archBaseImg} alt="" className="accomm-arch-base" />
            <div className="accomm-arch-base-overlay" />
          </div>
          <img src={archMask} alt="" className="accomm-arch-mask" />
          <div className="accomm-arch-content">
            <p className="accomm-arch-year">2026</p>
            <h2 className="accomm-arch-title">
              WANT TO BOOK YOUR STAY<br />
              AND SECURE<br />
              YOUR SPOT NEAR THE<br />
              FESTIVAL?
            </h2>
            <img src={dividerImg} alt="Teal Divider" className="accomm-arch-divider" />
            <button className="accomm-arch-btn" onClick={handleScrollToStays}>
              <div className="accomm-arch-btn-inner">
                {/* <FlowerIcon className="arch-flower-left" /> */}
                <span className="accomm-arch-btn-text">RESERVE YOUR ACCOMMODATION →</span>
                {/* <FlowerIcon className="arch-flower-right" /> */}
              </div>
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Accommodations;
