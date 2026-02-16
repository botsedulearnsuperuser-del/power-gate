import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
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
                            <li><Link to="/partners">Our Partners</Link></li>
                            <li><a href="#">News</a></li>
                            <li><Link to="/contact" className="active">Contact Us</Link></li>
                        </ul>
                    </nav>

                    <div className="nav-right">
                        <button className="enquire-btn">Enquire</button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="contact-hero" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/clientslogos/manatwork4.jpg')" }}>
                <div className="container">
                    <h1>CONTACT <span>US</span></h1>
                    <p>We're here to help. Reach out to us for any technical inquiries, product support, or collaboration opportunities.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-side">
                            <div className="section-title">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Product Inquiry" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="How can we help you?" rows={6} required></textarea>
                                </div>
                                <button type="submit" className="submit-btn">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-side">
                            <div className="info-card">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M240.3 396.8c3.3 5.1 9.1 8.5 15.7 8.5s12.4-3.4 15.8-8.5L382 226.6c14.8-22.9 23.4-48.1 23.4-77.3C405.3 64.9 339 0 256 0S106.7 64.9 106.7 149.3c0 29.2 8.6 54.4 23.4 77.3zM256 64c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3s-85.3-38.2-85.3-85.3S208.9 64 256 64m109.4 259.5L256 469.3L146.6 323.5c-37.4 19.6-61.3 48.9-61.3 81.8C85.3 464.2 161.7 512 256 512s170.7-47.8 170.7-106.7c0-32.9-23.9-62.2-61.3-81.8" /></svg>
                                    </div>
                                    <div className="info-text">
                                        <h4>Our Location</h4>
                                        <p>Unit 1, Plot 95, GICP</p>
                                        <p>P.O. Box 402921, Gaborone, Botswana</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor"><path d="m29.631 12.63l.33 1.47c.05.223.05.444.008.652q.03.12.031.248a1 1 0 0 1-1 1h-2.255l-1.483-1.977v-.002A2.54 2.54 0 0 0 23.22 13H23v-1.69c0-.722-.588-1.31-1.31-1.31h-1.38c-.722 0-1.31.588-1.31 1.31v1.68h-6v-1.68c0-.722-.588-1.31-1.31-1.31h-1.38C9.588 10 9 10.588 9 11.31V13h-.22c-.808 0-1.563.381-2.05 1.03L5.254 16H3a1 1 0 0 1-.969-1.248a1.5 1.5 0 0 1 .008-.652l.32-1.47A7.2 7.2 0 0 1 9.379 7h13.242a7.18 7.18 0 0 1 7.01 5.63" /><path d="m24.46 14.62l3.66 4.88A9.37 9.37 0 0 1 30 25.13v3.31c0 .86-.7 1.56-1.56 1.56H3.56C2.7 30 2 29.3 2 28.44v-3.31c0-2.03.66-4.01 1.88-5.63l3.65-4.87c.3-.4.76-.63 1.25-.63h.91c.17 0 .31-.14.31-.31v-2.38c0-.17.14-.31.31-.31h1.38c.17 0 .31.14.31.31v2.38c0 .17.14.31.31.31h7.38c.17 0 .31-.14.31-.31v-2.38c0-.17.14-.31.31-.31h1.38c.17 0 .31.14.31.31v2.38c0 .17.14.31.31.31h.91c.49 0 .95.23 1.24.62M13.698 19c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm3 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m-4.624 3c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m4.376 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm-7.376 3h1.376c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m4.376 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312" /></g></svg>
                                    </div>
                                    <div className="info-text">
                                        <h4>Phone Number</h4>
                                        <p>(+267) 392 4635</p>
                                        <p>Mon - Fri, 8:00am - 5:00pm</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="currentColor" d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M3.94 7.94l-2 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.63.63 0 0 1 0-.88l2-2c.24-.24.64-.24.88 0c.25.24.25.64 0 .88m7 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2-2a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0l2 2c.25.24.25.64 0 .88m0-7L6.8 7.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 2.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.12l4.06-4.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88" /></svg>
                                    </div>
                                    <div className="info-text">
                                        <h4>Email Address</h4>
                                        <p>info@powergate.co.bw</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5" /></svg>
                                    </div>
                                    <div className="info-text">
                                        <h4>Working Hours</h4>
                                        <p>Monday - Friday: 08:00 - 17:00</p>
                                        <p>Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.2447915605!2d25.8754162!3d-24.6473177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950bc4439c2789%3A0xe4872199b19e6eb5!2sGICP%2C%20Gaborone!5e0!3m2!1sen!2sbw!4v1708070000000!5m2!1sen!2sbw"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
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

export default ContactPage;
