import React from 'react';
import bgCulture from '../../assets/exp acive/rajasthani-culture-7801463_1920.jpg 1.png';
import bgAward from '../../assets/exp acive/award-2.png';
import maskGroup from '../../assets/Mask group.png';
import textureBg from '../../assets/exp page img/image 34 (1).png';
import statsGroupImg from '../../assets/IMGOF14/Group 111.png';
import dividerImg from '../../assets/exp page img/Group 5.png';

import './AchievementPage.css';

export default function AchievementPage() {
  const stats = [
    { val: "5500+", label: <>MEDIA<br />COVERAGE</>, valColor: "#B5451B", labColor: "#7D4F38" },
    { val: "300+", label: <>TEACHER<br />AND ARTISTS</>, valColor: "#FFB800", labColor: "#fff" },
    { val: <>OVER 400<br />MILION</>, label: "DIGITAL REACH", valColor: "#FFB800", labColor: "#fff" },
    { val: <>OVER 30<br />MILION</>, label: "SESSION VIEWS", valColor: "#B5451B", labColor: "#7D4F38" },
    { val: "250+", label: "BOOK LAUNCHES", valColor: "#FFB800", labColor: "#fff" }
  ];

  const infoBlocks = [
    "Alongside the festival, we will host a Lifetime Achievement Awards Evening on the Friday evening, honouring respected individuals from Jaipur who have made lasting contributions to the city. These recognitions will focus on public service, social cohesion, cultural preservation, and initiatives that have strengthened unity and well-being within the local Jaipur community.",
    "This exclusive evening will be designed as a philanthropic and networking gathering for Jaipur's and Rajasthan's leading business leaders, cultural leaders and respected community figures. It will serve as a platform to share the broader vision of the Jaipur Oneness Festival and to engage in meaningful dialogue around responsible leadership, community impact, and the Oneness charity.",
    "During the awards night, approximately 10-20 honourees will be recognised for their lifelong commitment to service and contribution to Oneness within Jaipur. These stories of impact will reinforce the festival's role as a unifying cultural force. It will be the start of a new movement that will awaken Oneness throughout Jaipur and beyond.",
    "The evening will also provide an opportunity for aligned supporters to contribute, supporting the festival's wider social and cultural objectives. Contributions will be positioned transparently, with a clear focus on legacy, impact, and continuity.",
    "A respected local newspaper and media partners will be invited to cover the event, ensuring positive public relations exposure for the initiative and its supporters.",
    "Through this curated gathering, the Jaipur Oneness Festival aims to build enduring relationships with Jaipur's upper-class and influential communities, fostering trust, alignment, and sustained support for initiatives that contribute to unity, cultural vitality, and responsible living in the city."
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Roboto, sans-serif' }}>
      {/* ── HERO SECTION ── */}
      <section className="ach-hero">
        <img src={bgCulture} alt="" className="ach-hero-bg-culture" />
        <img src={bgAward} alt="" className="ach-hero-bg-award" />
        <div className="ach-hero-overlay" />
        <img src={maskGroup} alt="" className="ach-hero-mask-top" />
        <img src={maskGroup} alt="" className="ach-hero-mask-bottom" />
        <div className="ach-hero-content">
          <h1 className="ach-hero-title">LIFETIME ACHIEVEMENT AWARD</h1>
          <p className="ach-hero-sub">Jaipur’s and Rajasthan’s leading business leaders, cultural leaders and respected community figures.</p>
        </div>
      </section>

      {/* ── INFO & STATS SECTION ── */}
      <section className="info-stats-section" style={{ backgroundImage: `url('${textureBg}')` }}>
        <div className="main-layout-grid">
          {/* Left Stack */}
          <div className="left-content-stack">
            <div className="section-header">
              <h3 className="section-title-top">ONENESS 2026</h3>
              <h2 className="section-title-main">LIFETIME ACHIEVEMENT AWARD</h2>
              <img src={dividerImg} alt="" className="divider-img" />
            </div>
            {infoBlocks.map((text, idx) => (
              <div key={idx} className="text-box">
                {text}
              </div>
            ))}
          </div>

          {/* Right Masonry Stats - Overlaid on Group 111.png */}
          <div className="right-stats-masonry">
            <img src={statsGroupImg} alt="" className="stats-group-img" />
            {stats.map((stat, idx) => (
              <div key={idx} className={`stat-overlay stat-pos-${idx}`}>
                <h4 className={`stat-val-base stat-val-${idx}`} style={{ color: stat.valColor }}>
                  {stat.val}
                </h4>
                <p className={`stat-lab-base stat-lab-${idx}`} style={{ color: stat.labColor }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}