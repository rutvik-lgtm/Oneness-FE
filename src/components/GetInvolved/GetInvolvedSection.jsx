import React, { useState } from 'react';
import './GetInvolvedSection.css';
import heroBrush from '../../assets/hero-bg.png';
import mandalaImg from '../../assets/cfdc7e97b632c645677f93ab495cbc738da55a57.png';
import headerImg from '../../assets/Group 101.png';

const SubmitArrow = () => (
  <svg className="gi-submit-arrow" width="18" height="12" viewBox="0 0 22 14" aria-hidden>
    <path
      d="M0 7h15l6-6M15 7l6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Ornamental half-circle peaking icon — matches second image */
const OrnamentIcon = () => (
  <svg className="gi-btn-ornament" width="32" height="16" viewBox="0 0 32 16" aria-hidden>
    <path
      d="M0 16c0-8.8 7.2-16 16-16s16 7.2 16 16"
      fill="rgba(255,255,255,0.4)"
    />
    <circle cx="16" cy="16" r="4" fill="rgba(255,255,255,0.6)" />
    <path
      d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1"
    />
  </svg>
);

/** Teal ornamental divider — matches reference layout */
const TitleDivider = () => (
  <svg className="gi-title-divider" viewBox="0 0 360 28" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <line x1="4" y1="14" x2="116" y2="14" stroke="#5cb1b9" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="106" cy="14" r="2.25" fill="#5cb1b9" />
    <circle cx="254" cy="14" r="2.25" fill="#5cb1b9" />
    <line x1="244" y1="14" x2="356" y2="14" stroke="#5cb1b9" strokeWidth="1.25" strokeLinecap="round" />
    <path
      fill="none"
      stroke="#5cb1b9"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M168 14c3-5 7-5 9 0 2 5 6 5 9 0 3-5 7-5 10 0 2 5 6 5 9 0"
    />
  </svg>
);

const GetInvolvedSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name')?.toString().trim() ?? '';
    const email = fd.get('email')?.toString().trim() ?? '';
    const phone = fd.get('phone')?.toString().trim() ?? '';
    const interest = fd.get('interest')?.toString() ?? '';
    const message = fd.get('message')?.toString().trim() ?? '';

    const subject = encodeURIComponent(`Get Involved — ${interest}`);
    const body = encodeURIComponent(
      `Full name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\n\nContribution: ${interest}\n\nMessage:\n${message || '—'}`
    );
    window.location.href = `mailto:info@jaipuronenessfestival.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="gi-section">
      <div className="gi-paper-layer" aria-hidden />
      <img src={mandalaImg} className="gi-mandala gi-mandala--left" alt="" aria-hidden />
      <img src={mandalaImg} className="gi-mandala gi-mandala--right" alt="" aria-hidden />

      <div className="gi-section-inner">
        <header className="gi-intro">
          <img src={headerImg} className="gi-header-image" alt="Get Involved" />
          <p className="gi-intro-copy">
            Discover ways to be part of the Jaipur Oneness Festival. Whether as a volunteer, supporter, or contributor,
            there will be opportunities to join the journey. Details coming soon.
          </p>
        </header>

        <div className="gi-form-stage">

          {submitted ? (
            <p className="gi-form-note" role="status">
              If your mail app did not open, write to{' '}
              <a href="mailto:info@jaipuronenessfestival.com">info@jaipuronenessfestival.com</a> with the same details.
            </p>
          ) : null}

          <form className="gi-form" onSubmit={handleSubmit} noValidate>
            <label className="gi-field gi-field--full">
              <span className="gi-label">Full Name</span>
              <input name="name" type="text" required autoComplete="name" placeholder="Enter your full name" />
            </label>

            <div className="gi-field-row">
              <label className="gi-field">
                <span className="gi-label">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="your.email@example.com" />
              </label>
              <label className="gi-field">
                <span className="gi-label">Phone Number</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+91 …" />
              </label>
            </div>

            <label className="gi-field gi-field--full gi-field--select">
              <span className="gi-label">Select Your Contribution in This Oneness Festival</span>
              <select name="interest" required defaultValue="">
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="Volunteering">Volunteering</option>
                <option value="Sponsorship / partnership">Sponsorship / partnership</option>
                <option value="Performing / teaching">Performing / teaching</option>
                <option value="Bazaar / vendor">Bazaar / vendor</option>
                <option value="Supporter / donor">Supporter / donor</option>
                <option value="Something else">Something else</option>
              </select>
            </label>

            <label className="gi-field gi-field--full">
              <span className="gi-label">Message</span>
              <textarea name="message" rows={5} placeholder="Any special notes or questions…" />
            </label>

            <div className="gi-submit-row">
              <button type="submit" className="gi-submit">
                <span className="gi-submit-inner">
                  <span className="gi-submit-text">SUBMIT NOW &rarr;</span>
                </span>
              </button>
            </div>
          </form>

          <p className="gi-form-footnote">
            You can send an email to … if your enthusiasm is so great that you want to message us about how you would like to get involved with us right now.
          </p>
        </div>
      </div>

    </section>
  );
};


export default GetInvolvedSection;
