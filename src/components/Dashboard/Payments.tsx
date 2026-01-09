import React from 'react';
import { Search } from 'lucide-react';
import './Payments.css';

const Payments: React.FC = () => {
    // Mock data based on the image provided
    const payments = Array(9).fill({
        accountType: 'TPS',
        amountDue: 'P5500.00',
        dateDue: '14 June 2024',
        totalBalance: 'P600`000.00',
        status: 'Due'
    });

    return (
        <div className="payments-container">
            <div className="page-header">
                <h2 className="page-title">Payments</h2>

                <div className="header-actions">
                    <div className="search-bar-alt">
                        <Search size={18} color="#999" />
                        <input type="text" placeholder="Search for applications here" className="search-input" />
                    </div>

                    <button className="filter-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2048 2048" style={{ marginRight: '8px' }}>
                            <path fill="currentColor" d="M1152 1536h896l-448 448zm0-128v-128H896v640H256v-805l-83 82l-90-90l941-942l941 942l-90 90l-83-82v293h-128V987l-640-640l-640 640v805h384v-640h512v256z" />
                        </svg>
                        Filter by Location
                    </button>

                    <button className="action-btn-red">
                        Pending Review
                    </button>
                </div>
            </div>

            <div className="payments-table-container">
                <table className="payments-table">
                    <thead>
                        <tr>
                            <th>ACCOUNT TYPE</th>
                            <th>AMOUNT DUE</th>
                            <th>DATE DUE</th>
                            <th>TOTAL BALANCE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((p, index) => (
                            <tr key={index}>
                                <td className="account-type-text">{p.accountType}</td>
                                <td className="amount-text">{p.amountDue}</td>
                                <td className="date-text">{p.dateDue}</td>
                                <td className="balance-text">{p.totalBalance}</td>
                                <td>
                                    <button className="status-btn">{p.status}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payments;
