import React, { useState, useEffect } from 'react';
import './TourRegistration.css';
import logo from '../../assets/Logo.png';
import boyImg from '../../assets/image.png';
import vectorOuter from '../../assets/Vector (1).png';
import vectorInner from '../../assets/Vector.png';
import { API_URL } from '../../config';

const TourRegistration = () => {
  const [tours, setTours] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourId: '',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch(`${API_URL}/tours`);
        const data = await res.json();
        if (data.success) {
          setTours(data.data);
          if (data.data.length > 0) {
            setFormData(prev => ({ ...prev, tourId: data.data[0]._id }));
          }
        }
      } catch (err) {
        console.error('Failed to load tours', err);
      }
    };
    fetchTours();
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
      const res = await fetch(`${API_URL}/tours/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setBookingDetails(data.data);
        // If there are special notes, we can also log a contact inquiry
        if (formData.specialNotes) {
          await fetch(`${API_URL}/inquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'other',
              fullName: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              details: `Tour Special Notes: ${formData.specialNotes} (Tour Booking ID: ${data.data._id})`
            })
          });
        }
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to book tour package.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="tour-reg-section">
      <div className="tour-reg-container">

        {/* Left Side: Illustration + Info Boxes */}
        <div className="tour-reg-left">
          <div className="tour-reg-guide-wrapper">
            <div className="boy-img-container">
              <img src={boyImg} className="tour-reg-boy" alt="Guide" />
            </div>

            <div className="tour-reg-info-column">
              <div className="info-box-v2 additional-info-v2">
                <h4 className="info-title-v2">Additional Info:</h4>
                <p className="info-text-v2">
                  "Once you register, our team will contact you with detailed itineraries,
                  timings, and special tips to make your visit comfortable and memorable."
                </p>

                <h4 className="info-title-v2">Travel Tips Reminder:</h4>
                <ul className="info-list-v2">
                  <li>Comfortable shoes and clothing are recommended</li>
                  <li>Keep local currency handy</li>
                  <li>Respect local customs</li>
                  <li>Be ready to explore Jaipur at your own pace</li>
                </ul>
              </div>

              <div className="info-box-v2 contact-info-v2">
                <h4 className="info-title-v2">Contact / Help Info:</h4>
                <p className="info-contact-v2">📩 contact@onenessfestival.in</p>
                <p className="info-contact-v2">📞 +91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form with Layered Vectors */}
        <div className="tour-reg-right">
          <div className="layered-frame">
            <img src={vectorOuter} className="vector-outer" alt="" />
            <img src={vectorInner} className="vector-inner" alt="" />

            <div className="form-inner-content">
              <div className="form-header-v2">
                <img src={logo} alt="Logo" className="form-logo-v2" />
                <h3 className="form-subtitle-v2">Tour Registration Form</h3>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', color: '#fff', padding: '20px 0' }}>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Tour Registered!</h4>
                  <p>Your spot has been successfully reserved. Our travel coordinators will email you details shortly.</p>
                  {bookingDetails && (
                    <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', textAlign: 'left', fontSize: '0.9rem', color: '#fff' }}>
                      <p style={{ margin: '0 0 5px 0' }}><strong>Inquiry Details:</strong></p>
                      <p style={{ margin: '0 0 4px 0' }}>Name: {formData.fullName}</p>
                      <p style={{ margin: '0 0 4px 0' }}>Total Price: ${bookingDetails.totalPrice}</p>
                    </div>
                  )}
                  <button className="reg-submit-btn" style={{ marginTop: '20px' }} onClick={() => setSubmitted(false)}>REGISTER ANOTHER TOUR</button>
                </div>
              ) : (
                <form className="tour-reg-form-v2" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>
                      {errorMsg}
                    </div>
                  )}
                  <div className="reg-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                      id="fullName"
                      name="fullName"
                      type="text" 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      required
                    />
                  </div>

                  <div className="reg-row">
                    <div className="reg-group">
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
                    <div className="reg-group">
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

                  <div className="reg-group">
                    <label htmlFor="tourId">Tour Package</label>
                    <select 
                      id="tourId"
                      name="tourId"
                      value={formData.tourId}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select tour package</option>
                      {tours.map(t => (
                        <option key={t._id} value={t._id}>
                          {t.title} (${t.price} - {t.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="reg-group">
                    <label htmlFor="specialNotes">Special Requests / Notes</label>
                    <textarea 
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      placeholder="Enter your special notes"
                    ></textarea>
                  </div>

                  <div className="reg-btn-container">
                    <button type="submit" className="reg-submit-btn" disabled={loading}>
                      {loading ? 'SIGNING UP...' : 'SIGN ME UP!'}
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

export default TourRegistration;
