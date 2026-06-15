import React, { useState, useRef } from 'react';
import bgImage from '../../assets/exp explore page/image 36.png';
import maskTop from '../../assets/exp explore page/Mask group (6).png';
import maskBottom from '../../assets/exp explore page/Mask group (7).png';
import dividerImg from '../../assets/Group 5.png';

// Maps
import mapPage1 from '../../assets/exp explore page/image 9 (1).png'; // Yellow theme map
import mapPage2 from '../../assets/exp explore page/image 9 (1).png';
import mapPage3 from '../../assets/exp explore page/image 9 (1).png'; // Reused yellow map

// Scrolls
import scrollTall from '../../assets/exp explore page/Group (17).png'; // Tall scroll (533x1094)
import scrollMedium from '../../assets/exp explore page/Group (18).png'; // Medium scroll (533x730)

import './ExplorePage.css';

export default function ExplorePage() {
  const [selectedMapPage, setSelectedMapPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);

  // References for smooth scrolling
  const thursdayRef = useRef(null);
  const fridayRef = useRef(null);
  const saturdayRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 70));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const mapImages = {
    1: mapPage1,
    2: mapPage2,
    3: mapPage3,
    4: mapPage1,
    5: mapPage2,
    6: mapPage3
  };

  return (
    <div className="explore-page-wrapper">
      {/* ── HERO SECTION ── */}
      <section className="explore-hero">
        <img src={bgImage} alt="Festival Celebration" className="explore-hero-bg" />
        <div className="explore-hero-overlay" />
        <img src={maskBottom} alt="" className="explore-mask-top" />
        <img src={maskTop} alt="" className="explore-mask-bottom" />
        
        <div className="explore-hero-content">
          <h2 className="explore-subtitle">The Oneness Festival 2026</h2>
          <h1 className="explore-title">FESTIVAL SCHEDULE</h1>
          
          <button className="explore-btn-white" onClick={() => window.open(mapImages[selectedMapPage], '_blank')}>
            {/* <span className="deco-icon icon-tl">✾</span> */}
            DOWNLOAD NOW
            {/* <span className="deco-icon icon-br">✾</span> */}
          </button>
        </div>
      </section>

      {/* ── SCHEDULE SECTION ── */}
      <section className="schedule-section">
        {/* Background Decorative Mandalas */}
        <div className="schedule-mandala mandala-left">
          <div className="mandala-circle"></div>
        </div>
        <div className="schedule-mandala mandala-right">
          <div className="mandala-circle"></div>
        </div>

        <div className="schedule-content">
          <div className="schedule-header-block">
            <h3 className="schedule-year">2026</h3>
            <h2 className="schedule-main-title">
              <span className="title-fest">FESTIVAL</span> <span className="title-sched">SCHEDULE</span>
            </h2>
            <img src={dividerImg} alt="Divider" className="schedule-divider" />
            <p className="schedule-intro-text">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>

          {/* ── PDF VIEWER MOCKUP ── */}
          <div className="pdf-viewer-outer-container">
            <div className="pdf-viewer-container">
              {/* Header/Toolbar */}
              <div className="pdf-viewer-header">
                {/* Left group */}
                <div className="pdf-header-left">
                  <button className="pdf-toolbar-btn" aria-label="Menu" title="Menu">
                    <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </button>
                  <div className="pdf-page-indicator">
                    {selectedMapPage} / 6
                  </div>
                  <button className="pdf-toolbar-btn" onClick={handleZoomOut} aria-label="Zoom out" title="Zoom Out">
                    <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <button className="pdf-toolbar-btn" onClick={handleZoomIn} aria-label="Zoom in" title="Zoom In">
                    <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                {/* Separator 1 */}
                <span className="pdf-toolbar-divider">|</span>

                {/* Center Left group */}
                <div className="pdf-header-center-left">
                  <button className="pdf-toolbar-btn" onClick={() => setZoomLevel(100)} title="Fit to Screen">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="3" width="14" height="18" rx="2" />
                      <path d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3" />
                    </svg>
                  </button>
                  <button className="pdf-toolbar-btn" onClick={handleRotate} title="Rotate">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
                    </svg>
                  </button>
                </div>

                {/* Separator 2 */}
                <span className="pdf-toolbar-divider">|</span>

                {/* Center Right group */}
                <div className="pdf-header-center-right">
                  <button className="pdf-toolbar-btn" title="Draw/Signature">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round">
                      <path d="M3 16c2-4 4-7 7-7s4 6 7 6 5-3 5-6" />
                    </svg>
                  </button>
                </div>

                {/* Separator 3 */}
                <span className="pdf-toolbar-divider">|</span>

                {/* Right group */}
                <div className="pdf-header-right-actions">
                  <button className="pdf-toolbar-btn pdf-btn-disabled" title="Undo">
                    <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7v6h6M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="pdf-toolbar-btn pdf-btn-disabled" title="Redo">
                    <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7v6h-6M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* Separator 4 */}
                <span className="pdf-toolbar-divider">|</span>

                {/* Far Right group */}
                <div className="pdf-header-far-right">
                  <a href={mapImages[selectedMapPage]} download={`Oneness_Festival_Map_Page_${selectedMapPage}.png`} className="pdf-toolbar-btn" title="Download">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                  <button className="pdf-toolbar-btn" onClick={() => window.print()} title="Print">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                  </button>
                  <button className="pdf-toolbar-btn" aria-label="More options" title="More Options">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Body */}
              <div className="pdf-viewer-body">
                {/* Sidebar */}
                <div className="pdf-viewer-sidebar">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div 
                      key={num} 
                      className={`pdf-thumbnail-item ${selectedMapPage === num ? 'pdf-thumbnail-active' : ''}`}
                      onClick={() => setSelectedMapPage(num)}
                    >
                      <div className="pdf-thumbnail-image-wrapper">
                        <img src={mapImages[num]} alt={`Thumbnail ${num}`} className="pdf-thumbnail-img" />
                      </div>
                      <div className="pdf-thumbnail-num">{num}</div>
                    </div>
                  ))}
                </div>
                
                {/* Main View */}
                <div className="pdf-main-view">
                  <div 
                    className="pdf-page-container"
                    style={{ 
                      transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <img 
                      src={mapImages[selectedMapPage]} 
                      alt={`Venue Map Page ${selectedMapPage}`} 
                      className="pdf-page-image" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="schedule-footer-text">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>
      </section>

      {/* ── THURSDAY SECTION (DAY 1) ── */}
      <section className="day-section thursday-section" ref={thursdayRef}>
        <div className="section-container">
          {/* Day Navigation Tabs */}
          <div className="day-tabs-container">
            <button className="day-tab active" onClick={() => scrollToSection(thursdayRef)}>Day 1</button>
            <button className="day-tab" onClick={() => scrollToSection(fridayRef)}>Day 2</button>
            <button className="day-tab" onClick={() => scrollToSection(saturdayRef)}>Day 3</button>
            <div className="day-date-label">THURSDAY, 5<sup>th</sup> DECEMBER</div>
          </div>

          {/* Cards Grid */}
          <div className="program-cards-grid">
            {[1, 2, 3].map((cardId) => (
              <div key={cardId} className="program-card">
                <h4 className="card-program-title">PROGRAM NAME</h4>
                <p className="card-subtitle">
                  Lorem ipsum dolor sit amet consectetur. Lorem semper quis nunc.
                </p>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur. Purus tempus convallis tincidunt posuere egestas sit nec nisi. Et suspendisse odio urna massa. Dictum cursus ac maecenas dapibus varius nulla eget. Cursus.
                </p>
                <div className="card-footer">
                  <span className="card-time">11:30 AM - 12:30 PM</span>
                  <button className="card-read-more-btn">
                    READ MORE <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRIDAY SECTION (DAY 2) ── */}
      <section className="day-section friday-section-bg" ref={fridayRef}>
        <div className="schedule-mandala-blue mandala-left"></div>
        <div className="schedule-mandala-blue mandala-right"></div>
        <div className="section-container">
          {/* Day Navigation Tabs */}
          <div className="day-tabs-container">
            <button className="day-tab" onClick={() => scrollToSection(thursdayRef)}>Day 1</button>
            <button className="day-tab active" onClick={() => scrollToSection(fridayRef)}>Day 2</button>
            <button className="day-tab" onClick={() => scrollToSection(saturdayRef)}>Day 3</button>
            <div className="day-date-label">FRIDAY, 6<sup>th</sup> DECEMBER</div>
          </div>

          {/* Scroll Hint Mobile */}
          <div style={{ textAlign: 'center' }}>
            <span className="scroll-hint-mobile">Swipe to scroll schedule &rarr;</span>
          </div>

          <div className="timeline-scroll-container">
            {/* Column Headers Row (Aligned with Columns) */}
            <div className="timeline-headers-row">
              <div className="timeline-headers-spacer"></div>
              <div className="timeline-headers-grid">
                <div className="column-header-box col-header-red">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
                <div className="column-header-box col-header-green">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
                <div className="column-header-box col-header-blue">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="timeline-grid-layout">
              {/* Left Times Column */}
              <div className="timeline-hours-col">
                {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:50 PM", "04:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"].map((time, idx) => (
                  <div key={idx} className="timeline-time-label">{time}</div>
                ))}
              </div>

              {/* Vertical Divider Line */}
              <div className="timeline-vertical-line"></div>

              {/* Columns of Scrolls */}
              <div className="timeline-events-columns">
                
                {/* Column 1: Red Ribbon Scrolls */}
                <div className="timeline-event-column red-column">
                  
                  {/* Scroll 1: 11:30 AM - 12:30 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '35px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay red-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                  {/* Scroll 2: 05:30 PM - 06:30 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '650px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay red-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Column 2: Green Ribbon Scrolls */}
                <div className="timeline-event-column green-column">
                  
                  {/* Scroll 1: 02:00 PM - 03:00 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '280px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay green-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Column 3: Blue Ribbon Scrolls */}
                <div className="timeline-event-column blue-column">
                  
                  {/* Scroll 1: 01:30 PM - 04:00 PM (Tall Scroll) */}
                  <div className="scroll-wrapper tall-scroll" style={{ top: '150px' }}>
                    <img src={scrollTall} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay blue-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SATURDAY SECTION (DAY 3) ── */}
      <section className="day-section saturday-section-bg" ref={saturdayRef}>
        <div className="schedule-mandala-blue mandala-left"></div>
        <div className="schedule-mandala-blue mandala-right"></div>
        <div className="section-container">
          {/* Day Navigation Tabs */}
          <div className="day-tabs-container">
            <button className="day-tab" onClick={() => scrollToSection(thursdayRef)}>Day 1</button>
            <button className="day-tab" onClick={() => scrollToSection(fridayRef)}>Day 2</button>
            <button className="day-tab active" onClick={() => scrollToSection(saturdayRef)}>Day 3</button>
            <div className="day-date-label">SATURDAY, 7<sup>th</sup> DECEMBER</div>
          </div>

          {/* Scroll Hint Mobile */}
          <div style={{ textAlign: 'center' }}>
            <span className="scroll-hint-mobile">Swipe to scroll schedule &rarr;</span>
          </div>

          <div className="timeline-scroll-container">
            {/* Column Headers Row (Aligned with Columns) */}
            <div className="timeline-headers-row">
              <div className="timeline-headers-spacer"></div>
              <div className="timeline-headers-grid">
                <div className="column-header-box col-header-red">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
                <div className="column-header-box col-header-green">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
                <div className="column-header-box col-header-blue">
                  <span className="col-header-title">LOREM IPSUM</span>
                  <span className="col-header-subtitle">Lorem ipsum</span>
                </div>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="timeline-grid-layout">
              {/* Left Times Column */}
              <div className="timeline-hours-col">
                {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:50 PM", "04:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"].map((time, idx) => (
                  <div key={idx} className="timeline-time-label">{time}</div>
                ))}
              </div>

              {/* Vertical Divider Line */}
              <div className="timeline-vertical-line"></div>

              {/* Columns of Scrolls */}
              <div className="timeline-events-columns">
                
                {/* Column 1: Red Ribbon Scrolls */}
                <div className="timeline-event-column red-column">
                  
                  {/* Scroll 1: 11:30 AM - 12:30 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '35px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay red-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                  {/* Scroll 2: 04:00 PM - 05:30 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '500px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay red-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Column 2: Green Ribbon Scrolls */}
                <div className="timeline-event-column green-column">
                  
                  {/* Scroll 1: 02:00 PM - 03:00 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '280px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay green-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                  {/* Scroll 2: 06:30 PM - 07:30 PM */}
                  <div className="scroll-wrapper medium-scroll" style={{ top: '750px' }}>
                    <img src={scrollMedium} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay green-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Column 3: Blue Ribbon Scrolls */}
                <div className="timeline-event-column blue-column">
                  
                  {/* Scroll 1: 01:30 PM - 04:00 PM (Tall Scroll) */}
                  <div className="scroll-wrapper tall-scroll" style={{ top: '150px' }}>
                    <img src={scrollTall} alt="" className="scroll-bg-image" />
                    <div className="scroll-content-overlay blue-theme">
                      <h4 className="scroll-title">LOREM IPSUM</h4>
                      <p className="scroll-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                      </p>
                      <div className="scroll-footer">
                        <span className="scroll-time">11:30 AM - 12:30 PM</span>
                        <button className="scroll-detail-btn">Detail</button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}