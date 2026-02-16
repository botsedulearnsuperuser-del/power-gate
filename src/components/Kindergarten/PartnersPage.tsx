import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PartnersPage.css';

const PartnersPage: React.FC = () => {
    const partners = [
        {
            id: 1,
            name: 'POLARIUM',
            img: '/assets/services/polarium-logo-partner.png',
            description: 'Strategic partner for advanced lithium-ion energy storage solutions, driving sustainable power for telecommunications and industrial grids across Africa. Polarium provides the intelligent energy storage that keeps critical infrastructure running during power transitions.'
        },
        {
            id: 2,
            name: 'CENTURION SYSTEMS',
            img: '/assets/services/logo (5) (1).png',
            description: 'Partnering in world-class gate automation and access control systems, providing security and convenience to our residential and commercial clients. Centurion Systems is the benchmark for security and automation technology in the Southern African region.'
        }
    ];

    return (
        <div className="partners-page">
            {/* Top Navbar */}
            <header className="header">
                <div className="container nav-container">
                    <div className="nav-left">
                        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                            <img src="/assets/kindergatern/0d11235e-1d22-4c93-9aa1-6b0d4e69a8c8.png" alt="Powergate Logo" />
                            <span className="logo-tagline">Electrical/Mechanical & ICT</span>
                        </Link>
                    </div>

                    <nav className="nav-center">
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><a href="#">Services</a></li>
                            <li><Link to="/partners" className="active">Our Partners</Link></li>
                            <li><a href="#">News</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>

                    <div className="nav-right">
                        <button className="enquire-btn">Enquire</button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="partners-hero" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/clientslogos/steel-fabrication-facility.jpg')" }}>
                <div className="container">
                    <h1>OUR <span>PARTNERS</span></h1>
                    <p>Collaborating with global leaders to deliver world-class engineering and infrastructure solutions.</p>
                </div>
            </section>

            {/* Partners List Section */}
            <section className="partners-list-section">
                <div className="container">
                    <div className="partners-rows">
                        {partners.map((partner, index) => (
                            <div key={partner.id} className={`partner-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="partner-image-side">
                                    <div className="partner-img-bg">
                                        <img src={partner.img} alt={partner.name} />
                                    </div>
                                </div>
                                <div className="partner-content-side">
                                    <div className="partner-content-wrapper">
                                        <h3>{partner.name}</h3>
                                        <p>{partner.description}</p>
                                        <button className="details-btn">
                                            Learn More <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach Section */}
            <section className="global-partnership">
                <div className="container">
                    <div className="global-flex">
                        <div className="global-content">
                            <h2>Building a Stronger Africa Together</h2>
                            <p>Our partnerships are built on shared values of excellence, innovation, and integrity. Together with our global network, we are engineering the future of the Pan-African landscape.</p>
                            <ul className="partnership-features">
                                <li>Authorized Dealerships & Distributions</li>
                                <li>Strategic Technical Collaborations</li>
                                <li>Sustainable Project Integration</li>
                                <li>Joint Research & Development</li>
                            </ul>
                        </div>
                        <div className="global-image">
                            <img src="/clientslogos/team2.jpeg" alt="Global Reach" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <img src="/assets/kindergatern/0d11235e-1d22-4c93-9aa1-6b0d4e69a8c8.png" alt="Logo" />
                            <p>Engineering sustainable Pan-African excellence through innovation since 1993. 100% citizen-owned leader in Electrical, Mechanical, and ICT solutions.</p>
                        </div>
                        <div className="footer-links-grid">
                            <div className="footer-col">
                                <h4>Products</h4>
                                <ul>
                                    <li><Link to="/products">Instrumentation</Link></li>
                                    <li><Link to="/products">Power Systems</Link></li>
                                    <li><Link to="/products">Energy Storage</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>About</h4>
                                <ul>
                                    <li><Link to="/partners">Our Partners</Link></li>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Support</h4>
                                <ul>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-image">
                            <img src="/clientslogos/team3.jpeg" alt="Our Team" />
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>
                            &copy; 2026 Powergate Manufacturing. All rights reserved. developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'none', marginLeft: '5px' }}>Dev Gen Botswana</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PartnersPage;
