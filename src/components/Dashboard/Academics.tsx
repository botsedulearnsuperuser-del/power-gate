import React, { useState } from 'react';
import './Academics.css';
import { ChevronDown } from 'lucide-react';

const OverviewIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 17.8v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.3q0 .2.075.375t.225.325l1.525 1.525q.15.15.35.15t.35-.15t.15-.35t-.15-.35zM18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.45q0 .45-.375.7t-.8.1q-.425-.125-.888-.188T18 11q-.275 0-.513.013t-.487.062q-.225-.05-.5-.062T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13h5.125q-.45.425-.812.925T11.675 15H8q-.425 0-.712.288T7 16t.288.713T8 17h3.075q-.05.25-.062.488T11 18q0 .5.05.95t.175.875t-.125.8t-.675.375z" /></svg>
);

const ResultsIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100"><path fill="currentColor" d="M92.11 21.929c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H44.465v.014a1.76 1.76 0 0 0-1.751 1.752h-.001v6.342c-.001.03-.009.057-.009.087c0 .972.788 1.76 1.761 1.761h45.878l.006.001c.973 0 1.761-.789 1.761-1.761zm0 14.901c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H44.465v.014a1.76 1.76 0 0 0-1.751 1.752h-.001v6.343c-.001.03-.009.057-.009.087c0 .972.788 1.76 1.761 1.761h45.878v-.001l.006.001c.973 0 1.761-.789 1.761-1.761zM32.748 21.925a1.76 1.76 0 0 0-1.761-1.761c-.043 0-.084.01-.126.013H9.777c-.042-.003-.083-.013-.126-.013c-.973 0-1.761.789-1.761 1.761V43.26c0 .972.788 1.761 1.761 1.761h21.336c.973 0 1.761-.789 1.761-1.761zM92.11 56.744c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H44.465v.014a1.76 1.76 0 0 0-1.751 1.752h-.001v6.343c-.001.03-.009.057-.009.087c0 .972.788 1.761 1.761 1.761h45.878v-.001l.006.001c.973 0 1.761-.789 1.761-1.761zm0 14.901c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H44.465v.014a1.76 1.76 0 0 0-1.751 1.752h-.001v6.342c-.001.03-.009.057-.009.087c0 .972.788 1.761 1.761 1.761h45.878v-.001l.006.001c.973 0 1.761-.789 1.761-1.761zM32.748 56.74c0-.973-.788-1.762-1.761-1.762c-.043 0-.084.01-.126.013H9.777c-.042-.003-.083-.013-.126-.013c-.973 0-1.761.789-1.761 1.762v21.335c0 .972.789 1.761 1.761 1.761h21.336c.973 0 1.761-.789 1.761-1.761z" /></svg>
);

const RegistrationIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64"><path fill="currentColor" d="M30.694 32.174c-1.168 1.088-10.529 10.17-10.529 10.17l2.499 2.464s8.317-7.676 9.566-8.837c.309-.286.832-.831 1.799-.831h28.365v-3.928H33.043c-.858.001-1.671.337-2.349.961zm16.805-21.351c3.326 0 5.141-2.303 5.141-5.141a5.14 5.14 0 1 0-5.141 5.141m-7.622 8.834h1.724l-2.526 9.075h16.85l-2.528-9.075h1.724l2.622 9.075h4.454l-3.58-12.042c-.473-1.663-2.576-4.609-6.217-4.609h-9.802c-3.639 0-5.74 2.946-6.217 4.609l-3.575 12.042h4.454zm-14.574 8.599l-4.525-8.437s-.266-.402-.759-.163c-.443.214-.243.713-.243.713l1.501 2.865l.934 1.785l-1.077-.485c-1.908-.86-2.96-1.227-3.382-1.416c-.075-.035-.445-.238-.621-.625c-.5-1.118-2.635-6.522-3.114-7.717c-.405-1.011-1.404-2.447-3.457-2.955c-2.337-.578-4.693.896-5.249 3.241L2.122 28.503c-.284 1.084-.772 4.016-.772 5.252l.021 26.254C1.387 62.224 2.986 64.01 5.199 64c2.21-.007 3.723-1.808 3.716-4.02L8.91 37.738l3.401-14.355c.397.971.889 2.154 1.05 2.438c.383.67.761 1.131 1.533 1.494c0 0 4.451 1.842 6.174 2.628a2.47 2.47 0 0 0 2.821-.782l.238-.493l.082.157s.507.893 1.256.934c.215-.681-.161-1.503-.161-1.503zm-6.88-22.618a5.141 5.141 0 1 1-10.283 0a5.142 5.142 0 0 1 10.283 0" /><path fill="currentColor" d="m20.739 39.187l10.018-9.324l-1.302-1.397l-10.018 9.325z" /></svg>
);

const ScheduleIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M7 1v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7.755A8 8 0 0 1 22 9.755V4a1 1 0 0 0-1-1h-4V1h-2v2H9V1zm16 15a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7-4v4.414l2.293 2.293l1.414-1.414L18 15.586V12z" /></svg>
);

const TranscriptIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m13-5a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zm-2 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-9-5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" /><path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd" /></g></svg>
);

const Academics: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSummaryOpen, setIsSummaryOpen] = useState(true);
    const [showTranscriptModal, setShowTranscriptModal] = useState(false);
    const [showTranscriptPreview, setShowTranscriptPreview] = useState(false);
    const [requestSubmitted, setRequestSubmitted] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState('digital');

    const modules = [
        { code: 'COMP601', name: 'Software Engineering', grade: 'A', status: 'Completed' },
        { code: 'COMP602', name: 'Database Management Systems', grade: 'B+', status: 'Completed' },
        { code: 'COMP603', name: 'Network Security', grade: 'A-', status: 'Completed' },
        { code: 'COMP701', name: 'Artificial Intelligence', grade: '-', status: 'In Progress' },
        { code: 'COMP702', name: 'Cloud Computing', grade: '-', status: 'In Progress' },
    ];

    const results = [
        { semester: 'Semester 1 2023', gpa: '3.90', status: 'Passed' },
        { semester: 'Semester 2 2023', gpa: '3.80', status: 'Passed' },
    ];

    const schedule = [
        { day: 'Monday', time: '08:00 - 10:00', module: 'Software Engineering', room: 'Lab 4' },
        { day: 'Monday', time: '11:00 - 13:00', module: 'Network Security', room: 'Lab 2' },
        { day: 'Tuesday', time: '10:00 - 12:00', module: 'Database Systems', room: 'Hall B' },
        { day: 'Tuesday', time: '14:00 - 16:00', module: 'Web Development', room: 'Lab 1' },
        { day: 'Wednesday', time: '09:00 - 11:00', module: 'Artificial Intelligence', room: 'Hall A' },
        { day: 'Wednesday', time: '14:00 - 16:00', module: 'Cloud Computing', room: 'Room 102' },
        { day: 'Thursday', time: '08:00 - 10:00', module: 'Mobile App Dev', room: 'Lab 4' },
        { day: 'Thursday', time: '13:00 - 15:00', module: 'Discrete Math', room: 'Room 205' },
        { day: 'Friday', time: '10:00 - 12:00', module: 'Project Management', room: 'Hall C' },
    ];

    const timeSlots = [
        '08:00 - 10:00',
        '10:00 - 12:00',
        '12:00 - 14:00',
        '14:00 - 16:00',
    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'results':
                return (
                    <div className="tab-content-card animate-fade-in">
                        <h3>Semester Results</h3>
                        <div className="results-grid">
                            {results.map((r, i) => (
                                <div className="result-item" key={i}>
                                    <div className="res-header">
                                        <h4>{r.semester}</h4>
                                        <span className="status-badge-green">{r.status}</span>
                                    </div>
                                    <div className="res-details">
                                        <span>GPA: <strong>{r.gpa}</strong></span>
                                        <button className="text-btn">View Detailed Grades</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'schedule':
                return (
                    <div className="tab-content-card animate-fade-in">
                        <h3>Weekly Class Schedule</h3>
                        <div className="calendar-grid-wrapper">
                            <div className="calendar-grid">
                                <div className="time-col">
                                    <div className="day-header-cell">Time</div>
                                    {timeSlots.map(slot => (
                                        <div className="time-cell" key={slot}>{slot}</div>
                                    ))}
                                </div>
                                {days.map(day => (
                                    <div className="day-col" key={day}>
                                        <div className="day-header-cell">{day}</div>
                                        {timeSlots.map(slot => {
                                            const classInfo = schedule.find(s => s.day === day && s.time === slot);
                                            return (
                                                <div className="class-cell" key={`${day}-${slot}`}>
                                                    {classInfo ? (
                                                        <div className="class-block">
                                                            <div className="class-name">{classInfo.module}</div>
                                                            <div className="class-room">{classInfo.room}</div>
                                                        </div>
                                                    ) : (
                                                        <div className="empty-cell"></div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'registration':
                return (
                    <div className="tab-content-card animate-fade-in">
                        <h3>Semester Registration</h3>
                        <div className="registration-status">
                            <div className="status-info">
                                <p>Next Semester: <strong>Semester 2 2024</strong></p>
                                <p>Registration Status: <span className="text-red">Not Started</span></p>
                            </div>
                            <button className="pay-now-btn" style={{ width: 'auto' }}>Open Registration Portal</button>
                        </div>
                    </div>
                );
            case 'transcript':
                return (
                    <div className="tab-content-card animate-fade-in">
                        <h3>Academic Transcript</h3>
                        <div className="transcript-box">
                            <p>Download your official or unofficial academic transcript.</p>
                            <div className="transcript-actions">
                                <button
                                    className="action-btn-outline"
                                    onClick={() => setShowTranscriptPreview(true)}
                                >
                                    Download Unofficial (PDF)
                                </button>
                                <button
                                    className="action-btn-red"
                                    style={{ background: '#A80000', color: 'white' }}
                                    onClick={() => setShowTranscriptModal(true)}
                                >
                                    Request Official Transcript
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'overview':
            default:
                return (
                    <div className="modules-section animate-fade-in">
                        <h3>Current & Past Modules</h3>
                        <div className="modules-table-wrapper">
                            <table className="modules-table">
                                <thead>
                                    <tr>
                                        <th>Module Code</th>
                                        <th>Module Name</th>
                                        <th>Grade</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modules.map((m, i) => (
                                        <tr key={i}>
                                            <td className="m-code">{m.code}</td>
                                            <td>{m.name}</td>
                                            <td className="m-grade">{m.grade}</td>
                                            <td>
                                                <span className={`status-pill ${m.status.toLowerCase().replace(' ', '-')}`}>
                                                    {m.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
        }
    };

    const handleTranscriptSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRequestSubmitted(true);
        setTimeout(() => {
            setShowTranscriptModal(false);
            setRequestSubmitted(false);
        }, 3000);
    };

    return (
        <div className="academics-container">
            {/* Header Dropdown for GPA and Credits */}
            <div className={`academics-dropdown-header ${isSummaryOpen ? 'expanded' : ''}`}>
                <div className="dropdown-trigger" onClick={() => setIsSummaryOpen(!isSummaryOpen)}>
                    <span>Academic Summary Detail</span>
                    <ChevronDown size={20} className={isSummaryOpen ? 'rotate-180' : ''} />
                </div>

                {isSummaryOpen && (
                    <div className="academics-summary">
                        <div className="summary-card">
                            <span className="summary-label">Current GPA</span>
                            <span className="summary-value">3.85</span>
                        </div>
                        <div className="summary-card">
                            <span className="summary-label">Credits Earned</span>
                            <span className="summary-value">120 / 360</span>
                        </div>
                        <div className="summary-card">
                            <span className="summary-label">Academic Level</span>
                            <span className="summary-value">Undergraduate</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="academic-tabs">
                <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                    <OverviewIcon /> Overview
                </button>
                <button className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`} onClick={() => setActiveTab('results')}>
                    <ResultsIcon /> Results
                </button>
                <button className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>
                    <ScheduleIcon /> Schedule
                </button>
                <button className={`tab-btn ${activeTab === 'registration' ? 'active' : ''}`} onClick={() => setActiveTab('registration')}>
                    <RegistrationIcon /> Registration
                </button>
                <button className={`tab-btn ${activeTab === 'transcript' ? 'active' : ''}`} onClick={() => setActiveTab('transcript')}>
                    <TranscriptIcon /> Transcript
                </button>
            </div>

            <div className="academic-main-content">
                {renderTabContent()}
            </div>

            {/* Unofficial Transcript Preview */}
            {showTranscriptPreview && (
                <div className="modal-overlay">
                    <div className="modal-content transcript-preview-modal animate-fade-in">
                        <div className="modal-header">
                            <h3>Unofficial Academic Transcript</h3>
                            <div className="modal-header-actions">
                                <button className="action-btn-red" onClick={() => window.print()} style={{ marginRight: '1rem', background: '#A80000' }}>Print / Save PDF</button>
                                <button className="close-modal-btn" onClick={() => setShowTranscriptPreview(false)}>×</button>
                            </div>
                        </div>
                        <div className="transcript-document">
                            <div className="transcript-header">
                                <div className="uni-info">
                                    <h2>BOTHO UNIVERSITY</h2>
                                    <p>Office of the Registrar</p>
                                    <p>Gaborone Campus, Botswana</p>
                                </div>
                                <div className="student-transcript-info">
                                    <p><strong>Student Name:</strong> Amogelang Thalefang</p>
                                    <p><strong>Student ID:</strong> 2100845</p>
                                    <p><strong>Programme:</strong> BSc in Computing</p>
                                    <p><strong>Level:</strong> Undergraduate</p>
                                </div>
                            </div>

                            <div className="transcript-body">
                                <table className="transcript-data-table">
                                    <thead>
                                        <tr>
                                            <th>Module Code</th>
                                            <th>Module Title</th>
                                            <th>Credits</th>
                                            <th>Grade</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {modules.map((m, i) => (
                                            <tr key={i}>
                                                <td>{m.code}</td>
                                                <td>{m.name}</td>
                                                <td>12</td>
                                                <td>{m.grade}</td>
                                                <td>{m.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="transcript-summary">
                                <div className="summary-row">
                                    <span>Total Credits Earned:</span>
                                    <strong>120</strong>
                                </div>
                                <div className="summary-row">
                                    <span>Cumulative GPA:</span>
                                    <strong>3.85</strong>
                                </div>
                                <div className="summary-row">
                                    <span>Academic Standing:</span>
                                    <strong className="text-green">Good Standing</strong>
                                </div>
                            </div>

                            <div className="transcript-footer">
                                <p>*** END OF UNOFFICIAL TRANSCRIPT ***</p>
                                <p>Date Generated: {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Transcript Request Modal */}
            {showTranscriptModal && (
                <div className="modal-overlay">
                    <div className="modal-content animate-fade-in">
                        {!requestSubmitted ? (
                            <>
                                <div className="modal-header">
                                    <h3>Request Official Transcript</h3>
                                    <button className="close-modal-btn" onClick={() => setShowTranscriptModal(false)}>×</button>
                                </div>
                                <form onSubmit={handleTranscriptSubmit} className="transcript-form">
                                    <div className="form-group">
                                        <label>Delivery Method</label>
                                        <select
                                            value={deliveryMethod}
                                            onChange={(e) => setDeliveryMethod(e.target.value)}
                                            className="modal-select"
                                        >
                                            <option value="digital">Digital (Email)</option>
                                            <option value="pickup">Physical Pickup (Campus)</option>
                                            <option value="courier">Courier Service</option>
                                        </select>
                                    </div>

                                    {deliveryMethod === 'digital' && (
                                        <div className="form-group">
                                            <label>Recipient Email</label>
                                            <input type="email" placeholder="e.g. admissions@university.com" required className="modal-input" />
                                        </div>
                                    )}

                                    {(deliveryMethod === 'courier' || deliveryMethod === 'pickup') && (
                                        <div className="form-group">
                                            <label>Postal/Delivery Address</label>
                                            <textarea placeholder="Enter full delivery address" required className="modal-textarea"></textarea>
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label>Purpose of Request</label>
                                        <textarea placeholder="e.g. Job Application, Further Studies" className="modal-textarea"></textarea>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="action-btn-outline" onClick={() => setShowTranscriptModal(false)}>Cancel</button>
                                        <button type="submit" className="action-btn-red" style={{ background: '#A80000', color: 'white' }}>Submit Request</button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="modal-success">
                                <div className="success-icon">✓</div>
                                <h3>Request Sent!</h3>
                                <p>Your official transcript request has been submitted successfully. You will receive an update once it has been processed.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Academics;
