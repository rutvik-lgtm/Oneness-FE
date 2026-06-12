import React, { useState, useEffect } from 'react';
import './AccommodationBooking.css';
import logo from '../../assets/Logo.png';
import vectorOuter from '../../assets/Vector (1).png';
import vectorInner from '../../assets/Vector.png';
import { API_URL } from '../../config';

const AccommodationBooking = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    accommodationId: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const res = await fetch(`${API_URL}/accommodations`);
        const data = await res.json();
        if (data.success) {
          setAccommodations(data.data);
          if (data.data.length > 0) {
            setFormData(prev => ({ ...prev, accommodationId: data.data[0]._id }));
          }
        }
      } catch (err) {
        console.error('Failed to load accommodations', err);
      }
    };
    fetchAccommodations();
  }, []);

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
      const res = await fetch(`${API_URL}/accommodations/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          accommodationId: formData.accommodationId,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          specialNotes: formData.specialNotes
        })
      });
      const data = await res.json();
      if (data.success) {
        setBookingDetails(data.data);
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to complete stay booking.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="accommodation-booking-section" id="accommodation-booking">
      <div className="accomm-booking-container">
        
        {/* Left Side: General Info and Tips */}
        <div className="accomm-booking-left">
          <div className="accomm-booking-guide">
            <h3 className="guide-title">Planning Your Stay</h3>
            <p className="guide-intro">
              Our hospitality team is dedicated to curating a flawless, tranquil journey for you. After submitting your inquiry, a personal booking host will reach out to verify availability, coordinate dates, customize inclusions, and confirm reservation details.
            </p>

            <div className="guide-info-box guide-tips-box">
              <h4 className="box-title">Important Details:</h4>
              <ul className="guide-list">
                <li>Check-in time is at 2:00 PM; check-out is at 11:00 AM. Early arrivals can be requested.</li>
                <li>Premium shuttles operate continuously between all three locations and the Oneness Festival grounds.</li>
                <li>Gourmet dining options offer organic, locally sourced vegetarian and vegan meals.</li>
                <li>Flexible cancellation terms apply due to travel coordination.</li>
              </ul>
            </div>

            <div className="guide-info-box guide-contact-box">
              <h4 className="box-title">Hospitality Concierge:</h4>
              <p className="contact-detail">📩 stay@jaipuronenessfestival.com</p>
              <p className="contact-detail">📞 +91 98765 43210 (Toll-Free / WhatsApp)</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Booking Frame Form */}
        <div className="accomm-booking-right">
          <div className="booking-layered-frame">
            <img src={vectorOuter} className="booking-vector-outer" alt="" />
            <img src={vectorInner} className="booking-vector-inner" alt="" />

            <div className="booking-form-content">
              <div className="booking-form-header">
                <img src={logo} alt="Logo" className="booking-form-logo" />
                <h3 className="booking-form-subtitle">STAY RESERVATION INQUIRY</h3>
              </div>

              {submitted ? (
                <div className="booking-success-message">
                  <div className="success-icon">✾</div>
                  <h4>Booking Confirmed!</h4>
                  <p>Your stay inquiry has been successfully sent. A personal Oneness booking host will contact you within 24 hours to secure your reservations.</p>
                  {bookingDetails && (
                    <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', textAlign: 'left', fontSize: '0.9rem', color: '#fff' }}>
                      <p style={{ margin: '0 0 5px 0' }}><strong>Inquiry Details:</strong></p>
                      <p style={{ margin: '0 0 4px 0' }}>Name: {bookingDetails.fullName}</p>
                      <p style={{ margin: '0 0 4px 0' }}>Total Price: ${bookingDetails.totalPrice}</p>
                    </div>
                  )}
                  <button className="inquire-again-btn" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
                </div>
              ) : (
                <form className="booking-form-element" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>
                      {errorMsg}
                    </div>
                  )}
                  <div className="booking-group">
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

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="email">Email Address</label>
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
                    <div className="booking-group">
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

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="accomm-select">Accommodation Type</label>
                      <select 
                        id="accomm-select"
                        name="accommodationId"
                        value={formData.accommodationId}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select stay option</option>
                        {accommodations.map(acc => (
                          <option key={acc._id} value={acc._id}>
                            {acc.name} (${acc.price}/night) - {acc.availableCount} available
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="booking-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select 
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4+">4 or More Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="checkIn">Check-in Date</label>
                      <input 
                        type="date" 
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="booking-group">
                      <label htmlFor="checkOut">Check-out Date</label>
                      <input 
                        type="date" 
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-group">
                    <label htmlFor="specialNotes">Special Requests / Preferences</label>
                    <textarea 
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      placeholder="Dietary requests, room preferences, bed layout, etc."
                    ></textarea>
                  </div>

                  <div className="booking-btn-container">
                    <button type="submit" className="booking-submit-btn" disabled={loading}>
                      {loading ? 'BOOKING...' : 'SUBMIT STAY INQUIRY'}
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

export default AccommodationBooking;
