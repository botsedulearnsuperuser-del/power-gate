import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './GlobalPopups.css';

interface ProductPopupProps {
    onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/products/rectifierforscrollsectionhero.png',
            title: 'Industrial Rectifiers',
            description: 'New high-efficiency power protection systems now available for industrial deployment.'
        },
        {
            image: '/products/pollariumlithiumbattery.jpg',
            title: 'Lithium Storage',
            description: 'Advanced energy storage solutions with Polarium technology. Smart, scalable, and sustainable.'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z" />
                    </svg>
                </button>

                <div className="product-popup">
                    <div className="popup-slider">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`popup-slide ${currentSlide === index ? 'active' : ''}`}
                            >
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </div>

                    <div className="popup-info">
                        <span className="popup-tag">Special Announcement</span>
                        <h2>{slides[currentSlide].title}</h2>
                        <p>{slides[currentSlide].description}</p>
                        <button className="popup-btn" onClick={onClose}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
