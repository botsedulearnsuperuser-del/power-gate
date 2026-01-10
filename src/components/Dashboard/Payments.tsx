import React, { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import './Payments.css';

const TuitionIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M15 21a1.986 1.986 0 0 0 1.934-1.597l.48-2.403h2.836A1.75 1.75 0 0 0 22 15.25V9.261A2.26 2.26 0 0 0 19.75 7v-.004H14.5V5.25A2.25 2.25 0 0 0 12.25 3h-8A2.25 2.25 0 0 0 2 5.25v12.5A3.25 3.25 0 0 0 5.25 21zm2.522-12.182l-2.059 10.291a.486.486 0 0 1-.963-.095V8.496h3.11a2 2 0 0 0-.088.322M5.778 8.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m-.747 7.25a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75m.75-4.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5" /></svg>
);

const LibraryFinesIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="currentColor" d="m210.6 44.39l-7-4.39c-13.7-8.4-30.8-13.28-45.5-8.7c-15.8 4.92-28.4 17.09-35 35.37l-9.4-4.84c-16.2-8.34-24.68-8.47-31.71-5.31c-5.61 2.51-11.46 8.55-18.09 17.37l82.4 63.71c12.9 4.2 31.8 4.1 50.7-.8c19-4.9 37.9-14.5 51.7-27.4l31.1-76.9c-27.4-21.65-52.4-9.11-69.2 11.89m53.1 76.51c-17 17.2-42.3 28.8-62 34c-6.9 1.8-13.8 3.1-20.5 3.8c-3.7 6.1-6.8 12.3-9.2 18.5c4.8 24.4 13.8 44.4 27.3 60.8l-14.4 12c-8.3-10-15.7-20.8-21.3-32.8c-.9 23.2 4.3 47.2 12.8 72.2l-17.7 6c-15.6-45.6-20.9-92.3 1-136.3c-7.4-.6-14.4-2-20.9-4.3l-.3-.1q-6.45 6.15-12.3 12.9c-31.57 36.6-48.96 85.3-39.86 123.2c4.87 20.3 13.6 39.5 26.16 55.9c18.4-.4 35.8 0 51.6 6c7.5-.8 15.2-1.3 23.2-1.3c28.5 0 54.3 5.3 73.8 14.5c7.6 3.6 14.5 7.9 20 12.8c0-5.3.8-11 2.4-15.2c-8.9-8.4-14.5-18.6-14.5-30.2c0-16.1 10.7-29.4 26.2-39c0-4.6.9-9 2.5-13.2c-10.1-8.7-16.6-19.5-16.6-32.1c0-7.9 2.6-15.1 7-21.6c-4.4-6.4-7-13.6-7-21.5c0-3.9.6-7.5 1.7-11c-9.7-8.6-15.8-19.2-15.8-31.4c0-12.1 6-22.6 15.6-31.1c-5.9-4.6-12.2-8.5-18.9-11.5m111.4 2.3c-26 0-49.5 5.5-65.6 13.6c-16.2 8.1-23.8 18.1-23.8 26.7c0 8.7 7.6 18.7 23.8 26.8c16.1 8.1 39.6 13.6 65.6 13.6c11.3 0 22-1.1 31.9-2.9v-17c13.9-2.1 25.4-5.9 32.8-10.8v17.6c12.5-3.6 24.5-16.9 24.8-27.3c0-8.6-7.6-18.6-23.8-26.7s-39.6-13.6-65.7-13.6m96.5 67.7c-3.3 3.5-7.2 6.8-11.6 9.8l.2 29c12.6-7.5 18.5-16.2 18.5-23.8c0-4.8-2.3-10-7.1-15m-171.8 15.4c.3 8.6 7.9 18.3 23.8 26.3c16.2 8.2 39.6 13.6 65.7 13.6c16.3 0 31.6-2.2 44.7-5.8l.7-27.2c-17.2 6-37.6 9.3-59.6 9.3c-28.5 0-54.4-5.7-74-15.5c-.5-.2-.9-.5-1.3-.7m2 34.8c-1.4 2.7-2 5.4-2 7.9c0 8.7 7.6 18.7 23.8 26.8s39.6 13.5 65.7 13.5c13.2 0 25.7-1.3 37-3.8v-24c-11.6 2.2-24 3.3-37 3.3c-28.6 0-54.5-5.6-74.1-15.5c-4.9-2.4-9.4-5.2-13.4-8.2m174.9 0c-6.1 4.3-11.4 7.5-17.6 10.2v22.3c13.3-7.7 19.6-16.7 19.6-24.6c0-2.5-.6-5.2-2-7.9m7.5 36.8c-2 2-4.2 3.9-6.6 5.8v32.4c10.3-7 15.3-14.7 15.3-21.7c0-5.3-2.9-11-8.7-16.5m-170.1 14c-.1.9-.2 1.7-.2 2.5c0 8.7 7.6 18.6 23.8 26.7c16.2 8.2 39.7 13.6 65.7 13.6c14.9 0 29.1-1.8 41.4-4.8V300c-16.3 5.2-35.2 8-55.5 8c-28.6 0-54.5-5.7-74.1-15.5c-.4-.2-.7-.4-1.1-.6m-13.6 21.4c-8.7 6.5-12.8 13.6-12.8 20c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c9.5 0 18.7-.7 27.3-2v-18.2h-1.1c-28.6 0-54.5-5.7-74.1-15.6c-12.5-6.2-22.9-14.5-28.8-24.5M463 343.9c-7.9 2.8-16.5 5.1-25.7 6.6v12.1c1.9-.8 3.8-1.6 5.6-2.5c9.8-5 16.4-10.6 20.1-16.2m9.2 18.2c-3.8 3.8-8.2 7.2-13.1 10.3V401c13.3-7.6 19.6-16.6 19.6-24.5c0-4.6-2.1-9.6-6.5-14.4m-348.7 2.8c-10.2.1-21.2 1.4-32.6 4.1c-22.81 5.3-42.42 15-55.22 25.7c-12.8 10.6-17.8 21.4-16.3 29.1s9.4 14.8 24.8 18.9c15.35 4 36.82 4.2 59.62-1.1c9.2-2.2 17.8-5 25.7-8.3v-20.7c14.6-6.5 25.5-14.3 30.4-21.9v24.4c12.1-10.4 16.8-20.8 15.4-28.4c-1.4-7.7-9.4-14.8-24.8-18.8c-7.7-2-16.9-3.1-27-3m64.6 5.2c2.7 3.9 4.6 8.3 5.6 13.2c1.1 6 .6 11.8-1.2 17.5c9.9 2.6 18.9 6.1 26.7 10.5c4.4 2.4 8.5 5.3 12.1 8.3c9-2.1 16.6-5.1 22-8.7v20.6c16.1-7.6 23.5-16.9 23.5-24.3c0-7.5-7.4-16.8-23.6-24.4c-16.1-7.5-39.3-12.6-65.1-12.7m111.8 5c-.1.4-.1.9-.1 1.4c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.9c-14.8 4-31.5 6.2-49.1 6.2c-28.6 0-54.5-5.7-74.1-15.5c-1.1-.6-2.2-1.2-3.2-1.7m2.8 37.3c-2 3.3-2.9 6.5-2.9 9.6c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.4c-11.6 2.2-24 3.4-37 3.4c-28.6 0-54.5-5.7-74.1-15.6c-4.5-2.2-8.7-4.7-12.5-7.5m173.1 0c-5.8 3.9-10.9 7-16.7 9.5v24.6c13.3-7.6 19.6-16.6 19.6-24.5c0-3.1-.9-6.3-2.9-9.6m-292.6 5.4c-3.5 4.4-7.6 8.6-12.2 12.4c-15.6 13.1-37.6 23.7-63 29.6c-9.06 2.1-18.06 3.4-26.7 4.1c3.2 5.3 8.83 10.5 17.07 15.1c13.63 7.7 33.63 12.9 55.83 12.9c10.1 0 19.7-1.1 28.5-3v-20.8c13.8-2.1 25.4-5.9 32.8-10.8v18.4c10-7 14.8-14.9 14.8-22.4c0-8.7-6.5-18-20.2-25.7c-7.4-4.1-16.6-7.5-26.9-9.8" /></svg>
);

const AdminFeesIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M11 8c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4m0 6.72V20H0v-2c0-2.21 3.13-4 7-4c1.5 0 2.87.27 4 .72M24 20H13V3h11zm-8-8.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0M22 7a2 2 0 0 1-2-2h-3c0 1.11-.89 2-2 2v9a2 2 0 0 1 2 2h3c0-1.1.9-2 2-2z" /></svg>
);

const OtherPaymentsIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="currentColor" d="M432 64H16v320h416Zm-32 288H48V96h352Z" /><path fill="currentColor" d="M464 144v272H96v32h400V144z" /><path fill="currentColor" d="M224 302.46c39.7 0 72-35.137 72-78.326s-32.3-78.326-72-78.326s-72 35.136-72 78.326s32.3 78.326 72 78.326m0-124.652c22.056 0 40 20.782 40 46.326s-17.944 46.326-40 46.326s-40-20.782-40-46.326s17.944-46.326 40-46.326M80 136h32v176H80zm256 0h32v176h-32z" /></svg>
);

const Payments: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [step, setStep] = useState(1);

    const categories = [
        { id: 'tuition', name: 'Tuition Fees', icon: <TuitionIcon size={24} /> },
        { id: 'library', name: 'Library Fines', icon: <LibraryFinesIcon size={24} /> },
        { id: 'admin', name: 'Administrative Fees', icon: <AdminFeesIcon size={24} /> },
        { id: 'other', name: 'Other Payments', icon: <OtherPaymentsIcon size={24} /> },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2); // Show success state
    };

    if (step === 2) {
        return (
            <div className="payments-container success-view animate-fade-in">
                <div className="success-card">
                    <CheckCircle2 size={64} color="#22c55e" />
                    <h2>Payment Proof Submitted!</h2>
                    <p>Your payment for <strong>{amount}</strong> has been uploaded successfully. Our finance department will review it and update your account within 24-48 hours.</p>
                    <button className="back-btn" onClick={() => { setStep(1); setAmount(''); setFile(null); }}>
                        Make Another Payment
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="payments-container animate-fade-in">
            <div className="page-header">
                <h2 className="page-title">Make a Payment</h2>
                <p className="page-subtitle">Choose your payment type and upload your proof of bank transfer.</p>
            </div>

            <div className="payments-grid">
                <div className="payment-form-section">
                    <div className="card">
                        <h3>Payment Details</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Select What You Are Paying For</label>
                                <div className="category-selector">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat.id}
                                            className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(cat.id)}
                                        >
                                            <span className="cat-icon">{cat.icon}</span>
                                            <span className="cat-name">{cat.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="amount">Amount to Pay (BWP)</label>
                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="e.g. 500.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Upload Proof of Payment (PDF, JPG, PNG)</label>
                                <div
                                    className={`upload-zone ${file ? 'has-file' : ''}`}
                                    onClick={() => document.getElementById('pop-upload')?.click()}
                                >
                                    <Upload size={32} />
                                    {file ? (
                                        <p className="file-name">{file.name}</p>
                                    ) : (
                                        <p>Click to upload or drag receipt here</p>
                                    )}
                                    <input
                                        type="file"
                                        id="pop-upload"
                                        hidden
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="submit-payment-btn" disabled={!selectedCategory || !amount || !file}>
                                Submit Payment for Review
                            </button>
                        </form>
                    </div>
                </div>

                <div className="payment-sidebar">
                    <div className="card banking-details-card">
                        <h3>Our Banking Details</h3>
                        <div className="bank-info-list">
                            <div className="bank-item">
                                <span className="label">Bank Name</span>
                                <span className="value">First National Bank (FNB)</span>
                            </div>
                            <div className="bank-item">
                                <span className="label">Account Name</span>
                                <span className="value">Botho University Accounts</span>
                            </div>
                            <div className="bank-item">
                                <span className="label">Account Number</span>
                                <span className="value">62849103948</span>
                            </div>
                            <div className="bank-item">
                                <span className="label">Branch Code</span>
                                <span className="value">284567</span>
                            </div>
                            <div className="bank-item">
                                <span className="label">Reference</span>
                                <span className="value red-text text-bold">Your Student ID (e.g. 2100123)</span>
                            </div>
                        </div>
                    </div>

                    <div className="card instructions-card">
                        <h3>How to Pay</h3>
                        <ol className="instructions-list">
                            <li>Make a transfer using your banking app or at any bank branch.</li>
                            <li>Use your <strong>Student ID</strong> as the payment reference.</li>
                            <li>Download or take a photo of the receipt/proof of payment.</li>
                            <li>Complete the form on this page and upload the receipt.</li>
                            <li>Wait for verification from our finance team.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
