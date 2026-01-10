import React, {
    useState
} from 'react';
import './Dashboard.css';
import logo from '../../assets/BHC LOGO (2).png';

import { Search } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import Settings from './Settings';
import Payments from './Payments';
import StudentProfile from './StudentProfile';
import Academics from './Academics';
import MyFees from './MyFees';

// --- Custom Icon Components from SVGs provided by user ---

const NotificationIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className} style={{ color: '#666' }}>
        <path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Z" />
    </svg>
);

const DashboardIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" className={className}>
        <path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V6H3v5.5A1.5 1.5 0 0 0 4.5 13H6v1H4.5A2.5 2.5 0 0 1 2 11.5zM12.75 7A1.75 1.75 0 0 0 11 8.75V11H8.75A1.75 1.75 0 0 0 7 12.75v1.5c0 .966.784 1.75 1.75 1.75H14a2 2 0 0 0 2-2V8.75A1.75 1.75 0 0 0 14.25 7zM11 12v3H8.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75zm1 3v-3h3v2a1 1 0 0 1-1 1zm0-4V8.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V11z" />
    </svg>
);

const PaymentsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="currentColor" d="M15 21a1.986 1.986 0 0 0 1.934-1.597l.48-2.403h2.836A1.75 1.75 0 0 0 22 15.25V9.261A2.26 2.26 0 0 0 19.75 7v-.004H14.5V5.25A2.25 2.25 0 0 0 12.25 3h-8A2.25 2.25 0 0 0 2 5.25v12.5A3.25 3.25 0 0 0 5.25 21zm2.522-12.182l-2.059 10.291a.486.486 0 0 1-.963-.095V8.496h3.11a2 2 0 0 0-.088.322M5.778 8.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m-.747 7.25a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75m.75-4.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5" />
    </svg>
);

const AcademicsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z" /><path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.881-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0zm.545-4.475a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65c-.395.222-.734.482-.989.868c-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421c.034-.315.093-.47.17-.586c.075-.115.195-.231.471-.387c.292-.164.689-.335 1.292-.593z" /></svg>
);

const MyRequestsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path fill="currentColor" d="M22 22v6H6V4h10V2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6Z" /><path fill="currentColor" d="m29.54 5.76l-3.3-3.3a1.6 1.6 0 0 0-2.24 0l-14 14V22h5.53l14-14a1.6 1.6 0 0 0 0-2.24ZM14.7 20H12v-2.7l9.44-9.45l2.71 2.71ZM25.56 9.15l-2.71-2.71l2.27-2.27l2.71 2.71Z" /></svg>
);

const EventsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm-3.47 8.06l-4.44 4.44l-2.68-2.68l1.06-1.06l1.62 1.62L16.47 10zM3 21h14v2H3a2 2 0 0 1-2-2V9h2z" /></svg>
);

const StudentProfileIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 24" className={className}>
        <path fill="currentColor" d="M18.845 17.295a7.44 7.44 0 0 0-4.089-2.754l-.051-.011l-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033v-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994A7.47 7.47 0 0 0 .67 17.271l-.014.019a4.5 4.5 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.5 4.5 0 0 0-.666-2.221l.011.02zM4.5 5.29c0 2.92 1.82 7.21 5.25 7.21c3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068z" />
    </svg>
);

const FeesIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /><path d="M12 14v4" /><path d="M8 14v4" /><path d="M16 14v4" />
    </svg>
);

const SettingsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path fill="currentColor" d="M7.25 6A3.25 3.25 0 0 0 4 9.25v9.5A3.25 3.25 0 0 0 7.25 22h7.25c0-.687.077-1.357.223-2H7.25C6.56 20 6 19.44 6 18.75v-9.5C6 8.56 6.56 8 7.25 8h17.5c.69 0 1.25.56 1.25 1.25v4.102a9 9 0 0 1 2 .852V9.25A3.25 3.25 0 0 0 24.75 6zM3 24h11.723c.16.701.4 1.372.712 2H3a1 1 0 1 1 0-2m15.843-5.963a1.52 1.52 0 0 1-1.117 1.927l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.893l-.496 1.723a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0-2.737-1.635l-.467-1.513a1.52 1.52 0 0 1 1.117-1.928l1.536-.35a7.5 7.5 0 0 0 .04-3.19l-1.698-.423a1.52 1.52 0 0 1-1.096-1.892l.496-1.724a7.5 7.5 0 0 0-2.75-1.597l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25.5 22a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
    </svg>
);

// --- Stats Widgets Icons ---

const TotalAccountsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="currentColor" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32s.85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.48 2.48 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1" />
    </svg>
);

const CreditsEarnedIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5.473 7.025l-1.414-1.414A5.5 5.5 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025m14.68-6.318l-4 4l-.707.707l-.707-.707l-2.5-2.5l1.414-1.414l1.793 1.793l3.293-3.293z" />
    </svg>
);

const UpcomingExamsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className}>
        <path fill="currentColor" d="M96 113.89L107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.84 100.42l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16M208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8" />
    </svg>
);

const LibraryItemsIcon = ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className}>
        <path fill="currentColor" d="M64 480H48a32 32 0 0 1-32-32V112a32 32 0 0 1 32-32h16a32 32 0 0 1 32 32v336a32 32 0 0 1-32 32m176-304a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v28a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4ZM112 448a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-30a2 2 0 0 0-2-2H114a2 2 0 0 0-2 2Z" /><rect width="128" height="144" x="112" y="240" fill="currentColor" rx="2" ry="2" /><path fill="currentColor" d="M320 480h-32a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v384a32 32 0 0 1-32 32m175.89-34.55l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71-29.17-31.36" />
    </svg>
);


const data = [
    { name: 'Jan', value: 22, color: '#A80000' },
    { name: 'Feb', value: 29, color: '#D1D1D1' },
    { name: 'Mar', value: 22, color: '#D1D1D1' },
    { name: 'Apr', value: 26, color: '#D1D1D1' },
    { name: 'May', value: 29, color: '#D1D1D1' },
    { name: 'Jun', value: 33, color: '#D1D1D1' },
    { name: 'July', value: 37, color: '#D1D1D1' },
    { name: 'Aug', value: 37, color: '#D1D1D1' },
    { name: 'Sep', value: 55, color: '#A1A1A1' },
];

const Dashboard: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const handleMenuClick = (name: string) => {
        setActiveMenu(name);
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    };

    const menuItems = [
        { name: 'Dashboard', icon: <DashboardIcon size={20} /> },
        { name: 'Student Profile', icon: <StudentProfileIcon size={20} /> },
        { name: 'Academics', icon: <AcademicsIcon size={20} /> },
        { name: 'My fees', icon: <FeesIcon size={20} /> },
        { name: 'Payments', icon: <PaymentsIcon size={20} /> },
        { name: 'My Requests', icon: <MyRequestsIcon size={20} /> },
        { name: 'Events', icon: <EventsIcon size={20} /> },
        { name: 'Settings', icon: <SettingsIcon size={20} /> },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case 'Student Profile':
                return <StudentProfile />;
            case 'Academics':
                return <Academics />;
            case 'My fees':
                return <MyFees />;
            case 'My Requests':
                return <div className="p-8 text-center"><h2>My Requests Section</h2><p>Coming Soon</p></div>;
            case 'Events':
                return <div className="p-8 text-center"><h2>Events Section</h2><p>Coming Soon</p></div>;
            case 'Payments':
                return <Payments />;
            case 'Settings':
                return <Settings />;
            case 'Dashboard':
            default:
                return (
                    <div className="dashboard-container">
                        <div className="content-grid">
                            {/* Left Main Panel */}
                            <div className="left-panel">
                                {/* Stats Grid (2x2) */}
                                <div className="stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-icon"><TotalAccountsIcon size={48} /></div>
                                        <div className="stat-info">
                                            <h3>Current GPA</h3>
                                            <div className="stat-value">3.85</div>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon"><CreditsEarnedIcon size={48} /></div>
                                        <div className="stat-info">
                                            <h3>Credits Earned</h3>
                                            <div className="stat-value">120/360</div>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon"><UpcomingExamsIcon size={48} /></div>
                                        <div className="stat-info">
                                            <h3>Upcoming Exams</h3>
                                            <div className="stat-value">3</div>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon"><LibraryItemsIcon size={48} /></div>
                                        <div className="stat-info">
                                            <h3>Library Items Due</h3>
                                            <div className="stat-value">1</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Charts Row: Applications History + Overall Applications */}
                                <div className="charts-row">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Grade Progress</h3>
                                            <button style={{
                                                padding: '4px 12px',
                                                border: '1px solid #ccc',
                                                borderRadius: '6px',
                                                background: 'white',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '0.8rem',
                                                fontWeight: '500'
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2048 2048">
                                                    <path fill="currentColor" d="M1152 1536h896l-448 448zm0-128v-128H896v640H256v-805l-83 82l-90-90l941-942l941 942l-90 90l-83-82v293h-128V987l-640-640l-640 640v805h384v-640h512v256z" />
                                                </svg>
                                                Filter
                                            </button>
                                        </div>
                                        <div className="chart-container">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={data}>
                                                    <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={10} />
                                                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={20}>
                                                        {data.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <h3 className="card-title">Attendance Rate</h3>
                                        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>92%</h1>
                                        <div className="overall-bar">
                                            <div className="bar-segment" style={{ width: '5%', background: '#dc2626' }}></div>
                                            <div className="bar-segment" style={{ width: '15%', background: '#f97316' }}></div>
                                            <div className="bar-segment" style={{ width: '80%', background: '#22c55e' }}></div>
                                        </div>
                                        <div className="legend">
                                            <div className="legend-item">
                                                <div className="dot" style={{ background: '#dc2626' }}></div>
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>5</div>
                                                    <div style={{ color: '#666', fontSize: '0.7rem' }}>Absent</div>
                                                </div>
                                            </div>
                                            <div className="legend-item">
                                                <div className="dot" style={{ background: '#f97316' }}></div>
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>2</div>
                                                    <div style={{ color: '#666', fontSize: '0.7rem' }}>Late</div>
                                                </div>
                                            </div>
                                            <div className="legend-item">
                                                <div className="dot" style={{ background: '#22c55e' }}></div>
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>45</div>
                                                    <div style={{ color: '#666', fontSize: '0.7rem' }}>Present</div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="payment-btn"
                                            style={{ marginTop: '2rem', background: '#A80000' }}
                                            onClick={() => setActiveMenu('Academics')}
                                        >
                                            View Attendance Details
                                        </button>
                                    </div>
                                </div>

                                {/* Grade History Summary */}
                                <div className="card" style={{ height: '300px' }}>
                                    <h3 className="card-title">Semester Performance Trend</h3>
                                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem' }}>A line graph showing your GPA progress over semesters</p>
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="right-panel">
                                {/* Wrapper Card for Amounts */}
                                <div className="card" style={{ padding: '1.5rem' }}>
                                    <div className="summary-card-white">
                                        <h3>Outstanding Tuition Balance</h3>
                                        <p>Semester 1 2024</p>
                                        <div className="amount">BWP 15,000.00</div>
                                    </div>

                                    <div className="summary-card-white">
                                        <h3>Library Fines Due</h3>
                                        <p>Overdue Items</p>
                                        <div className="amount">BWP 50.00</div>
                                    </div>

                                    <button
                                        className="payment-btn"
                                        onClick={() => setActiveMenu('My fees')}
                                    >
                                        Go to My Fees
                                    </button>
                                </div>

                                {/* Events/Deadlines */}
                                <div className="card" style={{ height: '300px' }}>
                                    <h3 className="card-title">Upcoming Deadlines</h3>
                                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem' }}>List of upcoming assignments and due dates</p>
                                </div>
                            </div>
                        </div>
                    </div >
                );
        }
    };

    return (
        <div className="dashboard-layout">
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src={logo} alt="BHC Logo" className="logo-img" />
                    </div>
                    <button className="sidebar-close" onClick={closeSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="menu-label">MENU</div>

                <nav className="nav-menu">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`nav-item ${activeMenu === item.name ? 'active' : ''}`}
                            onClick={() => handleMenuClick(item.name)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.name}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="header">
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    {!['Student Profile', 'Academics', 'My fees', 'Payments', 'My Requests', 'Events', 'Settings'].includes(activeMenu) ? (
                        <>
                            <h1 className="header-title">
                                {activeMenu}
                            </h1>

                            <div className="search-bar">
                                <Search size={18} color="#999" />
                                <input type="text" placeholder="Search Here" className="search-input" />
                            </div>
                        </>
                    ) : (
                        <div></div> // Spacer to keep header-right on the right side
                    )}

                    <div className="header-right">
                        <button className="notification-btn">
                            <NotificationIcon size={20} />
                        </button>
                        <div className="user-profile">
                            <div className="avatar">A</div>
                            <div className="user-info">
                                <span className="user-name">Amogelang Thalefang</span>
                                <span className="user-role">Student</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content-scroll-area">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
