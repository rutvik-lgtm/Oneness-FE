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
              <li><Link to="/teacher">Teachers and artists</Link></li>
              {/* <li><Link to="/teacher">Artists</Link></li> */}
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
               <a href="#" className="icon" aria-label="Facebook">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                 </svg>
               </a>
               <a href="#" className="icon" aria-label="Instagram">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                 </svg>
               </a>
               <a href="#" className="icon" aria-label="YouTube">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>
               </a>
               <a href="#" className="icon" aria-label="X (Twitter)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </a>
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
