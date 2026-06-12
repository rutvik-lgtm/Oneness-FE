import React, { useState } from 'react';
import './AccommodationRegistration.css';
import logo from '../../assets/Logo.png';
import boyImg from '../../assets/image.png';
import vectorOuter from '../../assets/Vector (1).png';
import vectorInner from '../../assets/Vector.png';
import dividerImg from '../../assets/pkg-btn/Group 5.png';
import { API_URL } from '../../config';

const AccommodationRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stayOption: '',
    nights: '',
    rooms: '',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const detailsText = `Preferred Hotel: ${formData.stayOption}, Nights: ${formData.nights}, Rooms: ${formData.rooms}. Notes: ${formData.specialNotes || 'None'}`;
      const res = await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Accommodation',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          details: detailsText
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit stay inquiry.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const formElem = document.getElementById('accomm-inquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="accommodation-reg-section" id="accommodation-booking">
      <div className="accomm-reg-container">

        {/* Left Side: Illustration + Info Boxes */}
        <div className="accomm-reg-left">
          <div className="accomm-reg-intro">
            <p className="accomm-reg-year">2026</p>
            <h2 className="accomm-reg-title">RESERVE YOUR STAY</h2>
            <h2 className="accomm-reg-subtitle">FOR THE JAIPUR ONENESS FESTIVAL</h2>

            {/* Decorative flourish divider */}
            <div className="accomm-reg-divider-container">
              <img src={dividerImg} className="accomm-reg-divider" alt="Divider" />
            </div>

            <p className="accomm-reg-desc">
              Choose from our selected accommodations near the festival venue. Secure your room, enjoy comfortable lodging, and immerse yourself fully in the festival experience.
            </p>

            <div className="accomm-btn-reserve-container">
              <button className="accomm-reg-reserve-btn" onClick={scrollToForm}>
                RESERVE YOUR ROOM NOW
              </button>
            </div>
          </div>

          <div className="accomm-reg-guide-wrapper">
            <div className="boy-img-container">
              <img src={boyImg} className="accomm-reg-boy" alt="Rajasthani Turban Guide" />
            </div>

            <div className="accomm-reg-info-column">
              <div className="accomm-info-box accomm-additional-info">
                <h4 className="info-title-v2">Additional Info:</h4>
                <ul className="info-list-v2">
                  <li>Rooms are limited, early booking recommended</li>
                  <li>Comfortable clothing and footwear for Jaipur sightseeing</li>
                  <li>Local currency is recommended for smaller purchases</li>
                  <li>Respect local customs and heritage sites</li>
                </ul>
              </div>

              <div className="accomm-info-box accomm-contact-info">
                <h4 className="info-title-v2">Contact / Help Info:</h4>
                <p className="info-contact-v2">📩 contact@onenessfestival.in</p>
                <p className="info-contact-v2">📞 +91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form with Layered Vectors */}
        <div className="accomm-reg-right" id="accomm-inquiry-form">
          <div className="accomm-layered-frame">
            <img src={vectorOuter} className="booking-vector-outer" alt="" />
            <img src={vectorInner} className="booking-vector-inner" alt="" />

            <div className="accomm-form-inner-content">
              <div className="accomm-form-header-v2">
                <img src={logo} alt="Logo" className="accomm-form-logo-v2" />
              </div>

              {submitted ? (
                <div className="accomm-booking-success-message">
                  <div className="accomm-success-icon">✾</div>
                  <h4>Inquiry Received!</h4>
                  <p>Thank you for booking! Our hospitality desk will get in touch with you shortly to finalize your stay details.</p>
                  <button className="accomm-inquire-again-btn" onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form className="accomm-reg-form-v2" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>
                      {errorMsg}
                    </div>
                  )}
                  <div className="accomm-reg-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="accomm-reg-row">
                    <div className="accomm-reg-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="accomm-reg-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="accomm-reg-group">
                    <label htmlFor="accomm-select">Select Your Hotel / Guesthouse</label>
                    <select
                      id="accomm-select"
                      name="stayOption"
                      value={formData.stayOption}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your preferred option</option>
                      <option value="Clarks Amer Jaipur">Clarks Amer Jaipur (Festival Venue)</option>
                      <option value="Royal Heritage Palace">Royal Heritage Palace</option>
                      <option value="Oasis Boutique Hotel">Oasis Boutique Hotel</option>
                      <option value="Oneness Swiss Glamping Camps">Oneness Swiss Glamping Camps</option>
                    </select>
                  </div>

                  <div className="accomm-reg-row">
                    <div className="accomm-reg-group">
                      <label htmlFor="nights">Number of Nights</label>
                      <select
                        id="nights"
                        name="nights"
                        value={formData.nights}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select</option>
                        <option value="1">1 Night</option>
                        <option value="2">2 Nights</option>
                        <option value="3">3 Nights</option>
                        <option value="4">4 Nights</option>
                        <option value="5+">5+ Nights</option>
                      </select>
                    </div>
                    <div className="accomm-reg-group">
                      <label htmlFor="rooms">Rooms</label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select</option>
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4+">4+ Rooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="accomm-reg-group">
                    <label htmlFor="specialNotes">Special Requests / Notes</label>
                    <textarea
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      placeholder="Enter your special notes"
                    ></textarea>
                  </div>

                  <div className="accomm-reg-btn-container">
                    <button type="submit" className="accomm-reg-submit-btn" disabled={loading}>
                      {loading ? 'SUBMITTING...' : 'BOOK NOW'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AccommodationRegistration;
