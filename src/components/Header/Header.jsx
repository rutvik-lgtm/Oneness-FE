import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo_123.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      // Always show on other pages
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Packages', path: '/packages' },
    // { name: 'Accommodation', path: '/accommodation' },
    // { name: 'Tour', path: '/tour' },
    // { name: 'Tickets', path: '/#tickets', className: 'tickets' },
    { name: 'Tickets', path: '/tickets' },
    // { name: 'Location', path: '/location'},
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Get Involved', path: '/get-involved' },
  ];

  const headerClass = `site-header ${isHomePage ? 'is-home' : ''} ${isHomePage && !isScrolled ? 'header-hidden' : 'header-visible'}`;

  return (
    <header className={headerClass}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Jaipur Oneness Festival" />
        </Link>

        <button
          className={`menu-btn ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ display: 'block' }}>
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <nav className={`nav ${isOpen ? 'show' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${link.className || ''} ${isActive ? 'active-link' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
