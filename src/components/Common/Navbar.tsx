import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { usePopups } from '../Popups/PopupContext';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openEnquiry } = usePopups();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="container nav-container">
                <div className="nav-left">
                    <Link to="/" className="logo-container" onClick={closeMenu}>
                        <img src="/assets/kindergatern/0d11235e-1d22-4c93-9aa1-6b0d4e69a8c8.png" alt="Powergate Logo" className="navbar-logo" />
                        <span className="navbar-tagline">Electrical/Mechanical & ICT</span>
                    </Link>
                </div>

                <nav className={`nav-center ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={closeMenu}>Products</Link></li>
                        <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/partners" className={isActive('/partners') ? 'active' : ''} onClick={closeMenu}>Our Partners</Link></li>
                        <li><a href="#" onClick={closeMenu}>News</a></li>
                        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link></li>
                        <li className="mobile-only">
                            <button className="enquire-btn-mobile" onClick={() => { openEnquiry(); closeMenu(); }}>Enquire</button>
                        </li>
                    </ul>
                </nav>

                <div className="nav-right">
                    <button className="enquire-btn" onClick={openEnquiry}>Enquire</button>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
