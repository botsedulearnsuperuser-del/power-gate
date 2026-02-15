import { Heart, Check, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube, User, Calendar } from 'lucide-react';
import './NGOLandingPage.css';

const NGOLandingPage = () => {
    return (
        <div className="ngo-container">
            {/* Sanity check */}
            <div style={{ position: 'fixed', top: 0, left: 0, padding: '5px', background: 'red', color: 'white', zIndex: 9999, fontSize: '10px' }}>Dev Mode: NGO Page</div>
            {/* Navigation */}
            <nav className="ngo-nav">
                <div className="ngo-logo">
                    <Heart className="logo-accent" fill="currentColor" />
                    <span>Give <span className="logo-accent">Life</span></span>
                </div>
                <div className="ngo-nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#causes">Causes</a>
                    <a href="#pages">Pages</a>
                    <a href="#blog">Blog</a>
                </div>
                <div className="ngo-nav-actions">
                    <div className="btn-search">
                        <img src="/assets/powergate/secrch.png" alt="search" style={{ width: '20px' }} />
                    </div>
                    <a href="#donate" className="btn-donate">Donate Now</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="ngo-hero">
                <div className="hero-bg-overlay">
                    <img src="/assets/powergate/hero section.png" alt="Children playing" className="hero-bg-img" />
                    <div className="hero-overlay-gradient"></div>
                </div>
                <div className="hero-content">
                    <span className="hero-subtitle">Give Hope For Homeless</span>
                    <h1 className="hero-title ngo-serif">Helping Each Other <br />Can Make World Better</h1>
                    <p className="hero-desc">We are world wide non-profit organization who help people who need help. Join us and help them for their better future.</p>
                    <div className="hero-btns">
                        <a href="#donate" className="btn-primary">Donate Now</a>
                        <a href="#more" className="btn-outline">Read More</a>
                    </div>
                </div>
            </section>

            <div className="ngo-content-wrapper">
                {/* Impact Section */}
                <section className="ngo-impact" id="about">
                    <div className="impact-images">
                        <div className="img-overlap-1 placeholder-img">
                            <img src="/assets/powergate/Rectangle 2887.png" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
                        </div>
                        <div className="img-overlap-2 placeholder-img"></div>
                    </div>
                    <div className="impact-content">
                        <div className="section-label">About Us</div>
                        <h2 className="impact-title ngo-serif">Your Support Is Really Powerful.</h2>
                        <p className="impact-desc">The secret to happiness lies in helping others. Never underestimate the difference you can make in the lives of others with your small support.</p>
                        <a href="#read" className="btn-donate-now">Read More</a>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="ngo-mission">
                    <div className="mission-content">
                        <div className="section-label">Welcome To Charity</div>
                        <h2 className="mission-title ngo-serif">Let Us Come Together <br />To Make A Difference</h2>
                        <p className="impact-desc" style={{ maxWidth: '90%' }}>We are a non-profit organization that provides help to people who need help. We work in different areas to improve the quality of life.</p>

                        <div className="mission-grid">
                            <div className="mission-card">
                                <div className="mission-icon">
                                    <img src="/assets/powergate/Group 3175.png" alt="Mission" style={{ width: '24px' }} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Our Mission</h4>
                                    <p style={{ fontSize: '0.85rem' }}>To provide help for people who are in need of it.</p>
                                </div>
                            </div>
                            <div className="mission-card">
                                <div className="mission-icon">
                                    <img src="/assets/powergate/Group 3180.png" alt="Vision" style={{ width: '24px' }} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Our Vision</h4>
                                    <p style={{ fontSize: '0.85rem' }}>To make the world a better place for everyone.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mission-progress">
                            <div className="progress-item">
                                <div className="progress-info">
                                    <span>Donation</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="progress-item">
                                <div className="progress-info">
                                    <span>Medical Help</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '90%', background: '#F59E0B' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mission-image-area">
                        <div className="mission-main-img-box placeholder-img"></div>
                        <div className="mission-features">
                            <ul className="feature-list">
                                <li style={{ color: '#2D6A4F' }}><Check className="feature-check" size={16} /> Together we can help more</li>
                                <li><Check className="feature-check" size={16} /> Help children for education</li>
                                <li><Check className="feature-check" size={16} /> Provide medical help</li>
                                <li><Check className="feature-check" size={16} /> Food and water for everyone</li>
                                <li><Check className="feature-check" size={16} /> Clean and safe environment</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Causes Section */}
                <section className="ngo-causes" id="causes" style={{ padding: '4rem 0' }}>
                    <div className="causes-header">
                        <div>
                            <div className="section-label">Latest Causes</div>
                            <h2 className="causes-title ngo-serif">Find The Popular Cause <br />And Donate Them</h2>
                        </div>
                        <div className="causes-nav">
                            <div className="nav-btn"><ChevronLeft size={20} /></div>
                            <div className="nav-btn"><ChevronRight size={20} /></div>
                        </div>
                    </div>

                    <div className="causes-grid">
                        {[
                            { title: "Donate For Poor Peoples Treatment And Medicine.", goal: "1,000", raised: "600", cat: "Medical", perc: "60%" },
                            { title: "Education For Poor Children", goal: "5,000", raised: "3,200", cat: "Education", perc: "64%" },
                            { title: "Medicines For Elderly People", goal: "7,000", raised: "5,800", cat: "Medical", perc: "82%" },
                            { title: "Pure Water For African Children", goal: "4,000", raised: "2,500", cat: "Water", perc: "62%" }
                        ].map((cause, i) => (
                            <div key={i} className="cause-card">
                                <div className="cause-img placeholder-img" style={{ height: '200px' }}></div>
                                <div className="cause-body">
                                    <span className="cause-tag">{cause.cat}</span>
                                    <h3 className="cause-card-title">{cause.title}</h3>
                                    <p className="cause-description">Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy....</p>

                                    <div className="cause-progress-section">
                                        <div className="cause-progress-header">
                                            <span>Donatone</span>
                                            <span>{cause.perc}</span>
                                        </div>
                                        <div className="progress-bar-container">
                                            <div className="progress-bar-fill" style={{ width: cause.perc }}></div>
                                        </div>
                                    </div>

                                    <div className="cause-stats-row">
                                        <span>Raised: ${cause.raised}</span>
                                        <span>Goal: ${cause.goal}</span>
                                    </div>

                                    <a href="#donate" className="btn-donate-now">Donate Now</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Testimonial Section */}
            <section className="ngo-testimonials">
                <div className="ngo-content-wrapper">
                    <div className="test-label">Testimonials</div>
                    <h2 className="test-title ngo-serif" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>What People Say</h2>
                    <div className="test-content">
                        <img src="/assets/powergate/left-quotes-sign 1.png" alt="quote" style={{ width: '32px', marginBottom: '1.5rem', opacity: 0.5 }} />
                        <p className="test-quote" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>"The charity has done an amazing job in helping our community. They provided us with food and water when we needed it the most. I am so grateful for their support and dedication."</p>
                        <div className="test-user">
                            <div className="user-img-container" style={{ position: 'relative' }}>
                                <img src="/assets/powergate/Group 3265.png" alt="User" className="user-img" style={{ border: 'none' }} />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>Cameron Williamson</h4>
                                <p style={{ color: 'var(--accent-green)', fontSize: '0.85rem' }}>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ngo-content-wrapper">
                {/* Stats Section */}
                <section className="ngo-stats" style={{ padding: '6rem 0' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>Our Fun Facts</div>
                    <h2 className="impact-title ngo-serif" style={{ fontSize: '3rem', textAlign: 'center' }}>We Believe That We Can Save <br />More Lifes With You</h2>

                    <div className="stats-grid">
                        {[
                            { icon: <Heart size={28} />, num: "4597+", label: "People Rised" },
                            { icon: <User size={28} />, num: "8945+", label: "Volunteer" },
                            { icon: <img src="/assets/powergate/Group 3181.png" alt="stat" style={{ width: '28px' }} />, num: "10M+", label: "Poor People Saved" },
                            { icon: <Heart size={28} />, num: "100+", label: "Country Member" }
                        ].map((stat, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-icon-container">
                                    <div className="stat-ring"></div>
                                    <div className="stat-icon-inner">{stat.icon}</div>
                                </div>
                                <div className="stat-number">{stat.num}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Articles Section */}
                <section className="ngo-articles" id="blog" style={{ padding: '4rem 0' }}>
                    <div className="causes-header">
                        <div>
                            <div className="section-label">Latest News</div>
                            <h2 className="causes-title ngo-serif">Article You May Read</h2>
                        </div>
                        <div className="causes-nav">
                            <div className="nav-btn"><ChevronLeft size={20} /></div>
                            <div className="nav-btn"><ChevronRight size={20} /></div>
                        </div>
                    </div>

                    <div className="article-grid">
                        {[
                            { title: "Charity, Expectations Vs. Reality", author: "Esther Howard", date: "12 Sep 2021" },
                            { title: "Helping People Is Our Goal", author: "Admin", date: "Jan 20, 2024" },
                            { title: "Join Us And Help Others", author: "User", date: "Jan 22, 2024" }
                        ].map((art, i) => (
                            <div key={i} className="article-card">
                                <div className="cause-img placeholder-img" style={{ height: '220px' }}></div>
                                <div className="cause-body">
                                    <div className="article-meta">
                                        <span><User size={16} /> {art.author}</span>
                                        <span><Calendar size={16} /> {art.date}</span>
                                    </div>
                                    <h3 className="article-title">{art.title}</h3>
                                    <p className="cause-description">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua.....</p>
                                    <a href="#read" className="btn-read-more-block">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Logos Section */}
                <div className="ngo-logos" style={{ border: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>
                        <div style={{ width: '40px', height: '40px', background: '#333', transform: 'rotate(45deg)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '20px', height: '20px', background: '#FFF', borderRadius: '2px' }}></div>
                        </div>
                        Logotype
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>
                        <img src="/assets/powergate/Group 3175.png" alt="renew" style={{ width: '30px' }} />
                        renew toxicology
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>
                        <img src="/assets/powergate/Group 3181.png" alt="globe" style={{ width: '30px' }} />
                        Globe international
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>
                        <User size={30} />
                        Action for charity
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="ngo-footer">
                <div className="ngo-content-wrapper">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <div className="footer-brand-logo">
                                <Heart className="logo-accent" fill="currentColor" /> Give Life
                            </div>
                            <div className="footer-brand-text">
                                <h3>10k</h3>
                                <p>Worldwide Client <br />Already Connected</p>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h5>Quick Link</h5>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Blog Post</a></li>
                                <li><a href="#">Photo Gallery</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5>Get In Touch</h5>
                            <ul className="footer-links">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Our Services</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5>Address</h5>
                            <p className="address-text">2464 Royal Ln. Mesa, New <br />Jersey 45463</p>
                        </div>

                        <div className="footer-col">
                            <div className="newsletter-box">
                                <h5>Newsletter</h5>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Enter Your Email" />
                                    <button className="btn-subscribe">Subscribe</button>
                                </div>
                                <p className="newsletter-hint">Your email is safe with us,we don't spam.</p>
                            </div>
                            <div className="follow-box">
                                <h6>Follow Me</h6>
                                <div className="social-links">
                                    <a href="#" className="social-icon"><Twitter size={18} /></a>
                                    <a href="#" className="social-icon"><Instagram size={18} /></a>
                                    <a href="#" className="social-icon"><Facebook size={18} /></a>
                                    <a href="#" className="social-icon"><Youtube size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        Designed By Themefisher Developed By Gethugothemes
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NGOLandingPage;
