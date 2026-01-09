import React from 'react';
import { Search } from 'lucide-react';
import './CardGrid.css'; // Shared styles

interface CardProps {
    name: string;
    reference?: string;
    issue?: string;
    btnText: string;
}

const InfoCard: React.FC<CardProps> = ({ name, reference, issue, btnText }) => {
    return (
        <div className="info-card">
            <div className="avatar-circle">K</div>
            <h3 className="card-name">{name}</h3>

            {reference && <p className="card-detail ref-num">{reference}</p>}
            {issue && <p className="card-sub-detail">{issue}</p>}

            <button className="card-action-btn">{btnText}</button>
        </div>
    );
};

const FaultsMaintenance: React.FC = () => {
    const faults = Array(8).fill({
        name: 'Kamogelo Nkemi',
        reference: '#RefferenceNumber',
        issue: 'Electrical Fault',
        btnText: 'Pending Review'
    });

    return (
        <div className="grid-page-container">
            <div className="page-header">
                <h2 className="page-title">Faults & Maintenance</h2>

                <div className="header-actions">
                    <div className="search-bar-alt">
                        <Search size={18} color="#999" />
                        {/* Keeping the placeholder text consistent with the request/image even if it looks like copy-paste error from applications */}
                        <input type="text" placeholder="Search for applications Here" className="search-input" />
                    </div>

                    <button className="filter-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2048 2048" style={{ marginRight: '8px' }}>
                            <path fill="currentColor" d="M1152 1536h896l-448 448zm0-128v-128H896v640H256v-805l-83 82l-90-90l941-942l941 942l-90 90l-83-82v293h-128V987l-640-640l-640 640v805h384v-640h512v256z" />
                        </svg>
                        Filter by Location
                    </button>
                    <button className="action-btn-red">Pending Review</button>
                </div>
            </div>

            <div className="card-grid">
                {faults.map((fault, i) => (
                    <InfoCard key={i} {...fault} />
                ))}
            </div>
        </div>
    );
};

export default FaultsMaintenance;
