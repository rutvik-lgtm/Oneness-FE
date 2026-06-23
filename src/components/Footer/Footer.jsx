import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Background image added via CSS class */}
      <div className="footer-top-bg"></div>
      
        <div className="footer-krishna-bg">
          {/* <img src="krish" alt="krishna" /> */}
        </div>
      <div className="footer-container">
        {/* Main Columns */}
        <div className="footer-main">
          {/* Column 1: Contact */}
          <div className="footer-col contact-col">
            <h3>Contact</h3>
            <p className="bold-text">Jaipur Oneness Festival</p>
            <p>Clarks Amer Jaipur, Rajasthan, India.</p>
            
            <div className="contact-details">
              <p><strong>Email:</strong><br/><a href="mailto:info@jaipuronenessfestival.com">info@jaipuronenessfestival.com</a></p>
              <p><strong>Media:</strong><br/><a href="mailto:media@jaipuronenessfestival.com">media@jaipuronenessfestival.com</a></p>
              <p><strong>Volunteers:</strong><br/><a href="mailto:volunteers@jaipuronenessfestival.com">volunteers@jaipuronenessfestival.com</a></p>
              <p><strong>Sponsors:</strong><br/><a href="mailto:sponsors@jaipuronenessfestival.com">sponsors@jaipuronenessfestival.com</a></p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About the Festival</Link></li>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Experience */}
          <div className="footer-col">
            <h3>Experience</h3>
            <ul>
              <li><Link to="/explore">Program</Link></li>
              <li><Link to="/teacher">Teachers</Link></li>
              <li><Link to="/teacher">Artists</Link></li>
              <li><Link to="/bazaar">Bazaar</Link></li>
              <li><Link to="/achievement">Oneness Award</Link></li>
            </ul>
          </div>

          {/* Column 4: Blog & Media */}
          <div className="footer-col">
            <h3>Blog & Media</h3>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/gallery">Media</Link></li>
            </ul>
          </div>

          {/* Right Section (Packages, Get Involved, Tickets + Newsletter) */}
          <div className="footer-col right-section">
            <div className="right-top-links">
              <div className="sub-col">
                <h3>Packages</h3>
                <ul>
                  <li><Link to="/accommodation">Accommodation</Link></li>
                  <li><Link to="/tour">Tour Packages</Link></li>
                </ul>
              </div>
              <div className="sub-col">
                <h3>Get Involved</h3>
                <ul>
                  <li><Link to="/get-involved">Volunteer</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="sub-col">
                <h3>Tickets</h3>
                <ul>
                  <li><Link to="/tickets">Buy Tickets</Link></li>
                  <li><Link to="/tickets">Ticketing Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            <div className="newsletter-section">
              <h3>Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Email address" required />
                <button type="submit">Join</button>
              </form>
              <p className="newsletter-note">Receive festival updates, program announcements, and early ticket access.</p>
              <p className="newsletter-note">Join the Jaipur Oneness Festival community.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-policies">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <p>Follow the journey and stay updated about speakers,<br/>artists, and festival experiences.</p>
            <div className="social-icons">
               <a href="#" className="icon">f</a>
               <a href="#" className="icon">ig</a>
               <a href="#" className="icon">yt</a>
               <a href="#" className="icon">x</a>
            </div>
          </div>

          <div className="footer-search">
            <input type="text" placeholder="Search here...." />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-strip">
        <div className="footer-bottom-content">
          <p>Jaipur Oneness Festival — a gathering for unity, wisdom, creativity, and conscious living.</p>
          <p>© 2026 Jaipur Oneness Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
