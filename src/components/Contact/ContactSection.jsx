import React, { useState } from 'react';
import './ContactSection.css';
import dividerImg from '../../assets/Group 5.png';
import mandalaImg from '../../assets/Group 54.png';
import { API_URL } from '../../config';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    type: 'general',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT US</h1>
          <img src={dividerImg} alt="" className="contact-divider" />
        </div>

        {submitted ? (
          <div className="contact-success-box" style={{ textAlign: 'center', padding: '40px 20px', color: '#fff' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Inquiry Received!</h2>
            <p>Thank you for reaching out. Our team will contact you shortly.</p>
            <button 
              onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', type: 'general', details: '' }); }}
              className="contact-submit-btn"
              style={{ marginTop: '20px' }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {errorMsg && (
              <div className="error-message" style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>
                {errorMsg}
              </div>
            )}
            <div className="contact-field">
              <label htmlFor="fullName">Full Name</label>
              <input 
                id="fullName"
                name="fullName"
                type="text" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name" 
                required
              />
            </div>

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email" 
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number" 
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="type">Select Your Contribution in This Oneness Festival</label>
              <select 
                id="type"
                name="type" 
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="general">Choose option / General Inquiry</option>
                <option value="Contact">Volunteer / Performer</option>
                <option value="other">Partner / Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="details">Message</label>
              <textarea 
                id="details"
                name="details"
                rows="4" 
                value={formData.details}
                onChange={handleChange}
                placeholder="Enter your message details" 
                required
              ></textarea>
            </div>

            <div className="contact-submit-wrapper">
              <button type="submit" className="contact-submit-btn" disabled={loading}>
                {loading ? 'SUBMITTING...' : 'SUBMIT NOW \u2192'}
              </button>
            </div>
          </form>
        )}

        <p className="contact-footer-text">
          You can send an email to info@jaipuronenessfestival.com if your enthusiasm is so great that you want to
          message us about how you would like to get involved with us right now.
        </p>
      </div>

      {/* Decorative Mandalas */}
      <img src={mandalaImg} alt="" className="contact-mandala mandala-2" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-3" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-4" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-5" />
    </section>
  );
};

export default ContactSection;
