import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
    const products = [
        {
            id: 1,
            title: 'DTS SLIDING GATE MOTORS',
            category: 'Gate Automation',
            img: '/products/drive-300.jpg',
            description: 'High-performance sliding gate motors designed for heavy industrial use.'
        },
        {
            id: 2,
            title: 'INDUSTRIAL RECTIFIERS',
            category: 'Power Systems',
            img: '/products/rectifierforscrollsectionhero.png',
            description: 'Reliable power conversion solutions for industrial infrastructure.'
        },
        {
            id: 3,
            title: 'CENTURION GATE SYSTEMS',
            category: 'Gate Automation',
            img: '/products/motorgate.png',
            description: 'Advanced access control and gate automation for commercial sites.'
        },
        {
            id: 4,
            title: 'INDUSTRIAL CABLE SOLUTIONS',
            category: 'Cables',
            img: '/products/industrial_range.png',
            description: 'Durable electrical and instrumentation cables for harsh environments.'
        },
        {
            id: 5,
            title: 'ABERDARE SPECIALIZED CABLES',
            category: 'Cables',
            img: '/products/aberdare (1).png',
            description: 'Premium quality power and control cables for diverse applications.'
        },
        {
            id: 6,
            title: 'HEAVY DUTY BATTERY STAND',
            category: 'Energy Storage',
            img: '/products/batterystand.png',
            description: 'Robust storage solutions for industrial battery systems.'
        },
        {
            id: 7,
            title: 'POLLARIUM LITHIUM BATTERY',
            category: 'Energy Storage',
            img: '/products/pollariumlithiumbattery.jpg',
            description: 'Cutting-edge lithium-ion storage for telecommunications and power grids.'
        },
        {
            id: 8,
            title: 'RITAR LITHIUM BATTERY',
            category: 'Energy Storage',
            img: '/products/ritarlithiumbattery.jpg',
            description: 'High-efficiency lithium energy storage for industrial reliability.'
        }
    ];

    return (
        <div className="products-page">
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
                            <li><Link to="/products" className="active">Products</Link></li>
                            <li><Link to="/services">Services</Link></li>
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
            <section className="products-hero" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/services/1faa9c29-c430-454c-ace6-d290c433ee9d.png')" }}>
                <div className="container">
                    <h1>OUR <span>PRODUCTS</span></h1>
                    <p>Explore our range of high-performance engineering solutions and infrastructure components.</p>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="products-filter-section">
                <div className="container">
                    <div className="filter-bar">
                        <div className="search-box">
                            <Search size={20} />
                            <input type="text" placeholder="Search products..." />
                        </div>
                        <div className="filter-options">
                            <button className="filter-btn active">All Products</button>
                            <button className="filter-btn">Cables</button>
                            <button className="filter-btn">Gate Automation</button>
                            <button className="filter-btn">Energy Storage</button>
                            <button className="filter-btn">Power Systems</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="products-grid-section">
                <div className="container">
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-wrapper">
                                    <img src={product.img} alt={product.title} />
                                    <div className="product-category">{product.category}</div>
                                </div>
                                <div className="product-details">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <button className="details-btn">
                                        View Details <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="product-support-banner">
                <div className="container">
                    <div className="support-content">
                        <h2>Need Technical Assistance?</h2>
                        <p>Our experts are ready to help you find the right solution for your project.</p>
                        <button className="contact-us-btn">Get Technical Advice</button>
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
                                    <li><a href="#">Instrumentation</a></li>
                                    <li><a href="#">Power Systems</a></li>
                                    <li><a href="#">Energy Storage</a></li>
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

export default ProductsPage;
