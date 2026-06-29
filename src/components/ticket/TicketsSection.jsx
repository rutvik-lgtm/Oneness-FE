import React from 'react';
import './TicketsSection.css';

// Importing assets requested by the user
import bgTexture from '../../assets/homepage/3 746.png';
import cardFrameNormal from '../../assets/homepage/Frame 47.png';
import cardFramePopular from '../../assets/homepage/Group 82.png';
import krishnaDance from '../../assets/homepage/krishna dance_.png';
import titleDivider from '../../assets/homepage/Group 5.png';
import buttonBg from '../../assets/homepage/Group 60 (4).png';
import dvidImg from '../../assets/homepage/dvid.png';

const TicketsSection = () => {
  const tickets = [
    {
      id: 1,
      type: 'Day Visitor',
      price: '₹ 499',
      desc: 'Single day access',
      isPopular: false,
    },
    {
      id: 2,
      type: 'Festival Pass',
      price: '₹ 1,999',
      desc: 'All 3 days. All stages',
      isPopular: true,
    },
    {
      id: 3,
      type: 'Sacred Retreat',
      price: '₹ 6,999',
      desc: 'VIP + Accommodation',
      isPopular: false,
    }
  ];

  return (
    <section className="tickets-sectiont" id="ticketst">
      {/* Texture overlay */}
      <div 
        className="tickets-bg-layert tickets-bg-texturet" 
        style={{ backgroundImage: `url(${bgTexture})` }}
      />

      <div className="tickets-containert">
        {/* Header Block */}
        <div className="tickets-headert">
          <h2 className="tickets-titlet">ONENESS JOURNEY TICKETS</h2>
          <img src={titleDivider} alt="" className="tickets-title-dividert" />
          <p className="tickets-subtitlet">
            Details regarding entry and registration will be shared soon. Those wishing to attend may subscribe for updates.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="tickets-gridt">
          {tickets.map((t) => (
            <div 
              key={t.id} 
              className={`ticket-cardt ${t.isPopular ? 'popular-cardt' : ''}`}
              style={{ 
                backgroundImage: `url(${t.isPopular ? cardFramePopular : cardFrameNormal})` 
              }}
            >
              {t.isPopular && (
                <div className="popular-badget">POPULAR</div>
              )}
              <div className="ticket-card-contentt">
                <span className="ticket-typet">{t.type}</span>
                <span className="ticket-pricet">{t.price}</span>
                <span className="ticket-desct">{t.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="tickets-cta-containert">
          <button className="tickets-book-buttont">
            <div className="tickets-book-buttont-inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="tickets-button-flower-icon">
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
              <span className="tickets-button-text">BOOK YOUR TICKET - UPI/CARDS</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="tickets-button-flower-icon">
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
            </div>
          </button>
        </div>
      </div>

      {/* Dancing Krishna Illustration */}
      <img src={krishnaDance} alt="Krishna Dance" className="tickets-krishna-imgt" />

      {/* Bottom paint brush transition image */}
      <img src={dvidImg} alt="" className="tickets-bottom-brusht" />
    </section>
  );
};

export default TicketsSection;
