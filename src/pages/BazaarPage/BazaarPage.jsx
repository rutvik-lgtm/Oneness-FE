import React, { useEffect } from 'react';
import './BazaarPage.css';

// Images
import heroBg from '../../assets/bazaar/Janpath-Market-1 1.png';
import topDivider from '../../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../../assets/blog/dvider_20 4 (2).png';
import artisanImg from '../../assets/bazaar/tradition.png';
import flowerIcon from '../../assets/bazaar/Group 71 (1).png';
// import vactorIcon from '../../assets/bazaar/Group 71 (.png';  
import vactor from '../../assets/bazaar/Vector (20).png';
import sectionDivider from '../../assets/bazaar/Group 5 (8).png';
import starsIcon from '../../assets/bazaar/star.png';

const BazaarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vendors = Array(6).fill({
    name: 'VENDOR NAME',
    desc: 'Lorem ipsum dolor sit amet consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel. Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur. Interdum euismod purus penatibus nulla fames et feugiat elementum ac.'
  });

  return (
    <div className="bazaar-page-container">
      {/* Hero Section */}
      <section className="bazaar-hero" style={{ backgroundImage: `url("${heroBg}")` }}>
        <div className="bazaar-hero-top-divider">
          <img src={topDivider} alt="divider" />
        </div>

        <div className="bazaar-hero-content">
          <h1 className="hero-title-oneness">ONENESS</h1>
          <h1 className="hero-title-bazaar">FESTIVAL BAZAAR</h1>
          <h1 className="hero-title-year">2026</h1>
          <div className="bazaar-hero-divider">
            <img src={sectionDivider} alt="divider" />
          </div>
        </div>

        <div className="bazaar-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* Teal Section */}
      <section className="bazaar-teal-section">
        <div className="dividing">
          <img src={bottomDivider} alt="divider" />
        </div>
        <div className="bazaar-flower-icon-top-left">
          <img src={flowerIcon} alt="flower" className="bazaar-flower-icon-top-leftt" />
        </div>

        <div className="teal-section-container">
          <div className="teal-section-text">
            <p>The Jaipur Oneness Festival will host a carefully curated bazaar where local Rajasthani artists and artisans present their craft to visitors from across India and beyond. Rooted in the region's rich artistic heritage, the bazaar reflects the colours, materials, and forms that have defined Rajasthan for generations.</p>

            <p className="bold-text">Visitors can explore a wide selection of handmade textiles, traditional clothing, jewellery, and art, created using regional techniques and locally sourced materials. Each piece reflects the skill, patience, and cultural identity of the artisan, carrying forward styles that remain central to everyday life and ceremonial tradition in Rajasthan.</p>

            <p>The bazaar is designed as a cultural space offering visitors an authentic glimpse into Rajasthani craftsmanship while supporting local makers and preserving regional artistic traditions.</p>
          </div>
          <div className="teal-section-image">
            <div className="bazaar-top-left-frame-wrapper">
              <div className="lower-icon-top-left">
                <img src={artisanImg} alt="artisan" className="flower-icon-top-leftt" />
              </div>
              <img src={vactor} alt="frame" className="vactor-top-right" />
            </div>
          </div>
        </div>

        <img src={flowerIcon} alt="flower" className="flower-icon-bottom-right" />

        <div className="bazaar-teal-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* Vendors Section */}
      <section className="bazaar-vendors-section">
        <div className="vendors-header">
          <h4>2026</h4>
          <h2>FESTIVAL<br />VENDOR DETAILS</h2>
          <img src={sectionDivider} alt="divider" className="vendors-divider" />
        </div>

        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            <div className="vendor-card" key={index}>
              <div className="vendor-card-img">
                <span>Image</span>
              </div>
              <div className="vendor-card-info">
                <div className="vendor-title-row">
                  <h3>{vendor.name}</h3>
                  <div className="vendor-rating">
                    <span className="rating-text">Ratings</span>
                    <div className="rating-stars">
                      {[...Array(5)].map((_, starIndex) => (
                        <img key={starIndex} src={starsIcon} alt="star" />
                      ))}
                    </div>
                  </div>
                </div>
                <p>{vendor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BazaarPage;