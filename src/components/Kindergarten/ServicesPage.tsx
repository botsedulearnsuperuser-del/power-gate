import React from 'react';
import { Link } from 'react-router-dom';
import { Power, Settings, Shield, Globe, Droplets, Cpu, ArrowRight } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
    const services = [
        {
            id: 1,
            title: 'Electrical Engineering',
            icon: (
                <svg width="32" height="32" viewBox="0 0 512 512">
                    <path fill="currentColor" fillRule="evenodd" d="M213.333 128V42.667h-42.666V128h-64v128c0 67.648 44.981 124.79 106.665 143.149l.001 70.184h85.333l.023-70.19C360.362 380.777 405.333 323.64 405.333 256V128h-64V42.667h-42.667V128zm64 106.667l25.817-64h-78.507L202.667 256h42.666l-32 106.667l117.333-128z" clipRule="evenodd" />
                </svg>
            ),
            image: '/clientslogos/manatwork3.jpg',
            description: 'Engineering high-voltage power distribution, industrial instrumentation, and sustainable energy systems.',
            features: ['Power Grid Solutions', 'Industrial Control Systems', 'Energy Audits & Optimization']
        },
        {
            id: 2,
            title: 'Mechanical Services',
            icon: (
                <svg width="32" height="32" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026z" />
                </svg>
            ),
            image: '/clientslogos/steel-fabrication-facility.jpg',
            description: 'Precision mechanical engineering including heavy steel fabrication and specialized equipment maintenance.',
            features: ['Steel Fabrication', 'HVAC & Ventilation', 'Hydraulic Systems']
        },
        {
            id: 3,
            title: 'ICT',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M22.364 21.364L20.95 19.95a7 7 0 0 0 0-9.899l1.414-1.415a9 9 0 0 1 0 12.728" /><path fill="currentColor" d="m19.536 18.535l-1.414-1.414a3.004 3.004 0 0 0 0-4.242l1.414-1.414a5.005 5.005 0 0 1 0 7.07M17 26h-2V15a1 1 0 0 1 1-1a1 1 0 0 1 1 1Zm-4.536-7.465a5.005 5.005 0 0 1 0-7.07l1.414 1.414a3.004 3.004 0 0 0 0 4.242Z" /><path fill="currentColor" d="M9.636 21.364a9 9 0 0 1 0-12.728l1.414 1.415a7 7 0 0 0 0 9.898Z" /><path fill="currentColor" d="M16 31a1 1 0 0 1-.504-.136l-12-7A1 1 0 0 1 3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7l-1.008 1.728L16 3.158L5 9.574v12.852l11 6.417l11-6.417V15h2v8a1 1 0 0 1-.496.864l-12 7A1 1 0 0 1 16 31" />
                </svg>
            ),
            image: '/clientslogos/manatwork5.jpg',
            description: 'Building the digital backbone for enterprises with managed ICT services and robust network infrastructure.',
            features: ['Network Infrastructure', 'Enterprise Cloud Services', 'Digital Integration']
        }
    ];

    return (
        <div className="services-page">
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
                            <li><Link to="/services" className="active">Services</Link></li>
                            <li><Link to="/partners">Our Partners</Link></li>
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
            <section className="services-hero" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/clientslogos/manatwork5.jpg')" }}>
                <div className="container">
                    <h1>OUR <span>SERVICES</span></h1>
                    <p>Technological mastery across Electrical, Mechanical, and ICT sectors, delivering infrastructure that empowers the Pan-African economy.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-list-section">
                <div className="container">
                    <div className="services-intro">
                        <h2>Engineering Excellence</h2>
                        <p>With over 30 years of experience, we provide end-to-end engineering solutions that combine technical precision with local expertise.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-icon-float">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="service-learn-btn">
                                        Explore Details <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Featured Bottom Section */}
                    <div className="featured-service-bottom">
                        <div className="service-card featured-card-centered">
                            <div className="service-image">
                                <img src="/assets/services/1faa9c29-c430-454c-ace6-d290c433ee9d.png" alt="Supplies" />
                                <div className="service-icon-float">
                                    <svg width="32" height="32" viewBox="0 0 21 24">
                                        <path fill="currentColor" d="M10.449 0c-3.64 0-6.71.201-7.168.468c-.8.273-1.402 2.09-1.404 4.246v1.071h-.218a.5.5 0 0 0-.088-.135a.6.6 0 0 0 .146-.392v-.544a.49.49 0 0 0-.427-.535H.432a.49.49 0 0 0-.428.539v-.002v.544c0 .15.055.288.146.393l-.001-.001a.6.6 0 0 0-.146.392V8.73q-.002.023-.002.048c0 .25.187.457.429.487h.859A.42.42 0 0 0 1.658 9l.001-.003h.218v4.822c0 .191.205.368.536.463v.626c-.473.061-.8.274-.8.518v5.36a2.96 2.96 0 0 0 .542 1.863l-.006-.009v.921c0 .243.197.44.44.44h1.798a.44.44 0 0 0 .44-.44v-.631h11.247v.631c0 .243.197.44.44.44h1.798a.44.44 0 0 0 .44-.44v-.92a2.96 2.96 0 0 0 .536-1.86v.007v-5.36c0-.244-.331-.457-.8-.518v-.626c.331-.095.535-.272.536-.463v-4.82h.218c.06.152.202.259.369.268h.855a.49.49 0 0 0 .428-.539v.002v-2.686a.6.6 0 0 0-.146-.393l.001.001a.6.6 0 0 0 .146-.392V4.72a.49.49 0 0 0-.427-.535h-.859a.49.49 0 0 0-.428.539v-.002v.544c0 .15.055.288.146.393l-.001-.001a.6.6 0 0 0-.087.131l-.001.003h-.218V4.716c0-2.167-.608-3.992-1.414-4.251c-.49-.266-3.545-.463-7.157-.463zM3.101 3.107h14.695c.259 0 .475.184.525.429l.001.003c.102.51.16 1.097.16 1.698v.038v-.002V9c0 .296-.24.536-.536.536H2.949A.536.536 0 0 1 2.413 9V5.238q.001-.903.169-1.756l-.009.057a.536.536 0 0 1 .526-.432zm.651 11.786H4.9c.143 0 .259.112.267.253v.001l.191 3.482v.014c0 .148-.12.268-.268.268H3.752a.27.27 0 0 1-.268-.268v-3.482c0-.148.12-.268.268-.268m12.245 0h1.148c.148 0 .268.12.268.268v3.479c0 .148-.12.268-.268.268h-1.339a.27.27 0 0 1-.268-.268v-.015v.001l.191-3.482c.01-.14.126-.25.267-.25h.001zm-9.968.64h8.84c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.84a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134m.053.964h8.733c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.082a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134m.054.964h8.626c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.136a.133.133 0 0 1-.133-.128v-.16c0-.074.06-.134.134-.134zm.054.964h8.518c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.19a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134" />
                                    </svg>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>Supplies</h3>
                                <p>Procurement and supply of premium engineering components and infrastructure materials.</p>
                                <ul className="service-features">
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Equipment Procurement
                                    </li>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Material Supplies
                                    </li>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Inventory Management
                                    </li>
                                </ul>
                                <button className="service-learn-btn">
                                    Explore Details <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Banner */}
            <section className="service-action-banner">
                <div className="container">
                    <div className="action-flex">
                        <div className="action-text">
                            <h2>Have a Specific Project in Mind?</h2>
                            <p>Our consultants are ready to discuss your requirements and provide tailored engineering solutions.</p>
                        </div>
                        <Link to="/contact" className="action-btn">Request a Consultation</Link>
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

export default ServicesPage;
