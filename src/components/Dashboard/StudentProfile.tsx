import React from 'react';
import './StudentProfile.css';

const StudentProfile: React.FC = () => {
    return (
        <div className="profile-container">
            <div className="profile-header-section">
                <div className="profile-banner"></div>
                <div className="profile-info-card">
                    <div className="profile-avatar-large">A</div>
                    <div className="profile-main-info">
                        <h2>Amogelang Thalefang</h2>
                        <p className="student-id">Student ID: BU202400123</p>
                        <span className="status-badge">Active</span>
                    </div>
                </div>
            </div>

            <div className="profile-details-grid">
                <div className="detail-card">
                    <h3>Personal Information</h3>
                    <div className="detail-row">
                        <span className="label">Full Name:</span>
                        <span className="value">Amogelang Thalefang</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Email:</span>
                        <span className="value">amogelang@bothouniversity.ac.bw</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Phone:</span>
                        <span className="value">+267 75 536 733</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Date of Birth:</span>
                        <span className="value">12 May 2002</span>
                    </div>
                </div>

                <div className="detail-card">
                    <h3>Academic Information</h3>
                    <div className="detail-row">
                        <span className="label">Program:</span>
                        <span className="value">BSc in Computing</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Faculty:</span>
                        <span className="value">Faculty of Engineering & Technology</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Year of Study:</span>
                        <span className="value">Year 3</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Semester:</span>
                        <span className="value">Semester 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
