import React from 'react';
import './OnenessSpeakers.css';

import palaceBg from '../../assets/homepage/indian-traditional.png';
import handsGlobe from '../../assets/homepage/hand 1.png';
import dividerImg from '../../assets/homepage/Group 5.png';
import bottomBrush from '../../assets/homepage/dvider_20 2.png';
import featherLeft from '../../assets/homepage/image 13 (1).png';
import featherRight from '../../assets/homepage/image 14.png';

const OnenessSpeakers = () => {
  return (
    <section className="oneness-speakers-section">
      <img src={palaceBg} alt="" className="oneness-speakers-bg" />
      <div className="oneness-speakers-warmth" />

      <img src={featherRight} alt="Peacock Feather" className="oneness-speakers-feather-left" />
      <img src={featherLeft} alt="Peacock Feather" className="oneness-speakers-feather-right" />

      <div className="oneness-speakers-content">
        <div className="oneness-speakers-emblem">
          <img src={handsGlobe} alt="" className="oneness-speakers-hands" />
          <div className="oneness-speakers-badge">A Vision for World Peace</div>
        </div>

        <h2>ONENESS SPEAKERS AND FACILITATORS</h2>

        <img src={dividerImg} alt="" className="oneness-speakers-divider" />

        <p className="oneness-speakers-intro">
          We bring together experienced facilitators, custodians of heritage, and keepers of timeless
          wisdom, committed to inspiring oneness and world peace.
        </p>

        <p className="oneness-speakers-quote">
          "When our hearts become one, the world becomes one."
        </p>

      </div>

      <img src={bottomBrush} alt="" className="oneness-speakers-brush" />
    </section>
  );
};

export default OnenessSpeakers;
