import React from 'react';
import './GlobalPopups.css';

interface EnquiryPopupProps {
    onClose: () => void;
}

const EnquiryPopup: React.FC<EnquiryPopupProps> = ({ onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z" />
                    </svg>
                </button>

                <div className="enquiry-popup">
                    <h2>Project Enquiry</h2>
                    <p>Tell us about your requirements and our technical team will get back to you within 24 hours.</p>

                    <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="enquiry-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>

                        <div className="enquiry-group">
                            <label>Company</label>
                            <input type="text" placeholder="Enterprise Ltd" />
                        </div>

                        <div className="enquiry-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="enquiry-group">
                            <label>Service Type</label>
                            <select>
                                <option>Electrical Engineering</option>
                                <option>Mechanical Services</option>
                                <option>ICT Foundations</option>
                                <option>Supplies</option>
                            </select>
                        </div>

                        <div className="enquiry-group full">
                            <label>Description of Requirements</label>
                            <textarea rows={4} placeholder="Describe your project here..."></textarea>
                        </div>

                        <button type="submit" className="enquiry-submit" onClick={onClose}>
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;
