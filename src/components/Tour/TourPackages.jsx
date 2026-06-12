import React, { useState, useEffect } from 'react';
import './TourPackages.css';
import pillarLeft from '../../assets/Group (2).png';
import pillarRight from '../../assets/Group (3).png';
import { API_URL } from '../../config';

const TourPackages = () => {
  const [packages, setPackages] = useState([
    {
      type: "Royal Rajasthan Oneness Tour",
      details: "Experience Jaipur's Majestic Forts, Palaces, And Royal History.",
      location: "Jaipur And Rajasthan Tour Package Available"
    },
    {
      type: "Jaipur Heritage Tour",
      details: "Walk Through The City Palace, Hawa Mahal, And Bustling Bazaars.",
      location: "Jaipur Package Available"
    },
    {
      type: "Oneness In Tradition Tour Package",
      details: "Discover Traditional Arts, Crafts, And Local Rituals.",
      location: "Jaipur And Rajasthan Tour Package Available"
    },
    {
      type: "Inner Oneness Journey - Conscious Tours",
      details: "Guided Reflective Journey Combining Cultural Sites And Spiritual Practices.",
      location: "Jaipur And Rajasthan Tour Package Available"
    }
  ]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch(`${API_URL}/tours`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          const mapped = data.data.map(t => ({
            type: t.title,
            details: `${t.description} (${t.duration})`,
            location: `${t.route.join(' \u2192 ')} - $${t.price}`
          }));
          setPackages(mapped);
        }
      } catch (err) {
        console.error('Failed to fetch tours', err);
      }
    };
    fetchTours();
  }, []);

  const scrollToReg = () => {
    const formElem = document.querySelector('.tour-reg-section');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-packages-section" >
      <div className="tp-container">
        {/* Left Pillar */}
        <img src={pillarLeft} className="tp-pillar tp-pillar-left" alt="" />

        {/* Table Content Area */}
        <div className="tp-content-wrapper">
          <div className="tp-table-container">
            <table className="tp-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Jaipur/Rajasthan</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx}>
                    <td className="tp-pkg-type">{pkg.type}</td>
                    <td>{pkg.details}</td>
                    <td>{pkg.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reserve Button */}
          <div className="tp-btn-container">
            <div className="tp-btn-wrapper">
              <span className="tp-btn-ornament tp-orn-tl" />
              <span className="tp-btn-ornament tp-orn-tr" />
              <button className="tp-reserve-btn" onClick={scrollToReg}>RESERVE YOUR TOUR SPOT</button>
              <span className="tp-btn-ornament tp-orn-bl" />
              <span className="tp-btn-ornament tp-orn-br" />
            </div>
          </div>
        </div>

        {/* Right Pillar */}
        <img src={pillarRight} className="tp-pillar tp-pillar-right" alt="" />
      </div>
    </section>
  );
};

export default TourPackages;
