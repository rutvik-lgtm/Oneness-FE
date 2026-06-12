import React, { useState } from 'react';
import './Ticketsection1.css';
import lotusLogo from '../../assets/LOGOORG.png';
import krishnaVector from '../../assets/Vector (6).png';
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector (1).png';
import sunsetImg from '../../assets/Mask group(1).png';
import dividerImg from '../../assets/Group 5.png';

const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-content">
        <p className="ticket-days">{ticket.description || 'Access Pass'}</p>
        <h3 className="ticket-title" style={{ fontSize: '20px', minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {ticket.title}
        </h3>
        <p className="ticket-price">RS. {ticket.price.toLocaleString()} (exe. fees)</p>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px', fontWeight: 'bold' }}>
          {ticket.stock > 0 ? `Stock: ${ticket.stock} left` : 'Sold Out!'}
        </p>
        <button
          className="select-btn"
          onClick={() => onSelect(ticket)}
          disabled={ticket.stock <= 0}
          style={{
            opacity: ticket.stock <= 0 ? 0.5 : 1,
            cursor: ticket.stock <= 0 ? 'not-allowed' : 'pointer',
            backgroundColor: ticket.stock <= 0 ? '#999' : '#49366e'
          }}
        >
          {ticket.stock <= 0 ? 'SOLD OUT' : 'SELECT'}
        </button>
      </div>
    </div>
  );
};

const TicketsSection = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    quantity: 1
  });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const itemsPerPage = 6;

  // Fetch tickets from Backend
  React.useEffect(() => {
    fetch('http://localhost:5000/api/tickets')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tickets');
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setTickets(data.data);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Lock page scrolling when the booking modal is open
  React.useEffect(() => {
    if (selectedTicket) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    // Cleanup
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedTicket]);

  const totalPages = Math.ceil(tickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = tickets.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    setBookingStatus(null);
    setBookingForm({
      fullName: '',
      email: '',
      phone: '',
      quantity: 1
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setBookingStatus(null);

    if (bookingForm.quantity > selectedTicket.stock) {
      setBookingStatus({ success: false, message: 'Requested quantity exceeds available stock!' });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/tickets/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ticketId: selectedTicket._id,
          ...bookingForm
        })
      });

      const data = await response.json();

      if (data.success) {
        setBookingStatus({ success: true, message: 'Booking successful! Ticket registered.' });
        // Update local tickets stock
        setTickets((prevTickets) =>
          prevTickets.map((t) =>
            t._id === selectedTicket._id ? { ...t, stock: t.stock - bookingForm.quantity } : t
          )
        );
        // Clear form
        setBookingForm({
          fullName: '',
          email: '',
          phone: '',
          quantity: 1
        });
        // Auto-close modal after 2 seconds
        setTimeout(() => setSelectedTicket(null), 2000);
      } else {
        setBookingStatus({ success: false, message: data.message || 'Booking failed!' });
      }
    } catch (err) {
      setBookingStatus({ success: false, message: 'Server error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="tickets-section" id="tickets">
      <div className="tickets-container">
        {/* Header Info */}
        <div className="festival-info-header">
          <div className="custom-logo-container">
            <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo-img" />
            <div className="logo-text-wrapper">
              <div className="jaipur-text">
                JA<img src={krishnaVector} alt="I" className="krishna-i" />PUR
              </div>
              <div className="oneness-text">ONENESS</div>
              <div className="festival-text">FESTIVAL</div>
            </div>
          </div>
          <div className="info-bar">
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <span>Month 00-00, 2026</span>
            </div>
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Jaipur, India</span>
            </div>
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <span>All Ages</span>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="tickets-content-split">

          {/* Left Side: Tickets */}
          <div className="tickets-left">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', fontSize: '18px', color: '#666' }}>Loading tickets...</div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px', fontSize: '18px', color: '#c93044' }}>Error: {error}</div>
            ) : (
              <>
                <div className="tickets-grid">
                  {currentTickets.map((ticket) => (
                    <TicketCard key={ticket._id} ticket={ticket} onSelect={handleSelectTicket} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="page-btn next-btn"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      ▶
                    </button>
                  </div>
                )}
              </>
            )}

            <div className="main-cta-container" style={{ marginTop: '20px' }}>
              <button className="main-cta-btn" onClick={() => tickets.length > 0 && handleSelectTicket(tickets[0])}>
                GET YOUR TICKETS NOW
              </button>
            </div>
          </div>

          {/* Right Side: Coming Soon Card */}
          <div className="tickets-right">
            <div className="coming-soon-card">
              {/* Vector Frames */}
              <img src={vector2} alt="" className="card-frame-outer" />
              <img src={vector1} alt="" className="card-frame-inner" />

              <div className="card-inner">
                <h2 className="coming-soon-title">TICKETS<br />COMING<br />SOON!</h2>

                <div className="card-divider">
                  <img src={dividerImg} alt="Divider" />
                </div>

                <p>The Jaipur Oneness Festival invites you to join a celebration of culture, music, and shared experiences.</p>

                <p className="highlight-red">Ticket details and types will be announced soon.</p>

                <p>Sign up to receive updates and be among the first to secure your spot at this unique festival.</p>

                <p><span className="highlight-green">Sign up below</span> to receive early access and updates.</p>

                {/* Sunset Image */}
                <div className="sunset-placeholder">
                  <img src={sunsetImg} alt="Sunset" className="sunset-image" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Modal */}
      {selectedTicket && (
        <div className="booking-modal-overlay">
          <div className="booking-modal-content">
            <button className="modal-close-btn" onClick={() => setSelectedTicket(null)}>×</button>
            <h3 className="booking-modal-title">Book your {selectedTicket.title}</h3>

            {bookingStatus && (
              <div className={bookingStatus.success ? 'message-success' : 'message-error'}>
                {bookingStatus.message}
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="booking-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={bookingForm.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="booking-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="booking-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="booking-form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={bookingForm.quantity}
                  onChange={handleInputChange}
                  min="1"
                  max={selectedTicket.stock}
                  required
                />
                <span style={{ fontSize: '12px', color: '#666', textAlign: 'left' }}>
                  Max available: {selectedTicket.stock}
                </span>
              </div>

              <div className="booking-summary">
                <p>Ticket Price: <span>RS. {selectedTicket.price.toLocaleString()}</span></p>
                <p>Total Cost: <span>RS. {(selectedTicket.price * bookingForm.quantity).toLocaleString()}</span></p>
              </div>

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-btn-cancel"
                  onClick={() => setSelectedTicket(null)}
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="booking-btn-submit"
                  disabled={submitting}
                >
                  {submitting ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TicketsSection;