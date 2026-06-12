import React, { useState } from 'react';
import './GetInvolvedSection.css';
import heroBrush from '../../assets/hero-bg.png';
import mandalaImg from '../../assets/cfdc7e97b632c645677f93ab495cbc738da55a57.png';
import headerImg from '../../assets/Group 101.png';
import { API_URL } from '../../config';

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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const mapInterestToType = (interest) => {
    if (interest === 'Volunteering') return 'Volunteer';
    if (interest === 'Sponsorship / partnership') return 'Sponsor';
    if (interest === 'Performing / teaching') return 'Performer';
    if (interest === 'Bazaar / vendor') return 'Bazaar Stall';
    return 'Volunteer';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const fd = new FormData(e.target);
    const fullName = fd.get('name')?.toString().trim() ?? '';
    const email = fd.get('email')?.toString().trim() ?? '';
    const phone = fd.get('phone')?.toString().trim() ?? '';
    const interest = fd.get('interest')?.toString() ?? '';
    const message = fd.get('message')?.toString().trim() ?? '';

    if (!fullName || !email || !phone || !interest) {
      setErrorMsg('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const type = mapInterestToType(interest);

    try {
      const res = await fetch(`${API_URL}/get-involved`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, fullName, email, phone, experience: message, message })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit application.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server. Opening email app as fallback...');
      const subject = encodeURIComponent(`Get Involved — ${interest}`);
      const body = encodeURIComponent(
        `Full name: ${fullName}\nEmail: ${email}\nPhone: ${phone || '—'}\n\nContribution: ${interest}\n\nMessage:\n${message || '—'}`
      );
      window.location.href = `mailto:info@jaipuronenessfestival.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
            <div className="gi-success-box" style={{ textAlign: 'center', padding: '40px 20px', color: '#fff' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Application Submitted!</h3>
              <p>Thank you for your interest. We have received your request and our coordinators will reach out shortly.</p>
              {errorMsg && <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '10px' }}>({errorMsg})</p>}
              <button 
                onClick={() => setSubmitted(false)}
                className="gi-submit"
                style={{ marginTop: '25px', display: 'inline-block' }}
              >
                <span className="gi-submit-inner">
                  <span className="gi-submit-text">SUBMIT ANOTHER</span>
                </span>
              </button>
            </div>
          ) : (
            <form className="gi-form" onSubmit={handleSubmit} noValidate>
              {errorMsg && (
                <div className="error-message" style={{ color: '#ff4d4d', gridColumn: 'span 2', marginBottom: '15px', fontWeight: 'bold' }}>
                  {errorMsg}
                </div>
              )}
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
                  <input name="phone" type="tel" required autoComplete="tel" placeholder="+91 …" />
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
                <button type="submit" className="gi-submit" disabled={loading}>
                  <span className="gi-submit-inner">
                    <span className="gi-submit-text">{loading ? 'SUBMITTING...' : 'SUBMIT NOW \u2192'}</span>
                  </span>
                </button>
              </div>
            </form>
          )}

          <p className="gi-form-footnote">
            You can send an email to info@jaipuronenessfestival.com if your enthusiasm is so great that you want to message us about how you would like to get involved with us right now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
