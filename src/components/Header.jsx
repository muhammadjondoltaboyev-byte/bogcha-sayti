import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/groups', label: 'Guruhlar' },
  { to: '/teachers', label: 'Tarbiyachilar' },
  { to: '/services', label: 'Narxlar' },
  { to: '/facilities', label: 'Imkoniyatlar' },
  { to: '/about', label: 'Biz haqimizda' },
  { to: '/contact', label: "Ro'yxatdan o'tish", cta: true }
];

export default function Header({ mobileNavOpen, onToggleMobile, onLinkClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo - Chap burchakda, normal o'lchamda */}
          <div className="logo">
            <i className="fas fa-star"></i>
            <span>Quvnoq Bolajonlar</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="main-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) => 
                  `${link.cta ? 'nav-cta' : ''} ${isActive ? 'active' : ''}`.trim()
                }
                onClick={onLinkClick}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          <button className="burger" onClick={onToggleMobile}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={onToggleMobile}>
          <i className="fas fa-times"></i>
        </button>
        {navLinks.map((link) => (
          <NavLink key={link.label} to={link.to} onClick={onLinkClick}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,251,245,0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          padding: 12px 0;
        }
        
        .site-header.scrolled {
          padding: 8px 0;
          background: rgba(255,251,245,0.98);
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        
        /* Logo - Chap burchakda */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        
        .logo i {
          font-size: 28px;
          color: #FF6B35;
        }
        
        .logo span {
          font-family: 'Baloo 2', cursive;
          font-size: 22px;
          font-weight: 800;
          color: #FF6B35;
          white-space: nowrap;
        }
        
        /* Desktop Navigation */
        .main-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .main-nav a {
          padding: 8px 16px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 15px;
          color: #2D2D2D;
          transition: all 0.2s;
          text-decoration: none;
        }
        
        .main-nav a:hover,
        .main-nav a.active {
          background: #FFE66D;
          color: #2D2D2D;
        }
        
        .main-nav .nav-cta {
          background: #FF6B35;
          color: white;
        }
        
        .main-nav .nav-cta:hover {
          background: #ff8c5a;
          color: white;
        }
        
        .burger {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #FF6B35;
        }
        
        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 1001;
          padding: 80px 24px 30px;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .mobile-nav.open {
          transform: translateX(0);
        }
        
        .mobile-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #FF6B35;
        }
        
        .mobile-nav a {
          padding: 14px 20px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 18px;
          color: #2D2D2D;
          text-decoration: none;
          text-align: center;
        }
        
        .mobile-nav a.active {
          background: #FFE66D;
        }
        
        @media (max-width: 950px) {
          .main-nav a {
            padding: 6px 12px;
            font-size: 13px;
          }
          .logo i {
            font-size: 24px;
          }
          .logo span {
            font-size: 18px;
          }
        }
        
        @media (max-width: 850px) {
          .main-nav {
            display: none;
          }
          .burger {
            display: block;
          }
        }
        
        @media (max-width: 480px) {
          .logo i {
            font-size: 20px;
          }
          .logo span {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}