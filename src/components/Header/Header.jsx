import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo_123.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
  };

  const handleDropdownClick = (path, e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === path ? null : path);
    } else {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      submenu: [
        { name: 'Team', path: '/team' },
        { name: 'Venue', path: '/location' }
      ]
    },
    { 
      name: 'Experience', 
      path: '/experience',
      submenu: [
        { name: 'Program', path: '/explore' },
        { name: 'Teacher and Artists', path: '/teacher' },
        { name: 'Bazaar', path: '/bazaar' },
        { name: 'Achievement', path: '/achievement' }
      ]
    },
    { 
      name: 'Packages', 
      path: '/packages',
      submenu: [
        { name: 'Accommodation', path: '/accommodations' },
        { name: 'Accommodations registration', path: '/accommodation' },
        { name: 'Tour packages', path: '/tour-packages' },
        { name: 'Tours registration', path: '/tour' }
      ]
    },
    { 
      name: 'Blog', 
      path: '/blog',
      submenu: [
        { name: 'Gallery', path: '/gallery' }
      ]
    },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
    { name: 'Tickets', path: '/tickets' },
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
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <nav className="nav desktop-nav">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div key={link.path} className={`nav-item-dropdown ${activeDropdown === link.path ? 'open' : ''}`}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `dropdown-trigger ${link.className || ''} ${isActive ? 'active-link' : ''}`
                    }
                  >
                    {link.name}
                    <svg className="caret-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </NavLink>
                  <div className="dropdown-menu">
                    {link.submenu.map((subLink) => (
                      <NavLink
                        key={subLink.path}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `submenu-link ${isActive ? 'active-link' : ''}`
                        }
                      >
                        {subLink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${link.className || ''} ${isActive ? 'active-link' : ''}`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      
      {/* Mobile Drawer Menu Panel */}
      <div className={`drawer-menu-panel ${isOpen ? 'open' : ''}`}>
        <button className="drawer-close-btn" onClick={() => setIsOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="drawer-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Jaipur Oneness Festival" />
          </Link>
        </div>

        <div className="drawer-search">
          <input type="text" placeholder="Search here..." />
          <button className="search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div key={link.path} className={`drawer-nav-item ${activeDropdown === link.path ? 'open' : ''}`}>
                  <div className="drawer-nav-row">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `drawer-link ${isActive ? 'active-link' : ''}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                    <button
                      className="submenu-toggle-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.path ? null : link.path);
                      }}
                    >
                      <svg className="caret-icon-mobile" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  <div className="drawer-submenu">
                    {link.submenu.map((subLink) => (
                      <NavLink
                        key={subLink.path}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `drawer-submenu-link ${isActive ? 'active-link' : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `drawer-link ${isActive ? 'active-link' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="drawer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
