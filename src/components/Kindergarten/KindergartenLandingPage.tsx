import React from 'react';
import './KindergartenLandingPage.css';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingLandingPage: React.FC = () => {
  return (
    <div className="manufacturing-page">
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
      </header> {/* End Header */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slide" style={{ backgroundImage: "url('/assets/kindergatern/power-gate-building.jpg')" }}>
          <div className="container hero-container">
            <div className="hero-content">
              <h1>ENGINEERING <span>SOLUTIONS</span></h1>
              <p>Powering Africa's Future through Sustainable Engineering Excellence since 1993.</p>
            </div>
            <div className="hero-boxes">
              <div className="hero-box">
                <h3>Electrical Services</h3>
                <a href="#" className="hero-box-link">View More</a>
              </div>
              <div className="hero-box active">
                <h3>Mechanical Services</h3>
                <a href="#" className="hero-box-link">View More</a>
              </div>
              <div className="hero-box">
                <h3>ICT Services</h3>
                <a href="#" className="hero-box-link">View More</a>
              </div>
              <div className="hero-box">
                <h3>Supplies</h3>
                <a href="#" className="hero-box-link">View More</a>
              </div>
            </div>
          </div>

          <button className="hero-arrow left"><ChevronLeft size={32} /></button>
          <button className="hero-arrow right"><ChevronRight size={32} /></button>

          <div className="hero-pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Product Slideshow Section */}
      <section className="product-slideshow-section">
        <div className="container">
          <div className="slideshow-container">
            <div className="slideshow-track">
              <div className="slide">
                <img src="/products/aberdare (1).png" alt="Aberdare Product" />
              </div>
              <div className="slide">
                <img src="/products/batterystand.png" alt="Battery Stand" />
              </div>
              <div className="slide">
                <img src="/products/drive-300.jpg" alt="Drive 300" />
              </div>
              <div className="slide">
                <img src="/products/motorgate.png" alt="Motorgate" />
              </div>
              <div className="slide">
                <img src="/products/pollariumlithiumbattery.jpg" alt="Pollarium Lithium Battery" />
              </div>
              <div className="slide">
                <img src="/products/rectifierforscrollsectionhero.png" alt="Rectifier" />
              </div>

              <div className="slide">
                <img src="/products/ritarlithiumbattery.jpg" alt="Ritar Lithium Battery" />
              </div>
              <div className="slide">
                <img src="/products/industrial_range.png" alt="Industrial Range" />
              </div>
              <div className="slide">
                <img src="/products/aberdare (1).png" alt="Aberdare Product" />
              </div>
              <div className="slide">
                <img src="/products/batterystand.png" alt="Battery Stand" />
              </div>
              <div className="slide">
                <img src="/products/drive-300.jpg" alt="Drive 300" />
              </div>
              <div className="slide">
                <img src="/products/motorgate.png" alt="Motorgate" />
              </div>
              <div className="slide">
                <img src="/products/pollariumlithiumbattery.jpg" alt="Pollarium Lithium Battery" />
              </div>
              <div className="slide">
                <img src="/products/rectifierforscrollsectionhero.png" alt="Rectifier" />
              </div>

              <div className="slide">
                <img src="/products/ritarlithiumbattery.jpg" alt="Ritar Lithium Battery" />
              </div>
              <div className="slide">
                <img src="/products/industrial_range.png" alt="Industrial Range" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wire Drawn Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stats-image">
              <img src="/clientslogos/team2.jpeg" alt="Team" />
            </div>
            <div className="stats-content">
              <h2>OVER <span>30 YEARS</span> OF ENGINEERING EXCELLENCE.</h2>
              <p>Since 1993, Power Gate has been a cornerstone of Botswana's engineering landscape. Our commitment to world-class standards and Zero Harm practices has allowed us to deliver complex projects across the Southern African region with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="product-info-section">
        <div className="container">
          <div className="section-header">
            <h2>PRODUCT INFORMATION</h2>
            <p>
              We supply and fit the products with the highest standards of quality and precision. <Link to="/products" style={{ color: 'red', textDecoration: 'none', marginLeft: '5px', fontWeight: 'bold' }}>View All Products</Link>
            </p>
          </div>

          <div className="product-grid">
            {[
              { title: 'DTS SLIDING GATE MOTORS', img: '/products/drive-300.jpg' },
              { title: 'INDUSTRIAL RECTIFIERS', img: '/products/rectifierforscrollsectionhero.png' },
              { title: 'CENTURION GATE SYSTEMS', img: '/products/motorgate.png' },
              { title: 'INDUSTRIAL CABLE SOLUTIONS', img: '/products/industrial_range.png' }
            ].map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <button className="details-btn">
                    {product.title === 'OTHER CABLES' ? 'View All' : 'Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Excellence Section */}
      <section className="excellence-section">
        <div className="container">
          <h2 className="section-title">EXPERIENCE OUR SERVICE</h2>
          <div className="excellence-grid">
            <div className="excellence-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <g fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 17v-3" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v6" />
                    <path fill="currentColor" d="M11 3v4a1 1 0 0 0 1 1h5.793a.5.5 0 0 0 .353-.854l-1.97-1.97a.25.25 0 0 1 0-.353l1.97-1.97A.5.5 0 0 0 17.793 2H12a1 1 0 0 0-1 1m7.8 19H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 20.48 2 19.92 2 18.8v-5.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 10 4.08 10 5.2 10h1.824c.335 0 .502 0 .62.069a.5.5 0 0 1 .219.267c.044.129.011.293-.054.62l-1.426 7.13c-.131.656-.197.984-.108 1.24a1 1 0 0 0 .439.537c.234.137.569.137 1.238.137h8.096c.67 0 1.004 0 1.238-.137a1 1 0 0 0 .44-.536c.088-.257.022-.585-.109-1.24l-1.426-7.13c-.065-.328-.098-.492-.054-.62a.5.5 0 0 1 .22-.268c.117-.069.284-.069.619-.069H18.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 11.52 22 12.08 22 13.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22" />
                  </g>
                </svg>
              </div>
              <h3>OUR MISSION</h3>
              <p>To deliver world-class engineering solutions with an unwavering commitment to Zero Harm practices, ensuring safety and excellence in every project we undertake.</p>
            </div>
            <div className="excellence-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M16 5c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 1.5A2.5 2.5 0 0 1 18.5 6A2.5 2.5 0 0 1 16 8.5A2.5 2.5 0 0 1 13.5 6A2.5 2.5 0 0 1 16 3.5M3 2v12h3v9l7-12H9l1.12-2.5C9.44 7.76 8.88 6.93 8.5 6c.69-1.71 2-3.12 3.61-4z" />
                </svg>
              </div>
              <h3>OUR VISION</h3>
              <p>To evolve from a regional leader into a premier Pan-African engineering firm, setting the gold standard for infrastructure and digital integration.</p>
            </div>
            <div className="excellence-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.291 6h.71a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2l-4.17-5.836a2 2 0 0 0-2.201-.753l-2.486.746a2 2 0 0 1-1.988-.502l-.293-.293a1 1 0 0 1 .152-1.539l5.401-3.6a2 2 0 0 1 2.183-.024l4.156 2.645A1 1 0 0 0 19.29 6M5.027 14.295l-1.616 1.414a1 1 0 0 0 .041 1.538l5.14 4.04a1 1 0 0 0 1.487-.29l.704-1.232a2 2 0 0 0-.257-2.338l-2.702-2.972a2 2 0 0 0-2.797-.16M7.046 5H3a1 1 0 0 0-1 1v7.516a2 2 0 0 0 .35 1.13l.074-.066l1.615-1.414a3.5 3.5 0 0 1 4.895.28l2.702 2.972a3.5 3.5 0 0 1 .45 4.09l-.655 1.146a2 2 0 0 0 1.738-.155l4.41-2.646a1 1 0 0 0 .299-1.438l-5.267-7.379a.5.5 0 0 0-.55-.188l-2.486.745a3.5 3.5 0 0 1-3.48-.877l-.293-.293a2.5 2.5 0 0 1 .38-3.848z" />
                </svg>
              </div>
              <h3>CORE VALUES</h3>
              <p>Innovation, integrity, and shared growth drive our operations, fostering trust with major corporations and government entities across Southern Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Support Section */}
      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">INDUSTRIER WE SUPPORT</h2>
          <div className="industries-grid">
            <div className="industries-left">
              <div className="industries-text">
                <p>PROJECT EXECUTION</p>
                <p>Technical mastery across diverse project sites, from heavy steel fabrication to complex system integrations.</p>
                <p>We serve a broad spectrum of industries, providing critical infrastructure and managed services for regional growth.</p>
                <ul className="industries-list">
                  {['Mining & Energy', 'Telecommunications', 'Industrial Manufacturing', 'B2B ICT Services', 'Water & Sewage'].map((item) => (
                    <li key={item}>
                      <svg className="industry-list-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m10 16l-5-5l1.41-1.42L10 13.17l7.59-7.59L19 7m0-6H5c-1.11 0-2 .89-2 2v12.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.89-.97.89-1.66V3a2 2 0 0 0-2-2" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="industries-right">
              <div className="industries-slideshow-container">
                <div className="industries-slideshow-track">
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork3.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork2.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork4.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork5.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/steel-fabrication-facility.jpg" alt="Steel Fabrication" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/menatwork-dyna.jpeg" alt="Men at Work Dyna" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork3.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork2.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork4.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/manatwork5.jpg" alt="Men at Work" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/steel-fabrication-facility.jpg" alt="Steel Fabrication" />
                  </div>
                  <div className="industries-slide">
                    <img src="/clientslogos/menatwork-dyna.jpeg" alt="Men at Work Dyna" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Us Out Section */}
      <section className="reach-section">
        <div className="container">
          <div className="reach-grid">
            <div className="reach-left">
              <h2>REACH US OUT</h2>
              <p>Get in touch with us for any inquiries or support. Our global network is ready to assist you wherever you are.</p>
              <div className="contact-methods">
                <a href="mailto:contact@powergate.com" className="contact-us-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Contact Us</a>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <span>Unit 1, Plot 95, GICP</span>
                  <strong>P.O. Box 402921, Gaborone</strong>
                </div>
                <div className="contact-item">
                  <span>Phone On</span>
                  <a href="tel:+2673924635" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <strong>(+267) 392 4635</strong>
                  </a>
                </div>
                <div className="contact-item">
                  <span>Email On</span>
                  <a href="mailto:info@powergate.co.bw" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <strong>info@powergate.co.bw</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="reach-right" style={{ marginBottom: '30px' }}>
              <img src="/clientslogos/truck-powergate.png" alt="Powergate Truck" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <div className="clients-grid">
            <img src="/clientslogos/07469669-d940-4905-83d2-4b89dc9d9dc1.png" alt="Client Logo" />
            <img src="/clientslogos/13ebf50c-d4ff-40fd-8a71-08346f280274.png" alt="Client Logo" />
            <img src="/clientslogos/1c69a445-bd49-47cf-a003-8c51a38fde7c.png" alt="Client Logo" />
            <img src="/clientslogos/253628e1-8346-4319-8046-f78f977e442a.png" alt="Client Logo" />
            <img src="/clientslogos/393c758e-3465-4ef1-9bcc-150a7b686276.png" alt="Client Logo" />
            <img src="/clientslogos/4358bcbd-cc93-4501-a07d-f1edc50e8e5f.png" alt="Client Logo" />
            <img src="/clientslogos/796154a5-46eb-4f91-8ee4-2e26877aff3c.png" alt="Client Logo" />
            <img src="/clientslogos/c4799d12-3978-4751-924b-bcbfb45eb196.png" alt="Client Logo" />
            <img src="/clientslogos/efbf9ee2-beff-4395-9492-cd65a13fe3f2.png" alt="Client Logo" />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section" style={{ backgroundImage: "linear-gradient(rgba(168, 0, 0, 0.4), rgba(168, 0, 0, 0.4)), url('/clientslogos/team-powergate.jpeg')" }}>
        <div className="container history-content">
          <p>OUR JOURNEY</p>
          <h2>Since 1993</h2>
          <button className="journey-btn">Learn More <ArrowRight size={16} /></button>
        </div>
      </section>

      {/* Short Reads Section */}
      <section className="shorts-section">
        <div className="container">
          <h3>Short Reads</h3>
          <div className="shorts-grid">
            <div className="short-card">
              <img src="/assets/kindergatern/DEZ02358 1.png" alt="Short 1" />
              <p>Innovative manufacturing techniques for 2026.</p>
            </div>
            <div className="short-card">
              <img src="/assets/kindergatern/3 1.png" alt="Short 2" />
              <p>Sustainable production in the wire industry.</p>
            </div>
            <div className="short-card">
              <img src="/assets/kindergatern/DEZ02360 1.png" alt="Short 3" />
              <p>Global expansion and market trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="help-section">
        <div className="container">
          <div className="help-header">
            <h3>Need Help</h3>
          </div>
          <div className="help-grid">
            <div className="help-col">
              <h4>Get in touch</h4>
              <p>Contact our customer service team for any assistance or product information.</p>
              <a href="mailto:contact@powergate.com" className="help-contact-btn">Contact Us</a>
            </div>
            <div className="help-col">
              <h4>Product Support</h4>
              <p>Access technical data, installation guides, and troubleshooting resources.</p>
            </div>
            <div className="help-col">
              <h4>Trade FAQs</h4>
              <p>Find answers to common questions about our products and services.</p>
            </div>
            <div className="help-col">
              <h4>Trends FAQs</h4>
              <p>Stay updated with the latest industry trends and innovations.</p>
            </div>
            <div className="help-col newsletter-col">
              <h4>Newsletter</h4>
              <p>Subscribe to get the latest news and updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
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

export default ManufacturingLandingPage;
