import React from 'react';
import './YogaSection.css';

import bottomBrush from '../../assets/homepage/dvider_20 2.png';

import mainImg from '../../assets/homepage/Mask group (13).png';
import chakrasLeft from '../../assets/homepage/image 16.png';
import chakrasRight from '../../assets/homepage/image 17.png';
import sunSalutationBg from '../../assets/homepage/Group 71.png';
import chakraFloat1 from '../../assets/homepage/image 18.png';
import chakraFloat2 from '../../assets/homepage/image 20.png';
import chakraFloat3 from '../../assets/homepage/image 21.png';
import chakraFloat4 from '../../assets/homepage/image 22.png';
import chakraFloat5 from '../../assets/homepage/image 19.png';
import dividerImg from '../../assets/homepage/Group 5.png';
import { Link } from 'react-router-dom';

const YogaSection = () => {
  return (
    <section className="yoga-section">
      {/* Background Sun Salutation Image */}
      <img src={bottomBrush} alt="" className="oneness-speakers-brush-yoga" />
      <img src={sunSalutationBg} alt="Sun Salutation Sequence" className="yoga-bg-img" />

      <div className="yoga-container">
        {/* Left Side: Meditation Image and Chakras */}
        <div className="yoga-left">
          <img src={chakrasLeft} alt="Chakras Left" className="yoga-chakras-left" />
          <img src={mainImg} alt="Meditation and Waterfall" className="yoga-main-img" />
          <img src={chakrasRight} alt="Chakras Right" className="yoga-chakras-right" />
        </div>

        {/* Right Side: Text and Floating Chakras */}
        <div className="yoga-right">
          {/* Floating Chakras */}
          <img src={chakraFloat1} alt="" className="yoga-float chakra-1" />
          <img src={chakraFloat2} alt="" className="yoga-float chakra-2" />
          <img src={chakraFloat3} alt="" className="yoga-float chakra-3" />
          <img src={chakraFloat4} alt="" className="yoga-float chakra-4" />
          <img src={chakraFloat5} alt="" className="yoga-float chakra-5" />

          <div className="yoga-text-content">
            <h3 className="yoga-year">2026</h3>
            <h2 className="yoga-title">YOGA, MEDITATION & WELLBEING</h2>
            <img src={dividerImg} alt="Divider" className="yoga-divider" />
            <p className="yoga-description">
              Traditional and mindful guided meditation and movement practices<br/>
              for balance and clarity.
            </p>
            <Link className="yoga-explore-btn" to="/explore" >EXPLORE MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
