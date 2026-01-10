import React from 'react';
import './MyFees.css';

const MyFees: React.FC = () => {
    const transactions = [
        { date: '20 Jan 2024', desc: 'Tuition Fee Payment', amount: '-P5,000.00', status: 'Success' },
        { date: '15 Jan 2024', desc: 'Library Fine', amount: '-P50.00', status: 'Success' },
        { date: '05 Jan 2024', desc: 'Registration Fee', amount: '-P1,200.00', status: 'Success' },
        { date: '01 Jan 2024', desc: 'Scholarship Credit', amount: '+P10,000.00', status: 'Credit' },
    ];

    return (
        <div className="fees-container">
            <div className="fees-highlight-grid">
                <div className="balance-card">
                    <h3>Outstanding Balance</h3>
                    <div className="balance-value">P3,750.00</div>
                    <p>Due Date: 15 Feb 2024</p>
                    <button className="pay-now-btn">Pay Now</button>
                </div>

                <div className="fee-summary-cards">
                    <div className="s-card">
                        <span className="s-label">Total Billed</span>
                        <span className="s-value">P15,000.00</span>
                    </div>
                    <div className="s-card">
                        <span className="s-label">Total Paid</span>
                        <span className="s-value">P11,250.00</span>
                    </div>
                </div>
            </div>

            <div className="transactions-section">
                <h3>Transaction History</h3>
                <div className="table-wrapper">
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t, i) => (
                                <tr key={i}>
                                    <td>{t.date}</td>
                                    <td>{t.desc}</td>
                                    <td className={t.amount.startsWith('+') ? 'amt-plus' : 'amt-minus'}>
                                        {t.amount}
                                    </td>
                                    <td>
                                        <span className={`status-tag ${t.status.toLowerCase()}`}>
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFees;
