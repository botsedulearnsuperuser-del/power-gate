import React, { useState } from 'react';
import './KindergartenLandingPage.css';
import {
  Search,
  User,
  PhoneCall,
  ArrowRight,
  Star,
  Clock,
  Calendar,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  Play,
  Plus,
  Minus
} from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" /></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1046.16 1000"><path fill="currentColor" d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z" /></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12"><path fill="currentColor" d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M3.94 7.94l-2 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.63.63 0 0 1 0-.88l2-2c.24-.24.64-.24.88 0c.25.24.25.64 0 .88m7 2c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2-2a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0l2 2c.25.24.25.64 0 .88m0-7L6.8 7.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 2.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.12l4.06-4.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88" /></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a5 5 0 0 0-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 0 0-5-5m0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg>
);

const PhoneInfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5M19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6" /></svg>
);

const ExperienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z" /></svg>
);

const AdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480" /></svg>
);

const DateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 1h2v1H6zm10 0h2v1h-2zm6 4V4h-3V2h-1v5h-2V2h-1v2H9V2H8v5H6V2H5v2H2v1H1v17h1v1h20v-1h1V5zm-1 3v3h-3V8zm0 8h-3v-3h3zm0 5h-3v-3h3zM3 18h3v3H3zm0-5h3v3H3zm13 3h-3v-3h3zm-5 0H8v-3h3zm-3 2h3v3H8zm5 0h3v3h-3zm3-7h-3V8h3zm-5-3v3H8V8zm-5 3H3V8h3z" /></svg>
);

const NavSearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11 2a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2m-6 9a6 6 0 1 1 12 0a6 6 0 0 1-12 0" clipRule="evenodd" /></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M19.495 3.133a1 1 0 0 1 1.352.309l.99 1.51a1 1 0 0 1-.155 1.279l-.003.004l-.014.013l-.057.053l-.225.215a84 84 0 0 0-3.62 3.736c-2.197 2.416-4.806 5.578-6.562 8.646c-.49.856-1.687 1.04-2.397.301l-6.485-6.738a1 1 0 0 1 .051-1.436l1.96-1.768A1 1 0 0 1 5.6 9.2l3.309 2.481c5.169-5.097 8.1-7.053 10.586-8.548" /></g></svg>
);

const IndividualPlansIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 9c3.85 0 7 2.5 7 4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5C1 11.5 4.15 9 8 9m0-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7" /></svg>
);

const SmallGroupsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="9" r="4" fill="currentColor" /><circle cx="17" cy="9" r="3" fill="currentColor" /><circle cx="7" cy="9" r="3" fill="currentColor" /><path fill="currentColor" fillRule="evenodd" d="M17.569 18h2.326c.592 0 1.045-.51.902-1.084C20.428 15.446 19.448 13 17 13c-.886 0-1.58.32-2.122.8c1.508.977 2.287 2.69 2.69 4.2m-8.446-4.2A3.1 3.1 0 0 0 7 13c-2.448 0-3.428 2.446-3.797 3.916c-.143.574.31 1.084.902 1.084h2.327c.403-1.51 1.182-3.223 2.69-4.2" clipRule="evenodd" /><path fill="currentColor" d="M12 14c3.709 0 4.666 3.301 4.914 5.006c.08.547-.362.994-.914.994H8c-.552 0-.993-.447-.914-.994C7.334 17.301 8.291 14 12 14" /></svg>
);

const ConfidenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12q0 .47-.34.82t-.86.37H13l-1.75-.67l-.33.94L13 17zM16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984z" /></svg>
);

const CreativityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 640 512"><path fill="currentColor" d="M320 0a40 40 0 1 1 0 80a40 40 0 1 1 0-80m44.7 164.3l11.1 88.7c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8l-19.8 16.8c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6c18.9-16 42.9-24.8 67.6-24.8s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v160.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2l-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32l15.2 15.2l25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48h-66.7c-17 0-33.3-6.7-45.3-18.7l-99.8-99.9C10.1 375.4 0 351 0 325.5V104c0-22.1 17.9-40 40-40m560 0c22.1 0 40 17.9 40 40v221.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48v-78.9c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3l15.2-15.2l32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32l-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V104c0-22.1 17.9-40 40-40z" /></svg>
);

const KindergartenLandingPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Individualised learning plans",
      content: "We believe every child learns differently and deserves an environment where they feel supported, encouraged, and inspired. Our learning model focuses on creating plans tailored to each child's needs."
    },
    {
      title: "Small group learning",
      content: "Our small group model allows us to provide focused attention to each child. We work closely with families to ensure each learner receives the guidance they need to grow academically, socially, and emotionally."
    },
    {
      title: "Building confidence and curiosity",
      content: "We provide an environment where children feel supported to explore, discover, and build a strong foundation for lifelong learning."
    }
  ];

  return (
    <div className="kindergarten-page">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-left">
              <span><MapPinIcon /> Independence Ave & Ext 9, Gaborone</span>
              <span><MailIcon /> info@redtabletutoring.co.bw</span>
            </div>
            <div className="banner-right">
              <div className="social-links">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </div>
              <button className="waitlist-btn">Join Waitlist</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <div className="logo-icon">
                <img src="/assets/kindergatern/redtablelogo.png" alt="RED Table Tutoring BW Logo" />
              </div>
            </div>

            <ul className="nav-links">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <div className="nav-actions">
              <button className="icon-btn focus:outline-none"><NavSearchIcon /></button>
              <button className="icon-btn focus:outline-none"><AdminIcon /></button>
              <div className="contact-info">
                <div className="phone-icon">
                  <PhoneInfoIcon />
                </div>
                <div className="phone-text">
                  <span>Call Us</span>
                  <strong>+267 75 213 037</strong>
                </div>
              </div>
              <button className="admission-btn">Enroll Now</button>
            </div>

            <button className="mobile-menu-btn">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Personalised Learning Support</span>
            <h1>Together We'll <span>Explore</span> New Things</h1>
            <p>RED Table Tutoring BW is an early childhood learning and tutoring centre based in Gaborone, Botswana. We provide personalised support designed to help children build strong foundations.</p>
            <div className="hero-btns">
              <button className="primary-btn">Join Us Now <ArrowRight size={18} /></button>
              <button className="video-btn">
                <div className="play-icon"><Play fill="currentColor" size={14} /></div>
                Our Approach
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/assets/kindergatern/img.png" alt="Happy child" />
              <div className="floating-shape shape-star">
                <img src="/assets/kindergatern/shape.png" alt="" />
              </div>
              <div className="floating-shape shape-boy">
                <img src="/assets/kindergatern/shape (1).png" alt="" />
              </div>
              <div className="floating-shape shape-cloud-1">
                <img src="/assets/kindergatern/shape (2).png" alt="" />
              </div>
            </div>
            {/* Background decorative shapes */}
            <div className="hero-bg-shapes">
              <img src="/assets/kindergatern/Vector (7).png" className="vector-sun" alt="" />
              <img src="/assets/kindergatern/h5_features_shape01.9dc3e5ea.svg fill.png" className="vector-green" alt="" />
            </div>
          </div>
        </div>
        <div className="section-wave bottom">
          <svg viewBox="0 0 1440 100" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 V100 H0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header text-center">
            <div className="floating-icon">
              <img src="/assets/kindergatern/shape (4).png" alt="" />
            </div>
            <h2>Our approach blends structured academic development with hands-on, creative activities.</h2>
            <p>We work closely with families to ensure each learner receives the guidance they need to grow academically, socially, and emotionally.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card color-purple blob-1">
              <div className="feature-icon">
                <IndividualPlansIcon />
              </div>
              <h3>Individualised Plans</h3>
              <p>Supporting each child's unique learning journey with tailored academic plans.</p>
              <button className="read-more">Read More <ArrowRight size={16} /></button>
            </div>
            <div className="feature-card color-yellow blob-2">
              <div className="feature-icon">
                <SmallGroupsIcon />
              </div>
              <h3>Small Groups</h3>
              <p>Better attention and support for every learner in our small group sessions.</p>
              <button className="read-more">Read More <ArrowRight size={16} /></button>
            </div>
            <div className="feature-card color-pink blob-3">
              <div className="feature-icon">
                <ConfidenceIcon />
              </div>
              <h3>Build Confidence</h3>
              <p>Developing listening, communication, and social skills in a supportive space.</p>
              <button className="read-more">Read More <ArrowRight size={16} /></button>
            </div>
            <div className="feature-card color-green blob-4">
              <div className="feature-icon">
                <CreativityIcon />
              </div>
              <h3>Encourage Creativity</h3>
              <p>Combining hands-on activities with academic development for holistic growth.</p>
              <button className="read-more">Read More <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="main-img blob-mask">
                <img src="/assets/kindergatern/img (1).png" alt="Children in classroom" />
              </div>
              <div className="about-shapes">
                <img src="/assets/kindergatern/h5_about_img_shape03.f354a03f.svg fill.png" alt="" className="shape-flower" />
                <img src="/assets/kindergatern/Vector (7).png" alt="" className="shape-sun" />
              </div>
            </div>
            <div className="about-content">
              <span className="badge">About Us</span>
              <h2>Our Passion for Childhood, And We're at RED Table BW</h2>
              <p>RED Table Tutoring BW was established to support children through quality, child-centred education. We believe every child learns differently and deserves an environment where they feel supported.</p>
              <ul className="about-list">
                <li><div className="check"><CheckIcon /></div> Preparation for Big School</li>
                <li><div className="check"><CheckIcon /></div> Homeschooling Support (Std 1–4)</li>
                <li><div className="check"><CheckIcon /></div> Enrichment & Creative Learning</li>
              </ul>
              <div className="about-footer">
                <button className="primary-btn">Learn More</button>
                <div className="phone-contact">
                  <div className="phone-icon-round"><PhoneInfoIcon /></div>
                  <div className="phone-details">
                    <span>Call Us For Info</span>
                    <strong>+267 75 213 037</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="classes">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline mx-auto">Our Programs</span>
            <h2>Get The Best Learning Experiences With Us</h2>
          </div>
          <div className="classes-grid">
            {[
              { img: 'img (2).png', title: 'Grade Preparation', desc: 'Helping young learners transition smoothly into formal schooling.' },
              { img: 'img (3).png', title: 'Homeschooling Support', desc: 'Structured learning plans and individualised support for Standards 1-4.' },
              { img: 'img (4).png', title: 'Creative Learning', desc: 'Hands-on activities and creative projects to strengthen understanding.' },
              { img: 'img (5).png', title: 'Enrichment Programs', desc: 'Play-based activities designed to strengthen engagement and curiosity.' }
            ].map((item, i) => (
              <div key={i} className="class-card">
                <div className="class-image">
                  <img src={`/assets/kindergatern/${item.img}`} alt={item.title} />
                </div>
                <div className="class-info">
                  <div className="rating">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#FF9F43" stroke="none" />)}
                    </div>
                    <span>(4.5 Rating)</span>
                    <span className="price">Enrol</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="class-meta">
                    <span>Age: 3-5 Years</span>
                    <span>Days: Mon-Fri</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/assets/kindergatern/shape (3).png" alt="" className="classes-shape" />
      </section>

      {/* Why Our Schools Section */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <span className="badge">Why Choose Us</span>
              <h2>Why RED Table BW Is The Right Fit For Your Child?</h2>
              <p>We work closely with families to ensure each learner receives the guidance they need to grow academically and socially.</p>

              <div className="accordion">
                {accordionItems.map((item, index) => (
                  <div key={index} className={`accordion-item ${activeAccordion === index ? 'active' : ''}`} onClick={() => setActiveAccordion(index)}>
                    <div className="accordion-header">
                      <h3>{item.title}</h3>
                      {activeAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                    {activeAccordion === index && (
                      <div className="accordion-body">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="why-us-image">
              <div className="blob-image-wrapper">
                <img src="/assets/kindergatern/img (1).png" alt="Children coloring" />
              </div>
              <img src="/assets/kindergatern/h5_features_shape01.9dc3e5ea.svg fill.png" alt="" className="why-shape" />
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge mx-auto">Our Team</span>
            <h2>Meet Our Expert & Smart Instructors</h2>
          </div>
          <div className="instructors-grid">
            {[
              { name: 'Thabo Molosiwa', img: 'img (2).png' },
              { name: 'Lesedi Moiloa', img: 'img (3).png' },
              { name: 'Mpho Sebele', img: 'img (4).png' },
              { name: 'Neo Kgosi', img: 'img (5).png' }
            ].map((instructor, i) => (
              <div key={i} className="instructor-card">
                <div className="instructor-image-box">
                  <img src={`/assets/kindergatern/${instructor.img}`} alt={instructor.name} />
                </div>
                <div className="instructor-info">
                  <h3>{instructor.name}</h3>
                  <span>Lead Instructor</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/assets/kindergatern/shape (5).png" alt="" className="inst-shape-1" />
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-img-box">
              <img src="/assets/kindergatern/img.png" alt="Student" />
            </div>
            <div className="testimonial-text">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="#FF9F43" stroke="none" />)}
              </div>
              <p>"Among the many things that parents should facilitate in their children's life, education is one of the most important. This school provides an exceptional environment for growth."</p>
              <div className="author">
                <h4>Tebogo Letsholo</h4>
                <span>Parent</span>
              </div>
              <div className="quote-icon">
                <img src="/assets/kindergatern/shape (4).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="blog">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge mx-auto">News & Blog</span>
            <h2>Our Latest News Feed</h2>
          </div>
          <div className="blog-grid">
            {[
              { img: 'img (6).png', title: 'Innovative play-based learning at our Amazing platform' },
              { img: 'img (2).png', title: 'Why creative play is the key to childhood development' },
              { img: 'img (3).png', title: 'Top 10 activities to do with your kindergartener at home' }
            ].map((post, i) => (
              <div key={i} className="blog-card">
                <div className="blog-image">
                  <img src={`/assets/kindergatern/${post.img}`} alt={post.title} />
                  <span className="blog-category">Kindergarten</span>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><AdminIcon /> By Admin</span>
                    <span><DateIcon /> Oct 12, 2026</span>
                  </div>
                  <h3>{post.title}</h3>
                  <button className="read-more-btn">Read More <ArrowRight size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-wave top">
          <svg viewBox="0 0 1440 100" fill="#1E1B4B" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C240,0 480,100 720,50 C960,0 1200,100 1440,50 V100 H0 Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo white">
                <img src="/assets/kindergatern/redtablelogo.png" alt="RED Table Tutoring BW Logo" />
              </div>
              <p>RED Table Tutoring BW is an early childhood learning and tutoring centre based in Gaborone. We focus on quality, child-centred education.</p>
              <div className="social-icons">
                <a href="#"><FacebookIcon /></a>
                <a href="#"><TwitterIcon /></a>
                <a href="#"><InstagramIcon /></a>
                <a href="#"><LinkedInIcon /></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Classes</a></li>
                <li><a href="#">Instructors</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Our Programs</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Our Company</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Newsletter Sign Up!</h3>
              <p>Stay updated with our latest news and events for your child's growth.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email here..." />
                <button className="submit-btn"><ArrowRight size={20} /></button>
              </div>
              <div className="footer-decorations">
                <img src="/assets/kindergatern/h5_footer_shape04.ad1e67d5.svg fill.png" alt="" className="rocket" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 RED Table Tutoring BW. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer">Developed by DevGen Technologies</a>
            </div>
          </div>
        </div>
        <img src="/assets/kindergatern/h5_courses_shape03.862f5861.svg fill.png" alt="" className="turtle" />
      </footer>
    </div>
  );
};

export default KindergartenLandingPage;
