import React, { useState } from 'react';
import './Dashboard.css';
import { Search, Bell, ChevronRight, MoreVertical } from 'lucide-react';
import { FullScreenCalendar } from "../ui/fullscreen-calendar";

const dummyEvents = [
    {
        day: new Date("2026-01-02"),
        events: [
            {
                id: 1,
                name: "Q1 Planning Session",
                time: "10:00 AM",
                datetime: "2026-01-02T00:00",
            },
            {
                id: 2,
                name: "Team Sync",
                time: "2:00 PM",
                datetime: "2026-01-02T00:00",
            },
        ],
    },
    {
        day: new Date("2026-01-07"),
        events: [
            {
                id: 3,
                name: "Product Launch Review",
                time: "2:00 PM",
                datetime: "2026-01-07T00:00",
            },
            {
                id: 4,
                name: "Marketing Sync",
                time: "11:00 AM",
                datetime: "2026-01-07T00:00",
            },
            {
                id: 5,
                name: "Vendor Meeting",
                time: "4:30 PM",
                datetime: "2026-01-07T00:00",
            },
        ],
    },
    {
        day: new Date("2026-01-10"),
        events: [
            {
                id: 6,
                name: "Team Building Workshop",
                time: "11:00 AM",
                datetime: "2026-01-10T00:00",
            },
        ],
    },
    {
        day: new Date("2026-01-13"),
        events: [
            {
                id: 7,
                name: "Budget Analysis Meeting",
                time: "3:30 PM",
                datetime: "2026-01-14T00:00",
            },
            {
                id: 8,
                name: "Sprint Planning",
                time: "9:00 AM",
                datetime: "2026-01-14T00:00",
            },
            {
                id: 9,
                name: "Design Review",
                time: "1:00 PM",
                datetime: "2026-01-14T00:00",
            },
        ],
    },
    {
        day: new Date("2026-01-16"),
        events: [
            {
                id: 10,
                name: "Client Presentation",
                time: "10:00 AM",
                datetime: "2026-01-16T00:00",
            },
            {
                id: 11,
                name: "Team Lunch",
                time: "12:30 PM",
                datetime: "2026-01-16T00:00",
            },
            {
                id: 12,
                name: "Project Status Update",
                time: "2:00 PM",
                datetime: "2026-01-16T00:00",
            },
        ],
    },
]
const Dashboard: React.FC = () => {
    const promoImage = "/assets/undraw_educator_6dgp.svg";
    const [activeMenu, setActiveMenu] = useState('Schedule');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const courses = [
        {
            id: 1,
            title: 'Graphic Fundamentals - ART101',
            prof: 'Prof. Smith',
            days: 'Monday & Wednesday',
            time: '9:00 AM - 10:30 AM',
            location: 'Design Studio A',
            color: '#F3E8FF'
        },
        {
            id: 2,
            title: 'Advanced Web Design - ITD201',
            prof: 'Dr. Johnson',
            days: 'Tuesday & Thursday',
            time: '1:30 PM - 3:00 PM',
            location: 'Computer Lab 3',
            color: '#FEF3C7'
        },
        {
            id: 3,
            title: 'User Experience Research - UXD301',
            prof: 'Prof. Davis',
            days: 'Monday & Saturday',
            time: '11:00 AM - 12:30 AM',
            location: 'Design Lab 2',
            color: '#E0F2FE'
        },
        {
            id: 4,
            title: '3D Animation Techniques - ANI301',
            prof: 'Dr. Martinez',
            days: 'Wednesday',
            time: '2:00 PM - 5:00 PM',
            location: 'Animation Studio',
            color: '#DCFCE7'
        }
    ];

    const exams = [
        { name: 'Graphic Design Fundamentals', course: 'ART101', date: 'Jan 25, 2024', time: '10:00 AM', location: 'Design Studio A', status: 'Completed' },
        { name: 'Digital Illustration', course: 'ART103', date: 'Feb 5, 2024', time: '02:00 PM', location: 'Computer Lab 2', status: 'Completed' },
        { name: 'UX/UI Design Principles', course: 'UXD301', date: 'Mar 10, 2024', time: '01:00 PM', location: 'Design Lab 1', status: 'Upcoming' },
        { name: 'History of Design Essay', course: 'ART101', date: 'Apr 2, 2024', time: '09:45 AM', location: 'Lecture Hall B', status: 'Upcoming' },
        { name: 'Product Design Prototype', course: 'ITD201', date: 'May 15, 2024', time: '11:15 AM', location: 'Prototype Lab', status: 'Upcoming' },
        { name: 'Color Theory and Application', course: 'ART103', date: 'June 3, 2024', time: '02:15 PM', location: 'Design Studio B', status: 'Upcoming' },
        { name: 'Visual Communication Design', course: 'ART202', date: 'Nov 20, 2024', time: '2:00 PM', location: 'Design Studio B', status: 'Upcoming' },
    ];

    const homeworks = [
        { id: 1, title: 'Graphic Fundamentals', assignment: 'Design Project 1', due: 'February 10, 2024', status: 'Not Submitted', statusColor: '#FEE2E2', textColor: '#EF4444', borderColor: '#EF4444' },
        { id: 2, title: 'Advanced Web Design', assignment: 'Responsive Website Project', due: 'March 5, 2024', status: 'completed', statusColor: '#DCFCE7', textColor: '#16A34A', borderColor: '#BBF7D0' },
        { id: 3, title: 'User Experience Research', assignment: 'Usability Testing Report', due: 'April 15, 2024', status: 'In progress', statusColor: '#F3E8FF', textColor: '#9333EA', borderColor: '#E9D5FF' },
        { id: 4, title: 'Digital Photography', assignment: 'Photojournalism Project', due: 'April 8, 2024', status: 'not started', statusColor: '#FEE2E2', textColor: '#EF4444', borderColor: '#FEE2E2' },
        { id: 5, title: '3D Animation', assignment: 'Character Animation Project', due: 'May 20, 2024', status: 'Not Submitted', statusColor: '#FFEDD5', textColor: '#D97706', borderColor: '#FED7AA' },
    ];

    return (
        <div className="dashboard-wrapper">
            {/* Sidebar */}
            <aside className={`utopia-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-logo">
                    <div className="logo-section">
                        <div className="logo-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <rect x="2" y="4" width="6" height="6" rx="1" />
                                <rect x="2" y="12" width="6" height="8" rx="1" />
                                <rect x="10" y="4" width="12" height="16" rx="2" opacity="0.6" />
                            </svg>
                        </div>
                        <span className="logo-text">BU portal</span>
                    </div>
                    <button className="sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062M12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784" clip-rule="evenodd" /><path fill="currentColor" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268c.684.683 1.757.729 3.815.732c-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123" /></svg>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-section">
                        <button
                            className={`nav-btn ${activeMenu === 'Dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveMenu('Dashboard')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 4.68v3.88a2.45 2.45 0 0 1-1.509 2.258A2.4 2.4 0 0 1 8.56 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.4 2.4 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.88a2.45 2.45 0 0 1-2.256-1.502A2.4 2.4 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m10.75 1.93A4.37 4.37 0 1 1 17.37 13a4.4 4.4 0 0 1 4.049 2.707c.22.53.332 1.099.331 1.673" /></svg>
                            <span>Dashboard</span>
                        </button>
                    </div>

                    <div className="nav-section">
                        <p className="section-label">ACADEMIC</p>
                        <button
                            className={`nav-btn ${activeMenu === 'Schedule' ? 'active' : ''}`}
                            onClick={() => setActiveMenu('Schedule')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" /><circle cx="17" cy="17" r="5" /></g></svg>
                            <span>Schedule</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M7 .5C5.632.5 4.526.541 3.381.62a2.42 2.42 0 0 0-2.254 2.265A66 66 0 0 0 1 7c0 1.41.044 2.786.127 4.115a2.42 2.42 0 0 0 2.254 2.265c1.145.079 2.25.12 3.619.12c1.368 0 2.474-.041 3.619-.12a2.42 2.42 0 0 0 2.254-2.265a66 66 0 0 0 .106-5.81a2.4 2.4 0 0 0-.464-1.367c-.904-1.231-1.636-2.011-2.832-2.934A2.38 2.38 0 0 0 8.28.514A59 59 0 0 0 7 .5M4.469 7.016c0-.346.28-.625.625-.625h3.812a.625.625 0 0 1 0 1.25H5.094a.625.625 0 0 1-.625-.625m.625-3.641a.625.625 0 1 0 0 1.25h2.3a.625.625 0 0 0 0-1.25zm0 5.922a.625.625 0 1 0 0 1.25h3.8a.625.625 0 1 0 0-1.25z" clip-rule="evenodd" /></svg>
                            <span>Exam Board</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M9.875 0a1 1 0 0 0-.406.156S8.204.952 6.844 1.813c-1.36.86-2.873 1.808-3.219 2l-.063.03C2.306 4.618 2.045 5.884 2 6.594c-.003.033 0 .06 0 .095c-.011.266 0 .437 0 .437v13.063C2 22.087 4.213 23 6.313 23c.7 0 1.4-.113 2-.313c.4-.2.687-.6.687-1v-10.5c0-2.3.5-3.38 2-4.28c.4-.2 4.594-3.095 4.594-3.095c.2-.2.406-.606.406-.906v-.094c0-.4-.2-.706-.5-.906s-.7-.2-1 0c-.1.1-6.2 4.207-7.5 4.907c-1.3.8-2.513.993-2.813.593c-.093-.093-.174-.378-.187-.656v-.063c.001-.272.071-.784.625-1.125c.562-.313 1.957-1.204 3.313-2.062c.573-.363.644-.402 1.093-.688A1 1 0 0 0 11 2.5V1a1 1 0 0 0-1.125-1m8 3.5a1 1 0 0 0-.438.188s-5.034 3.387-5.906 3.968l-.031.032c-.724.543-1.153 1.189-1.344 1.78A3.3 3.3 0 0 0 10 10.5v.313a1 1 0 0 0 0 .093V23c0 1.9 2.188 3 4.188 3c.9 0 1.712-.194 2.312-.594c1.2-.7 7-5.218 7-5.218c.3-.2.5-.482.5-.782v-13c0-.5-.194-.8-.594-1c-.3-.2-.793-.106-1.093.094c-1.6 1.2-5.907 4.588-6.907 5.188c-1.4.8-2.719 1-3.219.5c-.2-.2-.187-.388-.187-.688q.008-.26.063-.438c.056-.174.17-.388.593-.718c.02-.016.01-.015.031-.031c.723-.483 2.934-1.99 4.376-2.97A1 1 0 0 0 19 6V4.5a1 1 0 0 0-1.125-1M22 10.813v2l-5 3.874v-2z" /></svg>
                            <span>Homeworks</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M9.646 2.191C12.526 1.855 17.181 1.5 24 1.5c1.985 0 3.787.03 5.415.081a1.5 1.5 0 0 1 .399.067c1.146.357 4.227 1.633 8.538 5.837c4.062 3.961 5.464 6.864 5.923 8.135q.078.22.088.453c.084 2.261.137 4.89.137 7.927c0 8.11-.377 13.307-.726 16.384c-.33 2.899-2.532 5.088-5.42 5.425c-2.88.336-7.536.691-14.354.691s-11.475-.355-14.354-.691c-2.888-.337-5.09-2.526-5.42-5.425C3.876 37.307 3.5 32.11 3.5 24s.377-13.307.726-16.384c.33-2.899 2.532-5.088 5.42-5.425M13 39.75a1.75 1.75 0 1 1 0-3.5h22a1.75 1.75 0 1 1 0 3.5zM11.25 31c0-.966.784-1.75 1.75-1.75h22a1.75 1.75 0 1 1 0 3.5H13A1.75 1.75 0 0 1 11.25 31m16.197-19.796a26.6 26.6 0 0 1 5.718-.44a2.14 2.14 0 0 1 2.072 2.071a26.7 26.7 0 0 1-.441 5.718c-.346 1.826-2.526 2.303-3.717 1.113l-1.139-1.14l-.236.207a36 36 0 0 0-1.099 1.008c-.898.86-2.027 2.023-3.002 3.28c-.734.946-1.868 1.222-2.792 1.08c-.931-.145-1.963-.77-2.33-1.974c-.366-1.194-.83-2.577-1.316-3.704c-1.054.795-2.719 2.375-4.7 5.403a1.75 1.75 0 0 1-2.93-1.916c2.689-4.108 5.01-6.032 6.445-6.914c1.509-.926 3.3-.246 4.006 1.186c.568 1.152 1.093 2.596 1.511 3.877a37 37 0 0 1 2.69-2.847c.486-.466.906-.844 1.205-1.107l.067-.06l-1.124-1.124c-1.191-1.19-.714-3.37 1.112-3.717" clip-rule="evenodd" /></svg>
                            <span>Grade Report</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M4.08.65H.16v12.74h5.88L8 15.35l1.96-1.96h5.88V.65h-3.92A3.92 3.92 0 0 0 8 4.57A3.92 3.92 0 0 0 4.08.65" /></svg>
                            <span>Enrolled Courses</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1" /></svg>
                            <span>Course Plan</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="currentColor" d="M64 480H48a32 32 0 0 1-32-32V112a32 32 0 0 1 32-32h16a32 32 0 0 1 32 32v336a32 32 0 0 1-32 480m176-304a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v28a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4ZM112 448a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-30a2 2 0 0 0-2-2H114a2 2 0 0 0-2 2Z" /><rect width="128" height="144" x="112" y="240" fill="currentColor" rx="2" ry="2" /><path fill="currentColor" d="M320 480h-32a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v384a32 32 0 0 1-32 32m175.89-34.55l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36" /></svg>
                            <span>Attendance</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m.47-3.5a.5.5 0 0 0 .5.44H14a.51.51 0 0 0 .5-.44a9.2 9.2 0 0 1 1.2-3a.47.47 0 0 0-.07-.57a.5.5 0 0 0-.53-.18l-1.86.8a.23.23 0 0 1-.2 0a.25.25 0 0 1-.14-.13L12.46.31a.5.5 0 0 0-.92 0l-.44 1.11a.25.25 0 0 1-.14.13a.23.23 0 0 1-.2 0L8.9.75a.5.5 0 0 0-.56.13a.47.47 0 0 0-.07.57a9.2 9.2 0 0 1 1.2 3.05m5.97 4.62a.58.58 0 0 0-.36-.12H8.92a.58.58 0 0 0-.36.12c-2.55 2-5.4 5.4-5.4 8.4C3.16 21.75 5.52 24 12 24s8.84-2.25 8.84-6.48c0-3-2.84-6.45-5.4-8.4M13 20.13a.26.26 0 0 0-.21.25v.37a.75.75 0 0 1-1.5 0v-.32a.25.25 0 0 0-.25-.25h-.59a.75.75 0 0 1 0-1.5h2.15a.67.67 0 0 0 .25-1.3l-2.18-.87a2.16 2.16 0 0 1 .33-4.14a.26.26 0 0 0 .21-.25v-.37a.75.75 0 0 1 1.5 0v.32a.25.25 0 0 0 .25.25h.59a.75.75 0 0 1 0 1.5h-2.11a.67.67 0 0 0-.25 1.3l2.18.87a2.16 2.16 0 0 1-.37 4.14" /></svg>
                            <span>Libraries</span>
                        </button>
                    </div>

                    <div className="nav-section">
                        <p className="section-label">ADMINISTRATIVE</p>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M25.5.5a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0v-3a2 2 0 0 0-2-2m-17 21a2 2 0 1 1 0-4h3a2 2 0 1 1 0 4zm34 0a2 2 0 1 0 0-4h-3a2 2 0 1 0 0 4zM12.064 8.895a2 2 0 0 1 2.829-2.828l2.121 2.12a2 2 0 1 1-2.828 2.83zm26.87-2.828a2 2 0 0 1 0 2.828l-2.122 2.121a2 2 0 1 1-2.828-2.828l2.121-2.121a2 2 0 0 1 2.829 0M25.049 10.04a1.5 1.5 0 0 1 2.119.095l.003.003l.003.004l.01.01l.03.034l.1.117q.13.15.368.447c.319.4.785 1.008 1.398 1.874c1.225 1.73 3.042 4.491 5.446 8.656c2.405 4.164 3.887 7.117 4.773 9.045a41 41 0 0 1 .924 2.147a18 18 0 0 1 .254.687l.014.043l.005.014l.002.007v.002a1.5 1.5 0 0 1-2.85.935c-1.245.418-2.51.83-3.782 1.233a72 72 0 0 0-1.257-2.881a98 98 0 0 0-4.047-7.789a98 98 0 0 0-4.72-7.399a72 72 0 0 0-1.865-2.526c.985-.9 1.974-1.79 2.959-2.659a1.5 1.5 0 0 1 .113-2.099m5.81 25.93q.068.159.133.318c-2.04.625-4.07 1.224-6.032 1.786l.277 1.032a6.59 6.59 0 1 1-12.733 3.412l-.266-.992c-.98.25-1.82.463-2.49.63c-1.649.412-3.445-.144-4.503-1.582c-.38-.518-.805-1.13-1.147-1.724a19 19 0 0 1-.92-1.855c-.716-1.635-.3-3.469.882-4.691c2.61-2.7 8.892-9.116 15.704-15.464l.207.27c.335.442.822 1.098 1.419 1.944a95 95 0 0 1 4.574 7.17a95 95 0 0 1 3.922 7.546c.435.94.76 1.69.974 2.2Zm-14.75 4.546l.259.966a2.59 2.59 0 1 0 5.005-1.34l-.263-.982c-1.787.495-3.472.95-5.001 1.356" clip-rule="evenodd" /></svg>
                            <span>Finance</span>
                        </button>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.873 1h2.23c.336-.005.665.105.93.312c.267.21.452.505.52.837l.195.935q.127.068.25.14l.945-.31a1.48 1.48 0 0 1 1.181.119c.22.124.405.302.534.52l1.125 1.856a1.41 1.41 0 0 1-.281 1.83H14.5l-.742.633v.258l.733.653a1.41 1.41 0 0 1 .297 1.8l-1.09 1.86v.002a1.46 1.46 0 0 1-1.255.711a1.5 1.5 0 0 1-.461-.07l-.005-.002l-.937-.309q-.125.074-.254.141l-.194.934a1.43 1.43 0 0 1-.52.838A1.47 1.47 0 0 1 9.14 15H6.892a1.47 1.47 0 0 1-.93-.312a1.43 1.43 0 0 1-.52-.837l-.195-.936a6 6 0 0 1-.25-.14l-.945.31a1.48 1.48 0 0 1-1.181-.119a1.44 1.44 0 0 1-.534-.518l-1.126-1.86a1.41 1.41 0 0 1 .259-1.794l.747-.942l-.713-.635a1.41 1.41 0 0 1-.296-1.802l.002-.002l1.127-1.86a1.45 1.45 0 0 1 1.239-.709q.226-.012.446.043l.022.006l.935.329q.123-.072.25-.138l.194-.934a1.43 1.43 0 0 1 .52-.838c.264-.207.594-.317.93-.312M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd" /></svg>
                            <span>Announcements</span>
                        </button>
                    </div>

                    <div className="nav-section settings-section">
                        <p className="section-label">SETTINGS</p>
                        <button className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1a2 2 0 0 0-1.98 2.284A7 7 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7 7 0 0 0-5.02-6.716Q14 3.144 14 3a2 2 0 0 0-2-2m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1" clip-rule="evenodd" /></svg>
                            <span>Account Settings</span>
                        </button>
                        <button className="nav-btn">
                            <Bell size={18} />
                            <span>Notification Preferences</span>
                        </button>
                        <button className="nav-btn logout-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M2.5.351a40.5 40.5 0 0 1 5.74 0c1.136.081 2.072.874 2.264 1.932a2.25 2.25 0 0 0-2.108 2.28H4.754a2.25 2.25 0 0 0 0 4.5h3.642a2.25 2.25 0 0 0 2.145 2.281l-.004.085c-.06 1.2-1.06 2.132-2.296 2.22a40.5 40.5 0 0 1-5.742 0C1.263 13.561.263 12.63.203 11.43a91 91 0 0 1 0-8.859C.263 1.372 1.263.439 2.5.351m7.356 5.462L9.661 4.7a1 1 0 0 1 1.432-1.067c1.107.553 2.178 1.624 2.731 2.731a1 1 0 0 1 0 .895c-.553 1.107-1.624 2.178-2.731 2.731A1 1 0 0 1 9.66 8.924l.195-1.111H4.754a1 1 0 1 1 0-2z" clip-rule="evenodd" /></svg>
                            <span>Logout</span>
                        </button>
                    </div>

                    <div className="sidebar-footer">
                        <p>Copyright @ bothouni</p>
                        <p>developed by <a href="#" className="dev-link">DevGen</a></p>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-area">
                {/* Header - For Dashboard and Schedule */}
                {(activeMenu === 'Dashboard' || activeMenu === 'Schedule') && (
                    <header className="main-header">
                        <div className="header-left">
                            <button className="mobile-toggle-btn" onClick={() => setIsSidebarOpen(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-rule="evenodd" d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1m6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1M9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h5m0 0l-2-2m2 2l-2 2" /></g></svg>
                            </button>
                            <div className="search-container">
                                <Search size={18} className="search-icon" />
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="header-actions">
                            <button className="icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2.586l-2.707 2.707a1 1 0 0 1-1.32.083l-.094-.083L8.585 19H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-4 9H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2" /></svg>
                                <span className="dot-badge"></span>
                            </button>
                            <button className="icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="m32.85 28.13l-.34-.3A14.4 14.4 0 0 1 30 24.9a12.6 12.6 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.6 12.6 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" className="clr-i-solid clr-i-solid-path-1" /><path fill="currentColor" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                                <span className="dot-badge"></span>
                            </button>
                            <div className="user-avatar">
                                <img src="https://ui-avatars.com/api/?name=Merna&background=random" alt="User" />
                            </div>
                        </div>
                    </header>
                )}

                {activeMenu === 'Dashboard' ? (
                    <div className="content-rows">
                        <div className="left-column">
                            <div className="welcome-section">
                                <div className="welcome-text">
                                    <h1>👋 Welcome, Merna!</h1>
                                </div>
                                <div className="date-display">
                                    <span>12 Jan 2023, Friday</span>
                                </div>
                            </div>

                            {/* Promo Banner */}
                            <div className="promo-banner">
                                <div className="promo-content">
                                    <h2>Get Involved – Join a Club Today!</h2>
                                    <p>Explore your interests and meet like-minded students by joining one of our many clubs. Whether you're into sports, arts, or academics, there's a club for you. Find your community!</p>
                                    <button className="learn-more">
                                        Learn More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </button>
                                </div>
                                <div className="promo-image">
                                    <img src={promoImage} alt="Clubs Illustration" />
                                </div>
                            </div>

                            {/* Enrolled Courses */}
                            <section className="courses-section">
                                <div className="section-header">
                                    <div className="title-with-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M4.08.65H.16v12.74h5.88L8 15.35l1.96-1.96h5.88V.65h-3.92A3.92 3.92 0 0 0 8 4.57A3.92 3.92 0 0 0 4.08.65" /></svg>
                                        <h3>Enrolled Courses</h3>
                                    </div>
                                    <button className="view-all">View all <ChevronRight size={16} /></button>
                                </div>
                                <div className="courses-grid">
                                    {courses.map(course => (
                                        <div key={course.id} className="course-card" style={{ backgroundColor: course.color }}>
                                            <div className="course-card-header">
                                                <h4>{course.title}</h4>
                                            </div>
                                            <div className="course-details">
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512"><path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480" /></svg>
                                                    {course.prof}
                                                </p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3" /></svg>
                                                    {course.days}
                                                </p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" /></svg>
                                                    {course.time}
                                                </p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341M12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.7 15.7 0 0 1-2.418 2.008l-.373.246l-.332.209l-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189l-.171-.109l-.373-.246a15.7 15.7 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7m0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4" /></g></svg>
                                                    {course.location}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Exam Board */}
                            <section className="exams-section">
                                <div className="section-header">
                                    <div className="title-with-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M7 .5C5.632.5 4.526.541 3.381.62a2.42 2.42 0 0 0-2.254 2.265A66 66 0 0 0 1 7c0 1.41.044 2.786.127 4.115a2.42 2.42 0 0 0 2.254 2.265c1.145.079 2.25.12 3.619.12c1.368 0 2.474-.041 3.619-.12a2.42 2.42 0 0 0 2.254-2.265a66 66 0 0 0 .106-5.81a2.4 2.4 0 0 0-.464-1.367c-.904-1.231-1.636-2.011-2.832-2.934A2.38 2.38 0 0 0 8.28.514A59 59 0 0 0 7 .5M4.469 7.016c0-.346.28-.625.625-.625h3.812a.625.625 0 0 1 0 1.25H5.094a.625.625 0 0 1-.625-.625m.625-3.641a.625.625 0 1 0 0 1.25h2.3a.625.625 0 0 0 0-1.25zm0 5.922a.625.625 0 1 0 0 1.25h3.8a.625.625 0 1 0 0-1.25z" clip-rule="evenodd" /></svg>
                                        <h3>Exam Board</h3>
                                    </div>
                                    <button className="view-all">View all <ChevronRight size={16} /></button>
                                </div>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Exam Name <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th>Course <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th>Date <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th>Time <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th>Location <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th>Status <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path></svg></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {exams.map((exam, i) => (
                                                <tr key={i}>
                                                    <td>{exam.name}</td>
                                                    <td>{exam.course}</td>
                                                    <td>{exam.date}</td>
                                                    <td>{exam.time}</td>
                                                    <td>{exam.location}</td>
                                                    <td>
                                                        <span className={`status-pill ${exam.status.toLowerCase()}`}>
                                                            {exam.status}
                                                        </span>
                                                    </td>
                                                    <td><button className="more-btn"><MoreVertical size={16} /></button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        <div className="right-column">
                            {/* Semester Progress */}
                            <div className="progress-card">
                                <div className="progress-label">
                                    <span>Semester <b>3</b> of 8</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '37.5%' }}></div>
                                </div>
                            </div>

                            {/* Calendar */}
                            <div className="calendar-card">
                                <div className="calendar-header">
                                    <button className="cal-nav"><ChevronRight size={18} className="rotate-180" /></button>
                                    <h4>January 2024</h4>
                                    <button className="cal-nav"><ChevronRight size={18} /></button>
                                </div>
                                <div className="calendar-grid">
                                    <div className="day-name">Mo</div><div className="day-name">Tu</div><div className="day-name">We</div><div className="day-name">Th</div><div className="day-name">Fr</div><div className="day-name-blue">Sa</div><div className="day-name-blue">Su</div>
                                    {[...Array(31)].map((_, i) => (
                                        <div key={i} className={`day-num 
                                            ${i + 1 === 12 ? 'active' : ''} 
                                            ${[6, 7, 13, 14, 20, 21, 27, 28].includes(i + 1) ? 'weekend' : ''}`}>
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Homeworks */}
                            <section className="homeworks-sidebar">
                                <div className="section-header">
                                    <div className="title-with-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M9.875 0a1 1 0 0 0-.406.156S8.204.952 6.844 1.813c-1.36.86-2.873 1.808-3.219 2l-.063.03C2.306 4.618 2.045 5.884 2 6.594c-.003.033 0 .06 0 .095c-.011.266 0 .437 0 .437v13.063C2 22.087 4.213 23 6.313 23c.7 0 1.4-.113 2-.313c.4-.2.687-.6.687-1v-10.5c0-2.3.5-3.38 2-4.28c.4-.2 4.594-3.095 4.594-3.095c.2-.2.406-.606.406-.906v-.094c0-.4-.2-.706-.5-.906s-.7-.2-1 0c-.1.1-6.2 4.207-7.5 4.907c-1.3.8-2.513.993-2.813.593c-.093-.093-.174-.378-.187-.656v-.063c.001-.272.071-.784.625-1.125c.562-.313 1.957-1.204 3.313-2.062c.573-.363.644-.402 1.093-.688A1 1 0 0 0 11 2.5V1a1 1 0 0 0-1.125-1m8 3.5a1 1 0 0 0-.438.188s-5.034 3.387-5.906 3.968l-.031.032c-.724.543-1.153 1.189-1.344 1.78A3.3 3.3 0 0 0 10 10.5v.313a1 1 0 0 0 0 .093V23c0 1.9 2.188 3 4.188 3c.9 0 1.712-.194 2.312-.594c1.2-.7 7-5.218 7-5.218c.3-.2.5-.482.5-.782v-13c0-.5-.194-.8-.594-1c-.3-.2-.793-.106-1.093.094c-1.6 1.2-5.907 4.588-6.907 5.188c-1.4.8-2.719 1-3.219.5c-.2-.2-.187-.388-.187-.688q.008-.26.063-.438c.056-.174.17-.388.593-.718c.02-.016.01-.015.031-.031c.723-.483 2.934-1.99 4.376-2.97A1 1 0 0 0 19 6V4.5a1 1 0 0 0-1.125-1M22 10.813v2l-5 3.874v-2z" /></svg>
                                        <h3>Homeworks</h3>
                                    </div>
                                    <button className="view-all">View all <ChevronRight size={16} /></button>
                                </div>
                                <div className="homeworks-list">
                                    {homeworks.map(hw => (
                                        <div key={hw.id} className="hw-card">
                                            <div className="hw-content">
                                                <div className="hw-top">
                                                    <h4>{hw.title}</h4>
                                                    <span className="hw-status" style={{ backgroundColor: hw.statusColor, color: hw.textColor }}>{hw.status}</span>
                                                </div>
                                                <p className="hw-assignment">Assignment: {hw.assignment}</p>
                                                <div className="hw-due">
                                                    <span>Due Date: {hw.due}</span>
                                                    <div className="hw-custom-divider" style={{ color: hw.borderColor }}>
                                                        <div className="divider-line"></div>
                                                        <div className="divider-dot"></div>
                                                        <div className="divider-line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                ) : activeMenu === 'Schedule' ? (
                    <div className="schedule-layout-new p-4 md:p-6 h-full flex items-center justify-center bg-[#F8FAFC]">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
                            <FullScreenCalendar data={dummyEvents} />
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
};

export default Dashboard;
