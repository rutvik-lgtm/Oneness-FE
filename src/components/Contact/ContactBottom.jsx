import React, { useState } from 'react';
import './ContactBottom.css';
import bgImg from '../../assets/Group 209.png';
import brushTop from '../../assets/Mask group.png';
import divider from '../../assets/Group 5.png';
import { API_URL } from '../../config';

const ContactBottom = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ success: false, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setStatus({ success: false, message: '' });

    try {
      const res = await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'general',
          fullName: 'Newsletter Subscriber',
          email: email,
          phone: '0000000000',
          details: 'Newsletter Subscription request from Stay Connected section.'
        })
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, message: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        setStatus({ success: false, message: data.message || 'Subscription failed.' });
      }
    } catch (err) {
      setStatus({ success: false, message: 'Failed to connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-bottom-section" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Brush stroke top edge */}
      <div
        className="cb-brush-top"
        style={{
          WebkitMaskImage: `url(${brushTop})`,
          maskImage: `url(${brushTop})`
        }}
      />

      {/* Dark overlay */}
      <div className="cb-overlay" />

      {/* Content */}
      <div className="cb-content">
        <p className="cb-year">2026</p>
        <h2 className="cb-title">STAY CONNECTED</h2>
        <img src={divider} alt="" className="cb-divider" />
        <p className="cb-desc">Subscribe for festival news and updates.</p>
        <form className="cb-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            className="cb-input" 
            placeholder="Enter Your Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="cb-btn-wrapper">
            <button type="submit" className="cb-btn" disabled={loading}>
              {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
            </button>
          </div>
        </form>
        {status.message && (
          <p style={{ 
            color: status.success ? '#FAF4E5' : '#ff9999', 
            marginTop: '15px', 
            fontWeight: 'bold',
            fontFamily: 'Playfair Display, serif',
            fontSize: '16px'
          }}>
            {status.message}
          </p>
        )}
      </div>

      {/* Brush stroke bottom edge */}
      <div
        className="cb-brush-bottom"
        style={{
          WebkitMaskImage: `url(${brushTop})`,
          maskImage: `url(${brushTop})`
        }}
      />
    </section>
  );
};

export default ContactBottom;
